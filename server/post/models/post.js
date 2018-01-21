const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId; 
const _ = require('lodash');
const { POST_STATUS } = require('../../config/config');

const Schema = mongoose.Schema;

const dbSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: Array,
        default: "Uncategorized"
    },
    tags: {
        type: Array
    },
    created_by: {
        type: Schema.ObjectId,
        required: true
    },
    created_on: {
        type: Date, 
        default: new Date()
    },
    status: {
        type: String,
        required: true
    },
    post_reference_id: {
        type: Schema.ObjectId
    },
    schedule_at: {
        type: Date
    }
});

dbSchema.methods.toJSON = function () {
    const user = this;
    const userObj = user.toObject();

    return _.pick(userObj, ['_id', 'description', 'image', 'category', 'tags', 'created_by', 'created_on', 'post_reference_id']);
}

const Post = mongoose.model('Post', dbSchema);

Post.getPosts = function (qry) {
    const query = getQuery(qry)

    return Post.aggregate(query, (err, posts) => {
        if (err) {
            return Promise.reject();
        } else {
            return Promise.resolve(posts);
        }
    })	    
}

function getQuery(qry) { console.log(qry)
    const page = qry.page || 1;
    const limit = qry.limit || 20;
    const skip = page  > 1 ? limit * ( page - 1 ) : 0;

    var query = [];
    var match = {
        status: POST_STATUS[qry.status] || POST_STATUS.PUBLISHED
    };
    
    if (qry.id) {
        match._id = new ObjectId(qry.id);
    }

    if (qry.post_reference_id) {
        match.post_reference_id = new ObjectId(qry.post_reference_id);
    }

    if (qry.author) {
        match.created_by = new ObjectId(qry.author);
    }
    
    if (qry.category) {
        match.category = qry.category;
    } 
    
    if (qry.tags){
        match.tags = { $elemMatch: {text: qry.tags} };
    }    

    query = [{
        $match: match
    }, {
        $sort: {
            created_on: -1
        }
    }, {
        $skip : skip
    }, {
        $limit: limit
    }, {
        $lookup: {
            from: "users",
            localField: "created_by",
            foreignField: "_id",
            as: "author"
        }
    }, { 
        $project: {
            "title": 1,
            "description": 1,
            "image": 1,
            "category": 1,
            "tags": 1,
            "created_by": 1,
            "author.name": 1,
            "created_on": 1,
            "status": 1,
            "post_reference_id": 1
        }
    }];
    
    return query;
}

module.exports = {Post};
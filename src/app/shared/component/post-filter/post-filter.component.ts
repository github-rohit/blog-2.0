import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent implements OnInit, OnDestroy {
  @Input('selectedCategory') selectedCategory: string;
  @Input('search-query') query: string;
  
  categorys: Category[];
  subscription: Subscription;
  form;
  
  constructor(
    private catService: CategoryService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      query: [this.query, [
        Validators.required
      ]]
    });    
  }

  categoryChange(value) {
    this.query = '';
    this.setQuery();
    this.router.navigate(['/'], {
      queryParams: {
        category: value
      }
    });
  }

  filter() {
    this.selectedCategory = '';
    const urlTree = this.router.createUrlTree([], {
      queryParams: {
        query: this.form.value.query,
        pageIndex: 1,
        category: ''
      },
      queryParamsHandling: 'merge',
      preserveFragment: true 
    });
  
    this.router.navigateByUrl(urlTree); 
  }

  setQuery() {
    this.form.controls.query.setValue(this.query);
  }

  ngOnInit() {
    this.setQuery();
    this.subscription = this.catService.getAll().subscribe((res) => {
      this.categorys = res;
    }, error => {

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

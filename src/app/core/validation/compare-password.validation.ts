import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ComparePasswordValidation {
    static MatchPassword(AC: AbstractControl) {
        const password = AC.get('password').value; // to get value in input tag
        const confirmPassword = AC.get('password_again').value; // to get value in input tag
         if (password !== confirmPassword) {
            AC.get('password_again').setErrors({
                MatchPassword: true
            });
         } else {
             return null;
         }
     }
}

import { AbstractControl } from '@angular/forms';

export class Validation {
    static MatchStudentEmailPassword(control: AbstractControl) {
        if (control.get('email').value !== control.get('confirmemail').value) {
            control.get('confirmemail').setErrors({ mismatch: true });
        }
        if (control.get('password').value !== control.get('confirmpassword').value) {
            control.get('confirmpassword').setErrors({ mismatch: true });
        }
    }
}

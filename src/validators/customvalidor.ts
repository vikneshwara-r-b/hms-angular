import {AbstractControl} from '@angular/forms';
export function bloodGroupValidator(control: AbstractControl) {
    
    let bloodgroup:Array<string>=["A+","A-","B+","B-","O+","O-","AB+","AB-"];
    return bloodgroup.includes(control.value) ? null : {
        bloodGroupValidator: {
            valid: false,
        }
    }
  }
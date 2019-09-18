import { Component, OnInit } from '@angular/core';
import { isString } from 'util';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted: boolean;
  

  constructor( private data: DataService,private formBuilder: FormBuilder,private router: Router) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      reg_address:['', Validators.required],
      reg_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_age: ['',[Validators.required,Validators.pattern(/^\+?[1-9]\d*$/),Validators.min(18)]],
      reg_password: ['',Validators.required],
      reg_conf_password: ['',Validators.required],
      gender:['',Validators.required],
      reg_checkbox:['',Validators.required],
    })
   }
  dynamicData: any = "";
  pwd: any = "";
  cpwd: any ="";

  ngOnInit() {
    
  }
  onSubmit(){
    this.submitted =true;
    this.pwd =this.registrationForm.controls['reg_password'].value;
    this.cpwd =this.registrationForm.controls['reg_conf_password'].value;
    var response ;
    // alert('in submit');
    if (this.registrationForm.invalid) {
      alert('Enter Required Fields');
      return;
    }
    else if( this.pwd != this.cpwd ){
      alert('Password mismatch');
    }
    else
    {
      // alert(this.selectedLevel.name);
      this.data.addData(this.registrationForm.value,this.selectedLevel.name).subscribe(
        data=>{
                if(data == "Success")
                {
                  alert('Registration Successful');
                  this.router.navigate(['/Login']);
                }
                else
                {
                  alert('Error, try again');
                  this.router.navigate(['/SignUp']);
                }
              },
          error=> console.error(error)
        );
    }
  }
  
  selectedLevel;
  data1:Array<Object> = [
      {id: 0, name: "MALE"},
      {id: 1, name: "FEMALE"},
      {id: 2, name: "OTHER"}
  ];

  // checkPasswords(registrationForm: FormGroup) 
  // {
  //   let pass = registrationForm.get('reg_password').value;
  //   let confirmPass = registrationForm.get('reg_conf_password').value;
  //   return pass === confirmPass ? null : { notSame: true }     
  // }

  // matcher = new MyErrorStateMatcher();
}
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

//     return (invalidCtrl || invalidParent);
//   }
// }

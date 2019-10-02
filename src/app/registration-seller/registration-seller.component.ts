import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
@Component({
  selector: 'app-registration-seller',
  templateUrl: './registration-seller.component.html',
  styleUrls: ['./registration-seller.component.scss']
})
export class RegistrationSellerComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean;
  constructor(private data: DataService,private formBuilder: FormBuilder,private router: Router) { 
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      reg_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_password: ['',Validators.required],
      reg_conf_password: ['',Validators.required],
      reg_checkbox:['',Validators.required],
    })
  }
  dynamicData: any = "";
  pwd: any = "";
  cpwd: any ="";
  stage_1: boolean = true;
  stage_2: boolean = false;
  stage_3: boolean = false;
  stage_4: boolean = false;
  stage_5: boolean = false;
  stage_6: boolean = false;

  ngOnInit() {
  }
  onSubmit(){
    this.submitted =true;
    this.pwd =this.registrationForm.controls['reg_password'].value;
    this.cpwd =this.registrationForm.controls['reg_conf_password'].value;
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
      this.data.addSellerData(this.registrationForm.value).subscribe(
        data=>{
                if(data == "Success")
                {
                  alert('Registration Stage-1 Successful');
                  // this.stage_1=false;
                  // this.stage_2=true;
                  // this.router.navigate(['/login']);
                }
                else
                {
                  alert('Error, try again');
                  // this.router.navigate(['/signup']);
                }
              },
          error=> console.error(error)
        );
    }
  }
}

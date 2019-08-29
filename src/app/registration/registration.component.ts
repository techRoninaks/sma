import { Component, OnInit } from '@angular/core';
import { isString } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted: boolean;

  constructor( private data: DataService,private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      reg_address:['', Validators.required],
      reg_email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      reg_mobile_no: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      reg_age: ['',[Validators.required,Validators.pattern(/^\+?[1-9]\d*$/)]],
      reg_password: ['',Validators.required],
      reg_conf_password: ['',Validators.required],
      gender:['',Validators.required],
      reg_checkbox:['',Validators.required],
    })
   }
  dynamicData: any = "";

  ngOnInit() {
    this.data.getProductData(this.data).subscribe(data=>{
      this.dynamicData = data;
    })
  }

  onSubmit(){
    this.submitted =true;
    var response ;
    // alert('in submit');

    
    if (this.registrationForm.invalid) {
      // alert('form invalid');
      return;
    }
    
    
  }

}

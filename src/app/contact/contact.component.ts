import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,private router: Router,private data: DataService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      mobile: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      purpose:['',Validators.required],
      remarks:['',Validators.required],
    })
   }

  ngOnInit() {
  }
  Submit(){
    this.submitted =true;
    if (this.contactForm.invalid) {
      alert('Enter Required Fields');
      return;
    }
    else
    {
      // alert(this.selectedLevel.name);
      this.data.addContact(this.contactForm.value).subscribe(
        data=>{
                if(data == "Success")
                {
                  alert('Sent Successfully');
                  this.router.navigate(['/']);
                }
                else
                {
                  alert('Error, try again');
                  this.router.navigate(['/contact']);
                }
              },
          error=> console.error(error)
        );
    }
  }
}

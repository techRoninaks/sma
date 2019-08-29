import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DataService} from '../data.service';

declare var Razorpay: any;

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  // bookingform ="";
checkoutForm: FormGroup;
  submitted: boolean;
  

constructor( private data: DataService,private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      customername: ['', Validators.required],
      address: ['', Validators.required],
      email: ['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      contact: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      
    })
   }
   

  dynamicdata: any = "";
  varient: any = "";
  stage1 : boolean = false;

  ngOnInit() {
    this.data.getvariantInfo().subscribe(data=>{
      this.varient = data;
      this.stage1 = true;
      console.log(this.varient);
    })
  }


  onSubmit(){
   
    //   var options = {
    //     "key": "rzp_test_dveDexCQKoGszl",
    //     "amount": 1000, // 2000 paise = INR 20
    //     "currency": "INR",
    //     "name": "ScoopMyArt",
    //     "description": "Test description",
    //     "image": "assets/images/samagra_circle.png",      
    //     "handler": response=>{
    //         alert("Booking successful. Thank you!");
    //        },
    //     "prefill": {
    //         "name": this.bookingForm.controls['name'].value,
    //         "email": this.bookingForm.controls['email'].value,
    //         "contact": this.bookingForm.controls['contact'].value,
    //     },
    //     "notes": {  },
    //     "theme": {
    //         "color": "#133E4B"
    //     },
    //     "modal": {
    //       "ondismiss": function(){        }
    //     }
    // };
  // var razorpay = new Razorpay({ key:"rzp_test_dveDexCQKoGszl", callback_url:'https://your-site.com/callback-url', redirect:true});
  // razorpay.once('ready',function(response){
  //   console.log(response.methods);
  //   response.methods.networking contains list of all banks
  // })
    this.submitted=true;
    

    if (this.checkoutForm.invalid) {
      // alert('form invalid');
      return;
    }


    }  
  
  // razorpay .open();// body...

  }

  



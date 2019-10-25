import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
// import { data } from 'jquery';


var imageFront: any = "";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  editPolicy: number;
  z: { shop_id: any; val: string; type: string; };
  token: any;
  prodid: number = 0;
  dynamicDataProPolicy: any = [];
  dynamicDataShipPolicy: any = [];
  dynamicDataReturnPolicy: any = [];
  dynamicDataName: any;
  addProduct: any;
  addProductDisc: any;
  imageDataFront: object;
  // Objects = Object;
  id: any;
  dynamicDataPrice: any = [];
  parentid: any = [];
  dynamicMainCategory: any = []; 
  dynamicCategory: any = [];
  dynamicDataPriceDiscTotal: any = [];
  urlFront = "assets/image/";

  constructor(private data: DataService, private location: Location) { }

  ngOnInit() {
    this.prodid = 1;
    this.data.getPolicyAddProduct(this.prodid).subscribe(
      data => {
        this.dynamicDataProPolicy = data;
        this.dynamicDataShipPolicy = data;
        this.dynamicDataReturnPolicy = data;
      },
    );
    
    this.data.getMainCategoryAddProduct(this.parentid).subscribe(
      data => {
        this.dynamicMainCategory = data;
        alert('mainCategory');
        console.log(this.dynamicMainCategory);
      },
    );

  }


  subCategoryLoaded(id:any){
    this.data.getCategoryAddProduct(this.id).subscribe(
      data => {
        this.dynamicCategory = data;
        alert('subCategory');
        console.log(this.dynamicCategory);
      },
    );
    alert(id);
  }
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  Imageupload() {
    this.imageDataFront = { image: imageFront }
    this.data.uploadFront(this.imageDataFront).subscribe(
    );
  }
  frontUpload() {
    imageFront = document.getElementById('frontUpload').addEventListener('change', this.onFrontClick.bind(this));

  }

  onFrontClick(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      var text: any = reader.result;
      imageFront = text;
      // console.log(imageFront);
      (<HTMLInputElement>document.getElementById("frontPreviewId")).style.display = "block";
      this.urlFront = imageFront;
    };
  }

  edit(x: any) {
    this.editPolicy = 1;
  }

  sub(x: any) {
    this.editPolicy = 0;
    var type = 'policy';
    var y = (<HTMLInputElement><any>document.getElementById('policyTxtAr')).value;
    // this.z = { prodid: this.token, val: y, type: type };
    // this.data.editManage(this.z).subscribe();
  }

  publishBtn(x: any) {

    if (x == 'publish') {
      var name = (<HTMLInputElement><any>document.getElementById("product-Name")).value;
      var base_price = (<HTMLInputElement><any>document.getElementById("product-BasePrice")).value;
      var short_desc = (<HTMLInputElement><any>document.getElementById("product-ShortDesc")).value;
      var Long_desc = (<HTMLInputElement><any>document.getElementById("product-Desc")).value;
      var spec = (<HTMLInputElement><any>document.getElementById("product-Spec")).value;
      var qty_avble = (<HTMLInputElement><any>document.getElementById("Counter-Label")).value;
      var max_order_quant = (<HTMLInputElement><any>document.getElementById("Max-Qty-Order")).value;
      var min_order_quant = (<HTMLInputElement><any>document.getElementById("Min-Qty-Order")).value;
      // var rpData = (<HTMLInputElement><any>document.getElementById("Right-Price")).value;
      // var rp1Data = (<HTMLInputElement><any>document.getElementById("Right-Price1")).value;
      // var rp2Data = (<HTMLInputElement><any>document.getElementById("Right-Price2")).value;
      // var rp3Data = (<HTMLInputElement><any>document.getElementById("Right-Price3")).value;
      // var rp4Data = (<HTMLInputElement><any>document.getElementById("Right-Price4")).value;

      var avg_prcessing_time = (<HTMLInputElement><any>document.getElementById("Avg-ProTime")).value;
      var avg_shpping_time = (<HTMLInputElement><any>document.getElementById("Avg-ShipTime")).value;
      var tags = (<HTMLInputElement><any>document.getElementById("Tag-Card")).value;
      var auto_cancel_time = (<HTMLInputElement><any>document.getElementById("Auto-Cancel")).value;
      var max_no_of_image = (<HTMLInputElement><any>document.getElementById("Max-Count-Label")).value;
      var has_gift = (<HTMLInputElement><any>document.getElementById("giftOption")).checked;
      var has_order_confmn = (<HTMLInputElement><any>document.getElementById("orderConfrm")).checked;
      var can_upload_image = (<HTMLInputElement><any>document.getElementById("uploadImg")).checked;
      var add_custom_message_field = (<HTMLInputElement><any>document.getElementById("autoCustom")).checked;
      var has_rfq = (<HTMLInputElement><any>document.getElementById("rfq")).checked;

      // var mtData = (<HTMLInputElement><any>document.getElementById("Msg-Title")).value;

      var ship = (<HTMLInputElement><any>document.getElementById('shippingRadio')).checked;
      var cod = (<HTMLInputElement><any>document.getElementById('homedeliveryRadio')).checked;
      var pickup = (<HTMLInputElement><any>document.getElementById('pickupRadio')).checked;


      // var res = shipping_option.split(" ");
      // this.varName = res[0];

      if (ship == true) {
        var shipping_option = "shipping";
      }
      else if (cod == true) {
        var shipping_option = "cod";
      }
      else if (pickup == true) {
        var shipping_option = "pickup";
      }
      this.addProduct = { name: name, base_price: base_price, short_desc: short_desc, Long_desc: Long_desc, spec: spec, qty_avble: qty_avble, max_order_quant: max_order_quant, min_order_quant: min_order_quant, avg_prcessing_time: avg_prcessing_time, avg_shpping_time: avg_shpping_time, tags: tags, auto_cancel_time: auto_cancel_time, max_no_of_image: max_no_of_image, has_gift: has_gift, shipping_option: shipping_option, has_order_confmn: has_order_confmn, can_upload_image: can_upload_image, add_custom_message_field: add_custom_message_field, has_rfq: has_rfq };
      this.data.getdataPostAddProduct(this.addProduct).subscribe(data => {
        // this.location.replaceState('/');
        window.location.href = './';
      });
    }

    this.id = "prodid";
    this.data.getdynamicPriceAddProduct(this.id).subscribe(
      data => {
        this.dynamicDataPrice = data;
      },
      error => console.error(error)
    );

    this.id = "prodid";
    this.data.getdynamicPriceDiscTotalAddProd(this.id).subscribe(
      data => {
        this.dynamicDataPriceDiscTotal = data;
      },
      error => console.error(error)
    );



    // var pd1Data = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
    // var pd2Data = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
    // var pp1Data = (<HTMLInputElement><any>document.getElementById("Pro-Price-1")).value;

    // var pdiscData = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;
    // var bqData = (<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value;
    // var apData = (<HTMLInputElement><any>document.getElementById("Actual-Price")).value;

    // var ptaData = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    // var qsData = (<HTMLInputElement><any>document.getElementById("Ques-Sect1")).value;
    // var asData = (<HTMLInputElement><any>document.getElementById("Ans-Sect2")).value;

  }

  // prodDiscSubmit() {

  //   var	from_time_stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
  //   var to_tme_Stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
  //   var percentage = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;

  //   this.addProductDisc = { from_time_stamp: from_time_stamp, to_tme_Stamp: to_tme_Stamp,percentage: percentage }

  //   this.data.getdataPostAddProduct(this.addProductDisc).subscribe(data => {
  //     console.log("Sent");
  //   })
  // }

  // addBulkDisc() {
  //   var	from_time_stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
  //   var to_tme_Stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
  //   var percentage = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;

  //   this.addProductDisc = { from_time_stamp: from_time_stamp, to_tme_Stamp: to_tme_Stamp,percentage: percentage }

  //   this.data.getdataPostAddProduct(this.addProductDisc).subscribe(data => {
  //     console.log("Sent");
  //   })

  // }
}

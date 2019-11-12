import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { type } from 'os';
import { log } from 'util';
import {MatTabsModule} from '@angular/material/tabs';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormControl } from'@angular/forms';
// import { data } from 'jquery';

var imageFront1: any = 1;
var imageFront2: any = 1;
var imageFront3: any = 1;
var imageFront4: any = 1;
var imageFront5: any = 1;
var imageFront6: any = 1;
var imageFront7: any = 1;
var imageFront8: any = 1;
var imageFront9: any = 1;
var imageFront10: any = 1;


// var imageValue0: any = "";
// var imageValue1: any = "";
// var imageValue2: any = "";
// var imageValue3: any = "";
// var imageValue4: any = "";
// var imageValue5: any = "";
// var imageValue6: any = "";
// var imageValue7: any = "";
// var imageValue8: any = "";
// var imageValue9: any = "";
// var imageUCount: number = 0;


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  editPolicy: number;
  z: { shop_id: any; val: string; type: string; };
  token: any;
  prodid: any = [];
  dynamicDataProPolicy: any = [];
  dynamicDataShipPolicy: any = [];
  dynamicDataReturnPolicy: any = [];
  addProductPolicy: any = [];
  dynamicDataName: any;
  addProduct: any;
  addProductDisc: any;

  addProductMsgTitle: any;

  id: any;
  // id1: any;
  dynamicDataPrice: any = [];
  parentid: any = [];
  dynamicMainCategory: any = [];
  dynamicCategory: any = [];
  dynamicSubCategory: any = [];
  dynamicDataPriceDiscTotal: any = [];
  // urlFront = "assets/image/";

  sellerId: any = "";
  flagAdd: boolean = false;
  Object = Object;
  tagsArray: any = [];
  discountArray: any = [];
  categoryArray: any = [];
  editMsg : boolean = false;
  calcQtnPrice : any = "";
  calcu : any ="";
  shippingLocation : any ="";
  // imageU0: any;
  // imageU1: any;
  // imageU2: any;
  // imageU3: any;
  // imageU4: any;
  // imageU5: any;
  // imageU6: any;
  // imageU7: any;
  // imageU9: any;
  // imageU8: any;
  // imageUploaded: any;
  // imageUploaded0: any;
  // imageUploaded1: any;
  // imageUploaded2: any;
  // imageUploaded3: any;
  // imageUploaded4: any;
  // imageUploaded5: any;
  // imageUploaded6: any;
  // imageUploaded7: any;
  // imageUploaded8: any;
  // imageUploaded9: any;
  // imageVAL9: any;
  // imageVAL8: any;
  // imageVAL7: any;
  // imageVAL6: any;
  // imageVAL5: any;
  // imageVAL4: any;
  // imageVAL3: any;
  // imageVAL2: any;
  // imageVAL1: any;
  // imageVAL0: any;
  basePrice: any;
  commDec: any;
  totalPrice: any;
  msgTitle: any;
  arrayText: { text1: string; }[];
  addText: (text: any) => void;
  allCat :any ="";
  subCategoryArray :any =[];
  subCategoryArrayJustVal :any =[];

  title = [];
  faq : any = [];
  varients : any = [];
  shippingLocs : any = [];
  labels : any = "";
  keyword = 'name';
  keyword1 = 'category';
  catOne = 'name';
  mainCatId = "";
  catId = "";
  datas : any = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
  shippinglocationArray: any = [];




  constructor(private data: DataService, private cookieService: CookieService, private location: Location) { }


  // imageProduct2: object;
  // imageProduct3: object;

  ngOnInit() {
    (<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display = "block";
    (<HTMLInputElement><any>document.getElementById('mainHeader')).style.display = "none";
    (<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display = "none";

    this.sellerId = this.getCookie('sellerId');

  
    this.data.getLabelForProduct().subscribe(data=>{
      this.labels = data;
    });
    this.data.getTagsForProduct().subscribe(data=>{
      this.datas = data;
    });
    this.data.getAllCategoriesProduct().subscribe(data=>{
      this.allCat = data;
    });
    var seller_id = this.getCookie("sellerId");
    this.data.getShippingLocationAddProduct(seller_id).subscribe(data=>{
      this.shippingLocation = data;
    });



    if (this.getCookie("isLoggedIn") == "0") {
      this.flagAdd = false;
    }
    else if
      (this.getCookie("isLoggedIn") == "1") {
      this.flagAdd = true;
    }

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
        // console.log(this.dynamicMainCategory);
      },
    );



    // this.imageUploaded0 = 0;
    // this.imageUploaded1 = 0;
    // this.imageUploaded2 = 0;
    // this.imageUploaded3 = 0;
    // this.imageUploaded4 = 0;
    // this.imageUploaded5 = 0;
    // this.imageUploaded6 = 0;
    // this.imageUploaded7 = 0;
    // this.imageUploaded8 = 0;
    // this.imageUploaded9 = 0;
    // this.imageU0 = 0;
    // this.imageU1 = 0;
    // this.imageU2 = 0;
    // this.imageU3 = 0;
    // this.imageU4 = 0;
    // this.imageU5 = 0;
    // this.imageU6 = 0;
    // this.imageU7 = 0;
    // this.imageU8 = 0;
    // this.imageU9 = 0;
    // this.imageUploaded = 0;

  }

  getSearchSubCategory(){
    var search = (<HTMLInputElement><any>document.getElementById('subsubcategory')).value;
    (<HTMLInputElement><any>document.getElementById("myUL1")).style.display = "block";
    var id = this.catId;
    this.data.getSubCategorySearch(id, search).subscribe(
      data => {
        this.dynamicSubCategory = data;
        // console.log(this.dynamicSubCategory);
      },
    );
  }

  newSubCategory(){
    var search = (<HTMLInputElement><any>document.getElementById('subsubcategory')).value;
    (<HTMLInputElement><any>document.getElementById("myUL1")).style.display = "none";
    this.data.createNewSubCategory(this.catId, search).subscribe(
      data => {
        console.log(data);
        // console.log(this.dynamicSubCategory);
      },
    );
  }

  shippingLocationGetter(pos){
    var search = (<HTMLInputElement><any>document.getElementById(pos+"_pincode")).value;
    (<HTMLInputElement><any>document.getElementById("myUL")).style.display = "block";
    this.data.getAutoShippingLocation(search).subscribe(data=>{
      this.shippinglocationArray = data;
    })
  }

  decreseCount(){
    var search = parseInt((<HTMLInputElement><any>document.getElementById("Counter-Label")).value);
    search--;
    if(search>0){
      (<HTMLInputElement><any>document.getElementById("Counter-Label")).value = search.toString();
    }
  }

  increseCount(){
    var search = parseInt((<HTMLInputElement><any>document.getElementById("Counter-Label")).value);
    search++;
    (<HTMLInputElement><any>document.getElementById("Counter-Label")).value = search.toString();
  }

  replaceText(pin, loc){
    (<HTMLInputElement><any>document.getElementById("item_pincode")).value = loc+", "+pin;
    (<HTMLInputElement><any>document.getElementById("myUL")).style.display = "none";

  }

  addShippingLocation(item){
    var pincode = (<HTMLInputElement><any>document.getElementById("item_pincode")).value;
    var price = (<HTMLInputElement><any>document.getElementById("item_price")).value;
    var qtn = (<HTMLInputElement><any>document.getElementById("item_qtn")).value;
    var cell = {pincode:pincode,price:price,qtn:qtn}
    this.shippingLocs.push(cell);
    (<HTMLInputElement><any>document.getElementById("item_pincode")).value = "";
    (<HTMLInputElement><any>document.getElementById("item_price")).value= "";
    (<HTMLInputElement><any>document.getElementById("item_qtn")).value = "";
  }

  deleteShiipingLocation(pos){
    this.shippingLocs.splice( this.shippingLocs.indexOf(pos), 1 );
  }

  selectEvent(item) {
    // do something with selected item
    if(this.tagsArray.length<5){
      this.tagsArray.push(item.name);
    }
    else{
      alert("Only 5 tags are allowed");
    }
    
  }
  displayVarientType(item, pos, last) {
    // do something with selected item
    (<HTMLInputElement><any>document.getElementById(item+"_"+pos)).style.display = "block";
    if(pos<6){
      (<HTMLInputElement><any>document.getElementById(item+"_btn_"+pos)).style.display = "block";
    }
    (<HTMLInputElement><any>document.getElementById(item+"_btn_"+last)).style.display = "none";
    
  }
  
  addVarients(){
    if(this.varients.length<6){
      this.varients.push(this.varients.length);
    }
    else{
      alert("only 6 varients can be added.")
    }
  }

  saveAddVariant(pos){
    var varientName = (<HTMLInputElement><any>document.getElementById(pos+"_name")).value;
    var varientOne = (<HTMLInputElement><any>document.getElementById(pos+"_varient_1")).value;
    var varientTwo = (<HTMLInputElement><any>document.getElementById(pos+"_varient_2")).value;
    var varientThree = (<HTMLInputElement><any>document.getElementById(pos+"_varient_3")).value;
    var varientFour = (<HTMLInputElement><any>document.getElementById(pos+"_varient_4")).value;
    var varientFive = (<HTMLInputElement><any>document.getElementById(pos+"_varient_5")).value;
    var varientSix = (<HTMLInputElement><any>document.getElementById(pos+"_varient_6")).value;
    var priceOne = (<HTMLInputElement><any>document.getElementById(pos+"_price_1")).value;
    var priceTwo = (<HTMLInputElement><any>document.getElementById(pos+"_price_2")).value;
    var priceThree = (<HTMLInputElement><any>document.getElementById(pos+"_price_3")).value;
    var priceFour = (<HTMLInputElement><any>document.getElementById(pos+"_price_4")).value;
    var priceFive = (<HTMLInputElement><any>document.getElementById(pos+"_price_5")).value;
    var priceSix = (<HTMLInputElement><any>document.getElementById(pos+"_price_6")).value;

    var varientUpload = { varientName:varientName, varientOne: varientOne,varientTwo :varientTwo , varientThree: varientThree , varientFour:varientFour , varientFive: varientFive ,varientSix:varientSix, priceOne: priceOne, priceTwo: priceTwo, priceThree:priceThree, priceFour:priceFour, priceFive:priceFive, priceSix:priceSix};

    console.log(varientUpload);
    this.data.addProductVarients(varientUpload).subscribe(data=>{

    })

  }

  deletetags(del){
    this.tagsArray.splice( this.tagsArray.indexOf(del), 1 );
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  setupPrice() {
    var base_price = (<HTMLInputElement><any>document.getElementById("product-BasePrice")).value;
    this.basePrice = base_price;
    this.commDec = 3;
    this.totalPrice = this.basePrice - (this.basePrice * (this.commDec / 100));
  }

  //Cookies
  setCookie(cname, value) {
    this.cookieService.set(cname, value);
  }
  getCookie(cname) {
    return this.cookieService.get(cname);
  }
  deleteCookie(cname) {
    this.cookieService.delete(cname);
  }


  subCategoryLoaded(id) {
    this.mainCatId = id;
    this.data.getCategoryAddProduct(id).subscribe(
      data => {
        this.dynamicCategory = data;
        // console.log(this.dynamicCategory);
      },
    );
  }

  replaceCategory(id, val){
    (<HTMLInputElement><any>document.getElementById("myUL1")).style.display = "none";
    var cell ={ id:id, val: val}
    this.subCategoryArray.push(cell);
    this.subCategoryArrayJustVal.push(id);
    console.log(this.subCategoryArrayJustVal);
  }
  deleteCategory(val){
    this.subCategoryArray.splice( this.subCategoryArray.indexOf(val), 1 );
    this.subCategoryArrayJustVal.splice( this.subCategoryArrayJustVal.indexOf(val.id), 1 );
    console.log(this.subCategoryArrayJustVal);
  }

  subCategoryLoaded1(id) {
    this.catId = id;
    this.data.getSubCategoryAddProduct(id).subscribe(
      data => {
        this.dynamicSubCategory = data;
      },
    );

  }

  // subCategoryLoaded2(id) {
  //   this.data.getSubCategoryAddProduct(id).subscribe(
  //     data => {
  //       this.dynamicSubCategory = data;
  //       // console.log(this.dynamicSubCategory);
  //     },
  //   );

  // }

  // UPLOAD IMAGES
  frontUpload() {
    imageFront1 = document.getElementById('frontUpload').addEventListener('change', onFrontClick.bind(this));
  }
  frontUpload2() {
    imageFront2 = document.getElementById('frontUpload2').addEventListener('change', onFrontClick2.bind(this));
  }
  frontUpload3() {
    imageFront3 = document.getElementById('frontUpload3').addEventListener('change', onFrontClick3.bind(this));
  }
  frontUpload4() {
    imageFront4 = document.getElementById('frontUpload4').addEventListener('change', onFrontClick4.bind(this));
  }
  frontUpload5() {
    imageFront5 = document.getElementById('frontUpload5').addEventListener('change', onFrontClick5.bind(this));
  }
  frontUpload6() {
    imageFront6 = document.getElementById('frontUpload6').addEventListener('change', onFrontClick6.bind(this));
  }
  frontUpload7() {
    imageFront7 = document.getElementById('frontUpload7').addEventListener('change', onFrontClick7.bind(this));
  }
  frontUpload8() {
    imageFront8 = document.getElementById('frontUpload8').addEventListener('change', onFrontClick8.bind(this));
  }
  frontUpload9() {
    imageFront9 = document.getElementById('frontUpload9').addEventListener('change', onFrontClick9.bind(this));
  }
  frontUpload10() {
    imageFront10 = document.getElementById('frontUpload10').addEventListener('change', onFrontClick10.bind(this));
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

  edit(x: any) {
    this.editPolicy = 1;
  }

  sub(x: any) {
    this.editPolicy = 0;
    var type = 'policy';
  }

  publishBtn(x: any) {

    var caller = "";
    if (x == 'publish') {
      caller = "publish";
    }
    else if (x == 'duplicate') {
      caller = "duplicate";
    }
    else{
      caller = "save";
    }

    var pincode = (<HTMLInputElement><any>document.getElementById("initialAlias")).value;
    var price = (<HTMLInputElement><any>document.getElementById("initialprice")).value;
    var qtn = (<HTMLInputElement><any>document.getElementById("initialQtn")).value;
    var cell = {pincode:pincode,price:price,qtn:qtn}
    this.shippingLocs.push(cell);

      var active_status = (<HTMLInputElement><any>document.getElementById("active")).checked;
      var name = (<HTMLInputElement><any>document.getElementById("product-Name")).value;
      var base_price = (<HTMLInputElement><any>document.getElementById("product-BasePrice")).value;
      this.basePrice = base_price;
      this.commDec = 3;
      this.totalPrice = this.basePrice;
      var short_desc = (<HTMLInputElement><any>document.getElementById("product-ShortDesc")).value;
      var Long_desc = (<HTMLInputElement><any>document.getElementById("product-Desc")).value;
      var spec = (<HTMLInputElement><any>document.getElementById("product-Spec")).value;
      var qty_avble = (<HTMLInputElement><any>document.getElementById("Counter-Label")).value;
      var max_order_quant = (<HTMLInputElement><any>document.getElementById("Max-Qty-Order")).value;
      var min_order_quant = (<HTMLInputElement><any>document.getElementById("Min-Qty-Order")).value;

      var bulk_discount_id = (<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value;
      var bulk_discount_id = (<HTMLInputElement><any>document.getElementById("Disc-Price")).value;
      var bulk_discount_id = (<HTMLInputElement><any>document.getElementById("Actual-Price")).value;


      var offer_id = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
      var offer_id = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
      var offer_id = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;

      var cmsn_dedtd = (<HTMLInputElement><any>document.getElementById("commissionDecuction")).value;

      var avg_prcessing_time = (<HTMLInputElement><any>document.getElementById("Avg-ProTime")).value;
      var avg_shpping_time = (<HTMLInputElement><any>document.getElementById("Avg-ShipTime")).value;
      var tags = this.tagsArray;
      var auto_cancel_time = (<HTMLInputElement><any>document.getElementById("Auto-Cancel")).value;
      var max_no_of_image = (<HTMLInputElement><any>document.getElementById("Max-Count-Label")).value;
      var has_gift = (<HTMLInputElement><any>document.getElementById("giftOption")).checked;
      var has_order_confmn = (<HTMLInputElement><any>document.getElementById("orderConfrm")).checked;
      var can_upload_image = (<HTMLInputElement><any>document.getElementById("uploadImg")).checked;
      var can_orderbydate = (<HTMLInputElement><any>document.getElementById("deliveryDate")).checked;
      var add_custom_message_field = (<HTMLInputElement><any>document.getElementById("autoCustom")).checked;
      var has_rfq = (<HTMLInputElement><any>document.getElementById("rfq")).checked;
      var has_instant_buy = (<HTMLInputElement><any>document.getElementById("instantBuy")).checked;

      var shipping_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
      var return_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
      var product_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;

      var ship = (<HTMLInputElement><any>document.getElementById('shippingRadio')).checked;
      var cod = (<HTMLInputElement><any>document.getElementById('homedeliveryRadio')).checked;
      var pickup = (<HTMLInputElement><any>document.getElementById('pickupRadio')).checked;


      var quantity_price = (<HTMLInputElement><any>document.getElementById("Qty-Price-Id")).value;
      var price = (<HTMLInputElement><any>document.getElementById("Price-Id")).value;
      var labels = (<HTMLInputElement><any>document.getElementById("labelSelect")).value;
      var shippingArray = JSON.stringify(this.shippingLocs);
      var varinetSelect = this.varients;
      var titleSelect = this.title;
      var discountArraySelect = JSON.stringify(this.discountArray);
      var faqArray = JSON.stringify(this.faq);

      var policyArray = shipping_policy.split("~");
      shipping_policy = policyArray[0];
      return_policy = policyArray[1];
      product_policy = policyArray[2];
      
      var shipping_option = "";
      if (ship) {
        shipping_option = shipping_option+ "shipping,";
      }
      if (cod) {
        shipping_option = shipping_option+  "cod,";
      }
      if (pickup) {
        shipping_option =  shipping_option+ "pickup";
      }

      // console.log(titleSelect);
      
      this.addProduct = { name: name, base_price: base_price, short_desc: short_desc, Long_desc: Long_desc, spec: spec, qty_avble: qty_avble, max_order_quant: max_order_quant, min_order_quant: min_order_quant, avg_prcessing_time: avg_prcessing_time, avg_shpping_time: avg_shpping_time, tags: tags, auto_cancel_time: auto_cancel_time, max_no_of_image: max_no_of_image, has_gift: has_gift, shipping_option: shipping_option, has_order_confmn: has_order_confmn, can_orderbydate: can_orderbydate, can_upload_image: can_upload_image, add_custom_message_field: add_custom_message_field, has_rfq: has_rfq, has_instant_buy: has_instant_buy, shipping_policy: shipping_policy, return_policy: return_policy, product_policy: product_policy, active_status: active_status, bulk_discount_id: bulk_discount_id, offer_id: offer_id, cmsn_dedtd: cmsn_dedtd, image1: imageFront1, image2: imageFront2, image3: imageFront3, image4: imageFront4, image5: imageFront5, image6: imageFront6, image7: imageFront7, image8: imageFront8, image9: imageFront9, image10: imageFront10, sellerid: this.sellerId, quantity_price: quantity_price, price: price,labels:labels,shippingArray:shippingArray,varinetSelect:varinetSelect,titleSelect:titleSelect,discountArraySelect:discountArraySelect, caller: caller, faqArray:faqArray, mainCat: this.mainCatId, subCat:this.subCategoryArrayJustVal };

      this.addProductMsgTitle = { title: this.msgTitle };

      //  image0: image0, image1: image1, image2: image2, image3: image3, image4: image4, image5: image5, image6: image6, image7: image7, image8: image8, image9: image9, imageU0: this.imageU0, imageU1: this.imageU1, imageU2: this.imageU2, imageU3: this.imageU3, imageU4: this.imageU4, imageU5: this.imageU5, imageU6: this.imageU6, imageU7: this.imageU7, imageU8: this.imageU8, imageU9: this.imageU9, imageUCount: imageUCount



      this.data.getdataPostAddProduct(this.addProduct).subscribe(data => {
        // this.location.replaceState('./dashboard');

        // window.location.href = './dashboard';
        if(caller == "duplicate"){
          alert('Product have been saved and dupicate have been made.')
        }
      });

      // this.imageProduct2 = {prodid: this.prodid, image: imageFront2 }
      // this.data.frontUploadImageAddProd2(this.imageProduct2).subscribe(data => {

      // });

      // this.imageProduct3 = {prodid: this.prodid, image: imageFront3 }
      // this.data.frontUploadImageAddProd3(this.imageProduct3).subscribe(data => {

      // });

      // this.imageProduct4 = {prodid: this.prodid, image: imageFront4 }
      // this.data.frontUploadImageAddProd3(this.imageProduct4).subscribe(data => {

      // });

      // this.imageProduct5 = {prodid: this.prodid, image: imageFront5 }
      // this.data.frontUploadImageAddProd3(this.imageProduct5).subscribe(data => {

      // });

      // this.imageProduct6 = {prodid: this.prodid, image: imageFront6 }
      // this.data.frontUploadImageAddProd3(this.imageProduct6).subscribe(data => {

      // });

      // this.imageProduct7 = {prodid: this.prodid, image: imageFront7 }
      // this.data.frontUploadImageAddProd3(this.imageProduct3).subscribe(data => {

      // });

      // this.imageProduct8 = {prodid: this.prodid, image: imageFront8 }
      // this.data.frontUploadImageAddProd3(this.imageProduct3).subscribe(data => {

      // });

    


    // if (x == 'prod') {
    // 	this.editPolicy = 0;
    // 	// var type = 'prod';
    //   var shipping_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    //   var return_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    //   var product_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    // 	this.data.getPolicyAddProduct(this.addProduct).subscribe();

    // 	this.addProduct = { shipping_policy: shipping_policy, return_policy: return_policy, product_policy: product_policy }
    // }


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




  }
  sub1() {
    var shipping_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    var return_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    var product_policy = (<HTMLInputElement><any>document.getElementById("policyTxtAr")).value;
    this.addProductPolicy = { shipping_policy: shipping_policy, return_policy: return_policy, product_policy: product_policy };
    this.data.getdataPostAddProduct(this.addProductPolicy).subscribe(data => {
    });
  }

  MsgTitlePlus() {
    var i = this.title.length;
    this.msgTitle = (<HTMLInputElement><any>document.getElementById("Msg-TitleId")).value;
    this.title.push(this.msgTitle);
    (<HTMLInputElement><any>document.getElementById("Msg-TitleId")).value = "";
    console.log(this.title);
  }

  close(id: any) {
    this.title.splice( this.title.indexOf(id), 1 );
    console.log(this.title);
  }

  // editTitle(edit, id){

  //   // this.editMsg = true;
  //   var editText = (<HTMLInputElement><any>document.getElementById("MsgEdit_"+id)).value;
  //   var index = this.title.indexOf(id);
  //   alert(edit);
  //   console.log(editText, edit, index)

  //   if (index !== -1) {
  //     this.title[index] = editText;
  //   }
  // console.log(edit);
  // (<HTMLInputElement><any>document.getElementById("MsgEdit_"+id)).style.display = "none";
  // (<HTMLInputElement><any>document.getElementById("MsgTitleLabel_"+id)).style.display = "block";
  // (<HTMLInputElement><any>document.getElementById("save_"+id)).style.display = "none";
  // (<HTMLInputElement><any>document.getElementById("editNow_"+id)).style.display = "block";
  // }

  // editCell(id){
  //   alert("editNow_"+id);
  //   (<HTMLInputElement><any>document.getElementById("MsgEdit_"+id)).style.display = "block";
  //   (<HTMLInputElement><any>document.getElementById("MsgTitleLabel_"+id)).style.display = "none";
  //   (<HTMLInputElement><any>document.getElementById("editNow_"+id)).style.display = "none";
  //   (<HTMLInputElement><any>document.getElementById("save_"+id)).style.display = "block";
  // }


  faqAdd() {
    var i = 0;
    var faqQ = (<HTMLInputElement><any>document.getElementById("Ques-Sect1")).value;
    var faqA = (<HTMLInputElement><any>document.getElementById("Ans-Sect2")).value;
    var cell = {faqQ:faqQ,faqA:faqA}
    this.faq.push(cell);
    (<HTMLInputElement><any>document.getElementById("Ques-Sect1")).value ="";
    (<HTMLInputElement><any>document.getElementById("Ans-Sect2")).value ="";
  }

  FaqClose(pos){
    this.faq.splice(this.faq.indexOf(pos), 1);
  }

  prodDiscSubmit() {

    var from_time_stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
    var to_tme_Stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
    var percentage = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;

    this.addProductDisc = { from_time_stamp: from_time_stamp, to_tme_Stamp: to_tme_Stamp, percentage: percentage };

    this.data.getdataPostAddProduct(this.addProductDisc).subscribe(data => {
      console.log("Sent");
    })
  }

  addBulkDisc() {
    var from_time_stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
    var to_tme_Stamp = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
    var percentage = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;

    this.addProductDisc = { from_time_stamp: from_time_stamp, to_tme_Stamp: to_tme_Stamp, percentage: percentage };

    this.data.postOffersAddProduct(this.addProductDisc).subscribe(data => {
      console.log("Sent");
    })
  }
  addBulkDiscTwo() {
    var bulkDiscount = (<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value;
    var discount = (<HTMLInputElement><any>document.getElementById("Disc-Pres")).value;
    var bulk  = parseInt((<HTMLInputElement><any>document.getElementById("Disc-Pres")).value);
    var actualPrice = (<HTMLInputElement><any>document.getElementById("Actual-Price")).value;

    var addProductDisc = { bulkDiscount: bulkDiscount,bulk:bulk, discount: discount, actualPrice: actualPrice };
    this.discountArray.push(addProductDisc);
    (<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value = "";
    (<HTMLInputElement><any>document.getElementById("Disc-Pres")).value = "";
    (<HTMLInputElement><any>document.getElementById("Disc-Price")).value = "";
    (<HTMLInputElement><any>document.getElementById("Actual-Price")).value = "";
    // this.data.postOffersAddProduct(this.addProductDisc).subscribe(data => {
    //   console.log("Sent");
    // })
  }

  qtnchanger(){
    var bulkDiscount  = parseInt((<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value);
    this.calcQtnPrice = bulkDiscount*this.basePrice;

  }

  deleteDiscount(pos){
    console.log(this.discountArray.indexOf(pos));
    this.discountArray.splice( this.discountArray.indexOf(pos), 1 );
    console.log(this.discountArray);
  }

  disCount(){
    var bulk  = parseInt((<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value);
    var bulkDiscount  = parseInt((<HTMLInputElement><any>document.getElementById("Disc-Pres")).value);
    this.calcu = (this.basePrice*bulk)-((bulk*this.basePrice)*(bulkDiscount/100));
  }

  ngOnDestroy() {
    (<HTMLInputElement><any>document.getElementById('mainHeader')).style.display = "block";
    (<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display = "none";
    (<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display = "block";
  }

  addsubcatogory(){
    (<HTMLInputElement><any>document.getElementById('addSubCat')).style.display = "block";
  }

  submitSubCatogory(){
    var catname = (<HTMLInputElement><any>document.getElementById('addSubCatInput')).value;
    var parentidName = (<HTMLInputElement><any>document.getElementById('subCatAddition')).value
    this.categoryArray.push(catname)
  }

  // onClick(event) {

  //   if (this.imageUploaded8 == 1) {
  //     this.imageUploaded9 = 1;
  //     this.imageUploaded8 = 0;
  //     this.imageUploaded7 = 0;
  //     this.imageUploaded6 = 0;
  //     this.imageUploaded5 = 0;
  //     this.imageUploaded4 = 0;
  //     this.imageUploaded3 = 0;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU9 = 1;
  //   }

  //   else if (this.imageUploaded7 == 1) {
  //     this.imageUploaded8 = 1;
  //     this.imageUploaded7 = 0;
  //     this.imageUploaded6 = 0;
  //     this.imageUploaded5 = 0;
  //     this.imageUploaded4 = 0;
  //     this.imageUploaded3 = 0;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU8 = 1;
  //   }

  //   else if (this.imageUploaded6 == 1) {
  //     this.imageUploaded7 = 1;
  //     this.imageUploaded6 = 0;
  //     this.imageUploaded5 = 0;
  //     this.imageUploaded4 = 0;
  //     this.imageUploaded3 = 0;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU7 = 1;
  //   }

  //   else if (this.imageUploaded5 == 1) {
  //     this.imageUploaded6 = 1;
  //     this.imageUploaded5 = 0;
  //     this.imageUploaded4 = 0;
  //     this.imageUploaded3 = 0;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU6 = 1;
  //   }

  //   else if (this.imageUploaded4 == 1) {
  //     this.imageUploaded5 = 1;
  //     this.imageUploaded4 = 0;
  //     this.imageUploaded3 = 0;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU5 = 1;
  //   }

  //   else if (this.imageUploaded3 == 1) {
  //     this.imageUploaded4 = 1;
  //     this.imageUploaded3 = 0;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU4 = 1;
  //   }

  //   else if (this.imageUploaded2 == 1) {
  //     this.imageUploaded3 = 1;
  //     this.imageUploaded2 = 0;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU3 = 1;
  //     // alert("3");
  //   }

  //   else if (this.imageUploaded1 == 1) {
  //     this.imageUploaded2 = 1;
  //     this.imageUploaded1 = 0;
  //     this.imageUploaded0 = 0;
  //     this.imageU2 = 1;
  //     // alert
  //   }

  //   else if (this.imageUploaded0 == 1) {
  //     this.imageUploaded1 = 1;
  //     this.imageUploaded0 = 0;
  //     this.imageU1 = 1;

  //   }

  //   this.imageUploaded0 = 1;
  //   this.imageUploaded = 1;
  //   this.imageU0 = 1;
  //   //      console.log(event.target.files[0]);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   // reader.onLoad = onLoadCallback;
  //   reader.onload = (event) => {
  //     var text: any = reader.result;
  //     // imageValue = text;
  //     // this.imageVAL0 =text;

  //     if (this.imageUploaded9 == 1) {
  //       imageValue9 = text;
  //       this.imageVAL9 = text;
  //       imageUCount = 10;
  //       // imageU9 = 1;
  //     }

  //     else if (this.imageUploaded8 == 1) {
  //       imageValue8 = text;
  //       this.imageVAL8 = text;
  //       imageUCount = 9;
  //       // imageU8 = 1;
  //     }

  //     else if (this.imageUploaded7 == 1) {
  //       imageValue7 = text;
  //       this.imageVAL7 = text;
  //       imageUCount = 8;
  //       // imageU7 = 1;
  //     }

  //     else if (this.imageUploaded6 == 1) {
  //       imageValue6 = text;
  //       this.imageVAL6 = text;
  //       imageUCount = 7;

  //       // imageU6 = 1;

  //     }

  //     else if (this.imageUploaded5 == 1) {
  //       imageValue5 = text;
  //       this.imageVAL5 = text;
  //       imageUCount = 6;
  //       // imageU5 = 1;
  //     }

  //     else if (this.imageUploaded4 == 1) {
  //       imageValue4 = text;
  //       this.imageVAL4 = text;
  //       imageUCount = 5;
  //       // imageU4 = 1;
  //     }

  //     else if (this.imageUploaded3 == 1) {
  //       imageValue3 = text;
  //       this.imageVAL3 = text;
  //       imageUCount = 4;
  //       // imageU3 = 1;
  //     }

  //     else if (this.imageUploaded2 == 1) {
  //       imageValue2 = text;
  //       this.imageVAL2 = text;
  //       imageUCount = 3;
  //       // imageU2 = 1;
  //     }

  //     else if (this.imageUploaded1 == 1) {
  //       imageValue1 = text;
  //       this.imageVAL1 = text;
  //       imageUCount = 2;
  //       // imageU1 = 1;
  //     }

  //     else if (this.imageUploaded0 == 1) {
  //       imageValue0 = text;
  //       this.imageVAL0 = text;
  //       imageUCount = 1;
  //       // imageU0 = 1;
  //     }
  //   };

  //   // this.imageValue = reader.readAsDataURL(event.target.files[0]);
  //   //      setTimeout(function(){ 
  //   // //           console.log("xyz" + imageValue);
  //   //      }, 3000);
  // }
}

function onFrontClick(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront1 = text;
    // console.log(imageFront);
    (<HTMLInputElement>document.getElementById("frontPreviewId")).style.display = "block";
    this.urlFront1 = imageFront1;
  };
}
function onFrontClick2(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront2 = text;
    // console.log(imageFront2);
    (<HTMLInputElement>document.getElementById("frontPreviewId2")).style.display = "block";
    this.urlFront2 = imageFront2;
  };
}
function onFrontClick3(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront3 = text;
    // console.log(imageFront3);
    (<HTMLInputElement>document.getElementById("frontPreviewId3")).style.display = "block";
    this.urlFront3 = imageFront3;
  };
}
function onFrontClick4(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront4 = text;
    // console.log(imageFront4);
    (<HTMLInputElement>document.getElementById("frontPreviewId4")).style.display = "block";
    this.urlFront4 = imageFront4;
  };
}
function onFrontClick5(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront5 = text;
    // console.log(imageFront5);
    (<HTMLInputElement>document.getElementById("frontPreviewId5")).style.display = "block";
    this.urlFront5 = imageFront5;
  };
}
function onFrontClick6(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront6 = text;
    // console.log(imageFront6);
    (<HTMLInputElement>document.getElementById("frontPreviewId6")).style.display = "block";
    this.urlFront6 = imageFront6;
  };
}
function onFrontClick7(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront7 = text;
    // console.log(imageFront7);
    (<HTMLInputElement>document.getElementById("frontPreviewId7")).style.display = "block";
    this.urlFront7 = imageFront7;
  };
}
function onFrontClick8(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront8 = text;
    // console.log(imageFront8);
    (<HTMLInputElement>document.getElementById("frontPreviewId8")).style.display = "block";
    this.urlFront8 = imageFront8;
  };
}
function onFrontClick9(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront9 = text;
    // console.log(imageFront8);
    (<HTMLInputElement>document.getElementById("frontPreviewId9")).style.display = "block";
    this.urlFront9 = imageFront9;
  };
}
function onFrontClick10(event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
    var text: any = reader.result;
    imageFront10 = text;
    // console.log(imageFront8);
    (<HTMLInputElement>document.getElementById("frontPreviewId10")).style.display = "block";
    this.urlFront10 = imageFront10;
  };


}
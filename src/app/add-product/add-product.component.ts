import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
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
  urlFront1 = "";
  urlFront2 = "";
  urlFront3 = "";
  urlFront4 = "";
  urlFront5 = "";
  urlFront6 = "";
  urlFront7 = "";
  urlFront8 = "";
  urlFront9 = "";
  urlFront10 = "";
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

  title : any = [];
  faq : any = [];
  varients : any = [];
  shippingLocs : any = [];
  labels : any = "";
  keyword = 'name';
  keyword1 = 'category';
  catOne = 'name';
  mainCatId = "";
  catId = "";
  selectMain : boolean = true;
  test : any = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     },
     {
       id: 3,
       name: 'Baltimore'
     },
     {
       id: 4,
       name: 'Delhi'
     }
  ];

  hueGroups = [{
    name: "group 1",
    lights: [{
      name: "light 1"
    },{
      name: "light 2"
    }]
  },
  {
    name: "group 2",
    lights: [{
      name: "light 3"
    },{
      name: "light 4"
    }]
  }];

  datas: any = "";
  shippinglocationArray: any = [];
  editProdid : any  = "";
  newArray : any  = "";
  editMode : boolean = false;
  allProductInfo : any = {
    prodid:	2,
    name:	"",
    short_desc	:"",
    Long_desc:	"",
    spec	:"",
    shipping_option:	"",
    base_price	:"",
    bulk_discount_id:	"",
    offer_id:	"",
    returning_customers_count:	"",
    product_view_count:	"",
    cmsn_dedtd:	"",
    shop_id:	"",
    category_id:	"",
    sub_catgry_id:	"",
    active_status:	"",
    qty_avble:	1,
    safe_qty:	"",
    is_returnable	:"",
    label_id:	"",
    tags:	"",
    avg_confrmn_time:	"",
    avg_response_time:	"",
    avg_prcessing_time:	"",
    avg_shpping_time:	"",
    auto_cancel_time:	"",
    has_rfq:	"",
    has_gift:	"",
    has_order_confmn:	"",
    can_orderbydate:	"",
    has_instant_buy:	"",
    min_order_quant:	"",
    max_order_quant	:"",
    shipping_policy:	"",
    return_policy:	"",
    product_policy:	"",
    shipping_location_id:	"",
    rating:	"",
    rating_count:	'',
    review_count:	'',
    revenue_generated	:"",
    promo_id:	"",
    sold_count:	'',
    created_date:	"",
    remarks:	"",
    can_upload_image:	'',
    max_no_of_image:	"",
    add_custom_message_field :	"",
  };
  productStatus: any;
  isOrdered: boolean = false;
  tax: any = "";
  offerCount: any = "";
  editShippingFlag: boolean = false;
  editTitleBoolean: boolean = false;
  subCategoryArrayLoad: any;




  constructor(private data: DataService, private cookieService: CookieService,private route: ActivatedRoute, private location: Location) { }


  // imageProduct2: object;
  // imageProduct3: object;

  ngOnInit() {
    (<HTMLInputElement><any>document.getElementById('sellerHeader')).style.display = "block";
    (<HTMLInputElement><any>document.getElementById('mainHeader')).style.display = "none";
    (<HTMLInputElement><any>document.getElementById('breadcrumb')).style.display = "none";

    this.sellerId = this.getCookie('sellerId');

    this.data.getOfferLimit(this.sellerId).subscribe(data=>{
      this.offerCount = data;
    })
    
    this.data.getTaxFromSetting().subscribe(data=>{
      this.tax = data;
    })


    this.route.queryParams.subscribe(params => {
      this.editProdid = params['prod_id'];
      if(this.editProdid != null){
        this.editMode = true;
        this.data.getProductInfor(this.editProdid, this.sellerId).subscribe(data=>{
          this.allProductInfo = data;
          setTimeout(()=>{
            (<HTMLInputElement><any>document.getElementById('mainCategoryId')).value = this.allProductInfo['category_id'];
            this.subCategoryLoaded(this.allProductInfo['category_id']);
          },10000);
          this.subCategoryArrayLoad = this.allProductInfo['sub_catgry_id'];
          if(this.subCategoryArrayLoad != "" || this.subCategoryArrayLoad != null){
            this.data.getSubCatForProductEdit(this.subCategoryArrayLoad).subscribe(data=>{
              // this.subCategoryArray = data;
            })
          }
          if(this.allProductInfo['max_no_of_image'] =="" || this.allProductInfo['max_no_of_image'] == null){
            this.allProductInfo['max_no_of_image'] = 0;
          }
          if(this.allProductInfo['isOrdered']){
            this.isOrdered = true;
          }
          if(this.allProductInfo['active_status'] == "active"){
            (<HTMLInputElement><any>document.getElementById('active')).checked = true;
          }
          else{
            (<HTMLInputElement><any>document.getElementById('active')).checked = false;
          }
          this.productStatus = this.allProductInfo['active_status'].replace(/_/g, " ");
          this.basePrice = this.allProductInfo['base_price'];
          this.setupPrice1();
          var shippingLocationMatrix = this.allProductInfo['shipping_option'].split(',');
          for(var i = 0;i<shippingLocationMatrix.length;i++){
            if(shippingLocationMatrix[i]=='pickup'){
              (<HTMLInputElement><any>document.getElementById('pickupRadio')).checked  = true 
            }
            if(shippingLocationMatrix[i]=='home_delivery'){
              (<HTMLInputElement><any>document.getElementById('homedeliveryRadio')).checked  = true 
            }
            if(shippingLocationMatrix[i]=='shipping'){
              (<HTMLInputElement><any>document.getElementById('shippingRadio')).checked  = true 
            }
          }
        },
        error => {
          alert('No such product Exist.');
          return;
        })
        

        this.data.getTagsForProduct(0, this.editProdid).subscribe(data=>{
          this.tagsArray = data;
        },error => {
          return;
        });
        this.data.getTitleForAddproduct(this.editProdid).subscribe(data=>{
          this.title = data;
        },error => {
          return;
        });
        this.data.getDiscountDay(this.editProdid).subscribe(data=>{
          this.discountArray = data;
        },error => {
          return;
        });
        if(!this.editMode){
          this.data.getShippingLocationProductEdit(this.editProdid).subscribe(data=>{
            this.shippingLocs = data;
          },error => {
            return;
          });
        }
        this.data.getFaqForProductEdit(this.editProdid).subscribe(data=>{
          this.faq = data;
        },error => {
          return;
        });
        this.data.getVaritentInfo(this.editProdid).subscribe(data=>{
          this.varients = data;
        },error => {
          return;
        });

        this.urlGetter(this.editProdid);
      }



		});

  
    this.data.getLabelForProduct().subscribe(data=>{
      this.labels = data;
    });

    this.data.getAllCategoriesProduct().subscribe(data=>{
      this.allCat = data;
    });
    var seller_id = this.getCookie("sellerId");
    if(this.editMode){
      this.data.getShippingLocationEditProduct(seller_id, this.editProdid).subscribe(data=>{
        this.shippingLocs = data;
      });
    }
    else{
      this.data.getShippingLocationAddProduct(seller_id).subscribe(data=>{
        this.shippingLocation = data;
      });
    }

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
      },error => {
        return;
      }
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
  getSearchCategory(){
    var search = (<HTMLInputElement><any>document.getElementById('subcategory')).value;
    (<HTMLInputElement><any>document.getElementById("myUL2")).style.display = "block";
    var id = this.mainCatId;
    this.data.getSubCategorySearch(id, search).subscribe(
      data => {
        this.dynamicCategory = data;
        // console.log(this.dynamicSubCategory);
      },
    );
  }

  replaceMedCategory(id, val){
    (<HTMLInputElement><any>document.getElementById("myUL2")).style.display = "none";
    (<HTMLInputElement><any>document.getElementById('subcategory')).value = val;
    if(this.catId == ""){
      this.catId = id;
      var cell ={ id:id, val: val}
      this.subCategoryArray.push(cell);
      this.subCategoryArrayJustVal.push(id);
    }
    else{
      alert("only one category can be selected");
      return;
    }
    this.data.getSubCategoryAddProduct(id).subscribe(
      data => {
        this.dynamicSubCategory = data;
        // console.log(this.dynamicSubCategory);
      },
    );
  }


  newCategory(){
    var search = (<HTMLInputElement><any>document.getElementById('subcategory')).value;
    (<HTMLInputElement><any>document.getElementById("myUL2")).style.display = "none";
    this.data.createNewSubCategory(this.mainCatId, search).subscribe(
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
    if(loc == "Main"){
      (<HTMLInputElement><any>document.getElementById("item_pincode")).value = pin;
      (<HTMLInputElement><any>document.getElementById("myUL")).style.display = "none";
      this.selectMain = false;
    }
    else{
      (<HTMLInputElement><any>document.getElementById("item_pincode")).value = loc+", "+pin;
      (<HTMLInputElement><any>document.getElementById("myUL")).style.display = "none";
    }
  }

  addShippingLocation(item){
    var pincode = (<HTMLInputElement><any>document.getElementById("item_pincode")).value;
    var price = (<HTMLInputElement><any>document.getElementById("item_price")).value;
    var qtn = (<HTMLInputElement><any>document.getElementById("item_qtn")).value;
    var itemCount = pincode.split(",");
    if(itemCount.length<2){
      this.selectMain = false;
    }
    var cell = {pincode:pincode,price:price,qtn:qtn}
    this.shippingLocs.push(cell);
    (<HTMLInputElement><any>document.getElementById("item_pincode")).value = "";
    (<HTMLInputElement><any>document.getElementById("item_price")).value= "";
    (<HTMLInputElement><any>document.getElementById("item_qtn")).value = "";
  }

  deleteShiipingLocation(pos){
    var itemCount = pos['pincode'].split(",");
    if(itemCount.length<2){
      this.selectMain = true;
    }
    this.shippingLocs.splice( this.shippingLocs.indexOf(pos), 1 );
  }
  editShiipingLocation(item,pos){
    if(!this.editShippingFlag){
      (<HTMLInputElement><any>document.getElementById("item_pincode")).value = item['pincode'];
      (<HTMLInputElement><any>document.getElementById("item_price")).value= item['price'];
      (<HTMLInputElement><any>document.getElementById("item_qtn")).value = item['qtn'];
      (<HTMLInputElement><any>document.getElementById(pos+"_p_pincode")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(pos+"_p_price")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(pos+"_p_qtn")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(pos+"_close")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(pos+"_edit")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById("item_close")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(pos+"_save")).style.display = "block";
      this.editShippingFlag = true;
    }
  }

  saveShiipingLocation(item, pos){
    if(this.editShippingFlag){
      var p = this.shippingLocs.indexOf(item);
      var pincode = (<HTMLInputElement><any>document.getElementById("item_pincode")).value;
      var price = (<HTMLInputElement><any>document.getElementById("item_price")).value;
      var qtn = (<HTMLInputElement><any>document.getElementById("item_qtn")).value;
      this.shippingLocs[p]['pincode'] = pincode;
      this.shippingLocs[p]['price'] = price;
      this.shippingLocs[p]['qtn'] = qtn;
      (<HTMLInputElement><any>document.getElementById(pos+"_p_pincode")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(pos+"_p_price")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(pos+"_p_qtn")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(pos+"_close")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(pos+"_edit")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById("item_close")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(pos+"_save")).style.display = "none"; 
      this.editShippingFlag = false;
      (<HTMLInputElement><any>document.getElementById("item_pincode")).value = "";
      (<HTMLInputElement><any>document.getElementById("item_price")).value = "";
      (<HTMLInputElement><any>document.getElementById("item_qtn")).value = "";
    }
  }

  selectEvent(item) {
    // do something with selected item
    if(this.tagsArray.length<5){
      var cell = {id:this.tagsArray.length+1,name:item.name}
      this.tagsArray.push(cell);
    }
    else{
      alert("Only 5 tags are allowed");
    }
    
  }
  displayVarientType(item) {
    var cell = {type:"",price:""}
    item.push(cell);
  }
  deleteCell(cell,item) {
    item.splice( item.indexOf(cell), 1 );
  }
  
  addVarients(){
    var cell = {name:"new variant",value:[{type:"",price:""},]};
      this.varients.push(cell);
  }

  saveAddVariant(variantArray,pos){
    var isMultiVariant  = (<HTMLInputElement><any>document.getElementById("isMultiVariant_"+pos)).checked;
    console.log(isMultiVariant);
    if(this.editMode){
      this.data.addProductVarients(JSON.stringify(variantArray), this.editProdid,isMultiVariant).subscribe(data=>{

      })
    }
    else{
      this.data.addProductVarients(JSON.stringify(variantArray),'all',isMultiVariant).subscribe(data=>{
      })
    }


  }

  enterValue(i, j,caller, arr){
    var val = "";
    if(caller == "type"){
      val =  (<HTMLInputElement><any>document.getElementById(i+"_"+j+"varient_1")).value;
      arr['type'] = val;
    }
    if(caller == "price"){
      val =  (<HTMLInputElement><any>document.getElementById(i+"_"+j+"price_1")).value;
      arr['price'] = val;
    }
    if(caller == "name"){
      val =  (<HTMLInputElement><any>document.getElementById(i+"_name")).value;
      arr['name'] = val;
    }
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
    this.commDec = this.tax['cmsn_dedtd'];
    this.totalPrice = (this.basePrice - (this.basePrice * (this.commDec / 100)) - (this.basePrice * (this.tax['tax'] / 100))).toFixed(2);
  }
  setupPrice1() {
    var base_price = this.allProductInfo['base_price'];
    this.basePrice = base_price;
    this.commDec = this.tax['cmsn_dedtd'];
    this.totalPrice = (this.basePrice - (this.basePrice * (this.commDec / 100)) - (this.basePrice * (this.tax['tax'] / 100))).toFixed(2);
  }

  maxImageChecker(){
    var maxCount = parseInt((<HTMLInputElement><any>document.getElementById("Max-Count-Label")).value);
    if(maxCount > 10){
      alert("Max image upload count cannot exceed 10");
      (<HTMLInputElement><any>document.getElementById("Max-Count-Label")).value = "";
    }
  }

  deleteVarient(variant){
    this.varients.splice( this.varients.indexOf(variant), 1 );
    // alert(variant);
    // this.data.deleteVariantEditProduct(variant, this.editProdid).subscribe(data=>{
    //   this.data.getVaritentInfo(this.editProdid).subscribe(data=>{
    //     this.varients = data;
    //   });
    // })
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
    if(!this.editMode){
      this.data.getCategoryVariantList(1).subscribe(data=>{
        this.varients = data;
      })
    }
    this.data.getTagsForProduct(this.mainCatId).subscribe(data=>{
      this.datas = data;
    });
    this.data.getCategoryAddProduct(id).subscribe(
      data => {
        this.dynamicCategory = data;
        // console.log(this.dynamicCategory);
      },
    );
  }

  replaceCategory(id, val){
    (<HTMLInputElement><any>document.getElementById("myUL1")).style.display = "none";
    (<HTMLInputElement><any>document.getElementById("subsubcategory")).value = val;
    var cell ={ id:id, val: val}
    this.subCategoryArray.push(cell);
    this.subCategoryArrayJustVal.push(id);
  }
  deleteCategory(val){
    if(val.id == this.catId){
      this.catId = "";
    }
    this.subCategoryArray.splice( this.subCategoryArray.indexOf(val), 1 );
    this.subCategoryArrayJustVal.splice( this.subCategoryArrayJustVal.indexOf(val.id), 1 );
  }

  priceUpdate(){
    var price = (<HTMLInputElement><any>document.getElementById("Pro-Disc-2")).value;
    var disc = 100 - (parseInt(price)/this.basePrice)*100;
    if(price != ""){
      (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value = disc.toString();
    }
    else{
      (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value = "";
    }
  }
  discountUpdate(){
    var disc = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;
    var price = this.basePrice -((parseInt(disc)/100)*this.basePrice);
    if(disc != ""){
      (<HTMLInputElement><any>document.getElementById("Pro-Disc-2")).value = price.toString();
    }
    else{
      (<HTMLInputElement><any>document.getElementById("Pro-Disc-2")).value = "";
    }
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

    // var pincode = (<HTMLInputElement><any>document.getElementById("initialAlias")).value;
    // var price = (<HTMLInputElement><any>document.getElementById("initialprice")).value;
    // var qtn = (<HTMLInputElement><any>document.getElementById("initialQtn")).value;
    // var cell = {pincode:pincode,price:price,qtn:qtn}
    // this.shippingLocs.push(cell);

    if(this.editMode){
      var active_status = (<HTMLInputElement><any>document.getElementById("active")).checked;
    }
    else{
      var active_status = false;
    }
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

      if(min_order_quant>max_order_quant){
        alert("Minimum Qty per Order must be less than Max Qty per Order");
        return;
      }
      var bulk_discount_id = (<HTMLInputElement><any>document.getElementById("Bundle-Qty")).value;
      var bulk_discount_id = (<HTMLInputElement><any>document.getElementById("Disc-Price")).value;
      var bulk_discount_id = (<HTMLInputElement><any>document.getElementById("Actual-Price")).value;


      var offer_id = (<HTMLInputElement><any>document.getElementById("Pro-Date-1")).value;
      var offer_id = (<HTMLInputElement><any>document.getElementById("Pro-Date-2")).value;
      var offer_id = (<HTMLInputElement><any>document.getElementById("Pro-Disc-1")).value;
      var cmsn_dedtd = this.commDec;
      if(!this.editMode){
        var avg_prcessing_time = (<HTMLInputElement><any>document.getElementById("Avg-ProTime")).value;
        var avg_shpping_time = (<HTMLInputElement><any>document.getElementById("Avg-ShipTime")).value;
        var auto_cancel_time = (<HTMLInputElement><any>document.getElementById("Auto-Cancel")).value;
      }
      else{
        var avg_prcessing_time : string = this.allProductInfo['avg_prcessing_time'];
        var avg_shpping_time : string = this.allProductInfo['avg_shpping_time'];
        var auto_cancel_time : string = this.allProductInfo['auto_cancel_time'];
      }

      var tags = "";
      for(var i = 0;i< this.tagsArray.length; i++){
        tags = tags + this.tagsArray[i]['name'] + ",";
      }
      tags = tags.slice(0, -1);

      var max_no_of_image = (<HTMLInputElement><any>document.getElementById("Max-Count-Label")).value;
      var has_gift = (<HTMLInputElement><any>document.getElementById("giftOption")).checked;
      var has_order_confmn = (<HTMLInputElement><any>document.getElementById("orderConfrm")).checked;
      var can_upload_image = (<HTMLInputElement><any>document.getElementById("uploadImg")).checked;
      var can_orderbydate = (<HTMLInputElement><any>document.getElementById("deliveryDate")).checked;
      var add_custom_message_field = (<HTMLInputElement><any>document.getElementById("autoCustom")).checked;
      var has_rfq = (<HTMLInputElement><any>document.getElementById("rfq")).checked;
      var has_instant_buy = (<HTMLInputElement><any>document.getElementById("instantBuy")).checked;

      var shipping_policy = (<HTMLInputElement><any>document.getElementById("policyShippingTxtAr")).value;
      var return_policy = (<HTMLInputElement><any>document.getElementById("policyReturnTxtAr")).value;
      var product_policy = (<HTMLInputElement><any>document.getElementById("policyProductTxtAr")).value;

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
      
      var shipping_option = "";
      if (ship) {
        shipping_option = shipping_option+ "shipping,";
      }
      if (cod) {
        shipping_option = shipping_option+  "home_delivery,";
      }
      if (pickup) {
        shipping_option =  shipping_option+ "pickup";
      }
      if(name =="" || name == null){
        name = "";
      }
      if(base_price =="" || base_price == null){
        base_price = "0";
      }
      if(short_desc =="" || short_desc == null){
        short_desc = "";
      }
      if(Long_desc =="" || Long_desc == null){
        Long_desc = "";
      }
      if(spec =="" || spec == null){
        spec = "";
      }
      if(qty_avble =="1" || qty_avble == null){
        qty_avble = "0";
      }
      if(max_order_quant =="" || max_order_quant == null){
        max_order_quant = "0";
      }
      if(min_order_quant =="" || min_order_quant == null){
        min_order_quant = "0";
      }
      if(avg_prcessing_time =="" || avg_prcessing_time == null){
        avg_prcessing_time = "0";
      }
      if(avg_shpping_time =="" || avg_shpping_time == null){
        avg_shpping_time = "0";
      }
      if(tags =="" || tags == null){
        tags = "";
      }
      if(auto_cancel_time =="" || auto_cancel_time == null){
        auto_cancel_time = "0";
      }
      if(max_no_of_image =="" || max_no_of_image == null){
        max_no_of_image = "0";
      }
      if(shipping_option =="" || shipping_option == null){
        shipping_option = "";
      }
      if(shipping_policy =="" || shipping_policy == null){
        shipping_policy = "";
      }
      if(return_policy =="" || return_policy == null){
        return_policy = "";
      }
      if(product_policy =="" || product_policy == null){
        product_policy = "";
      }
      if(bulk_discount_id =="" || bulk_discount_id == null){
        bulk_discount_id = "0";
      }
      if(offer_id =="" || offer_id == null){
        offer_id = "0";
      }
      if(quantity_price =="" || quantity_price == null){
        quantity_price = "0";
      }
      if(price =="" || price == null){
        price = "0";
      }
      if(labels =="" || labels == null){
        labels = "";
      }
      if(faqArray =="" || faqArray == null){
        faqArray = "";
      }

      
      this.addProduct = { name: name, base_price: base_price, short_desc: short_desc, Long_desc: Long_desc, spec: spec, qty_avble: qty_avble, max_order_quant: max_order_quant, min_order_quant: min_order_quant, avg_prcessing_time: avg_prcessing_time, avg_shpping_time: avg_shpping_time, tags: tags, auto_cancel_time: auto_cancel_time, max_no_of_image: max_no_of_image, has_gift: has_gift, shipping_option: shipping_option, has_order_confmn: has_order_confmn, can_orderbydate: can_orderbydate, can_upload_image: can_upload_image, add_custom_message_field: add_custom_message_field, has_rfq: has_rfq, has_instant_buy: has_instant_buy, shipping_policy: shipping_policy, return_policy: return_policy, product_policy: product_policy, active_status: active_status, bulk_discount_id: bulk_discount_id, offer_id: offer_id, cmsn_dedtd: cmsn_dedtd, image1: imageFront1, image2: imageFront2, image3: imageFront3, image4: imageFront4, image5: imageFront5, image6: imageFront6, image7: imageFront7, image8: imageFront8, image9: imageFront9, image10: imageFront10, sellerid: this.sellerId, quantity_price: quantity_price, price: price,labels:labels,shippingArray:shippingArray,varinetSelect:varinetSelect,titleSelect:titleSelect,discountArraySelect:discountArraySelect, caller: caller, faqArray:faqArray, mainCat: this.mainCatId, subCat:this.subCategoryArrayJustVal,commDec:this.commDec };

      this.addProductMsgTitle = { title: this.msgTitle };

      //  image0: image0, image1: image1, image2: image2, image3: image3, image4: image4, image5: image5, image6: image6, image7: image7, image8: image8, image9: image9, imageU0: this.imageU0, imageU1: this.imageU1, imageU2: this.imageU2, imageU3: this.imageU3, imageU4: this.imageU4, imageU5: this.imageU5, imageU6: this.imageU6, imageU7: this.imageU7, imageU8: this.imageU8, imageU9: this.imageU9, imageUCount: imageUCount
      if(add_custom_message_field){
        if(this.title.length == 0){
          alert('Message Title cannot be empty');
          return;
        }
      }
      if(this.mainCatId == ""){
        alert("Main category must be selected.");
        return;
      }
      if(this.catId == ""){
        alert("Category must be selected.");
        return;
      }
      if(this.editMode){
        this.data.getdataPostAddProduct(this.addProduct, this.editProdid).subscribe(data => {
          // window.location.href = './dashboard';
          if(caller == "duplicate"){
            alert('Product have been saved and dupicate have been made.');
          }
          else if(caller == "publish"){
            alert('Product have been published.');
            window.location.href = './managepage';
          }
          else if(caller == "save"){
            alert('Product have been saved.');
            window.location.href = './managepage';
          }
          else{
          }
        });
      }
      else{
        this.data.getdataPostAddProduct(this.addProduct).subscribe(data => {
          // window.location.href = './dashboard'
          if(caller == "publish"){
            alert('Product have been published.');
            window.location.href = './managepage';
          }
          else if(caller == "save"){
            alert('Product have been saved.');
            window.location.href = './managepage';
          }
        });
      }



    



    // this.id = "prodid";
    // this.data.getdynamicPriceAddProduct(this.id).subscribe(
    //   data => {
    //     this.dynamicDataPrice = data;
    //   },
    //   error => console.error(error)
    // );

    // this.id = "prodid";
    // this.data.getdynamicPriceDiscTotalAddProd(this.id).subscribe(
    //   data => {
    //     this.dynamicDataPriceDiscTotal = data;
    //   },
    //   error => console.error(error)
    // );




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

  editTitle(item , i){
    if(!this.editTitleBoolean){
      (<HTMLInputElement><any>document.getElementById("MsgTitleLabel_"+i)).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(i+"_deleteTitle")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(i+"_editTitle")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById(i+"_saveTitle")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById("MsgTitleValue_"+i)).style.display = "block";
      console.log(item);
      console.log(i);
      this.editTitleBoolean = true;
    }
  }
  saveTitle(item , i){
    if(this.editTitleBoolean){
      var p = this.title.indexOf(item);
      var title = (<HTMLInputElement><any>document.getElementById("MsgTitleValue_"+i)).value;
      this.title[p] = title;
      (<HTMLInputElement><any>document.getElementById("MsgTitleLabel_"+i)).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(i+"_deleteTitle")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(i+"_editTitle")).style.display = "block";
      (<HTMLInputElement><any>document.getElementById(i+"_saveTitle")).style.display = "none";
      (<HTMLInputElement><any>document.getElementById("MsgTitleValue_"+i)).style.display = "none";
      console.log(item);
      console.log(i);
      this.editTitleBoolean = false;
    }
  }



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

  FaqEdit(item, pos){
    (<HTMLInputElement><any>document.getElementById(pos+"_editFaq")).style.display = 'none';
    (<HTMLInputElement><any>document.getElementById(pos+"_deleteFaq")).style.display = 'none';
    (<HTMLInputElement><any>document.getElementById(pos+"_saveFaq")).style.display = 'block';
    (<HTMLInputElement><any>document.getElementById("faqQuestion_"+pos)).style.display = 'none';
    (<HTMLInputElement><any>document.getElementById("faqAnswer_"+pos)).style.display = 'none';
    (<HTMLInputElement><any>document.getElementById("faqQuestionInput_"+pos)).style.display = 'block';
    (<HTMLInputElement><any>document.getElementById("faqAnswerInput_"+pos)).style.display = 'block';
  }

  faqSave(item, pos){
    var p = this.faq.indexOf(item);
    var faqQ = (<HTMLInputElement><any>document.getElementById("faqQuestionInput_"+pos)).value;
    var faqA = (<HTMLInputElement><any>document.getElementById("faqAnswerInput_"+pos)).value;
    this.faq[pos]['faqQ'] = faqQ;
    this.faq[pos]['faqA'] = faqA;
    (<HTMLInputElement><any>document.getElementById(pos+"_editFaq")).style.display = 'inline';
    (<HTMLInputElement><any>document.getElementById(pos+"_deleteFaq")).style.display = 'inline';
    (<HTMLInputElement><any>document.getElementById(pos+"_saveFaq")).style.display = 'none';
    (<HTMLInputElement><any>document.getElementById("faqQuestion_"+pos)).style.display = 'inline';
    (<HTMLInputElement><any>document.getElementById("faqAnswer_"+pos)).style.display = 'inline';
    (<HTMLInputElement><any>document.getElementById("faqQuestionInput_"+pos)).style.display = 'none';
    (<HTMLInputElement><any>document.getElementById("faqAnswerInput_"+pos)).style.display = 'none';
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

    if(this.offerCount<5){
      if(this.editMode){
        this.data.postOffersAddProduct(this.addProductDisc, this.editProdid).subscribe(data => {})
      }
      else{
        this.data.postOffersAddProduct(this.addProductDisc).subscribe(data => {})
      }
    }
    else{
      alert('Sorry a seller can only have 5 offers at a time.');
    }

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
  urlGetter(prodid){
    this.urlFront1 = "assets/images/product/"+prodid+"/"+prodid+"_0.jpg";
    this.urlFront2 = "assets/images/product/"+prodid+"/"+prodid+"_1.jpg";
    this.urlFront3 = "assets/images/product/"+prodid+"/"+prodid+"_2.jpg";
    this.urlFront4 = "assets/images/product/"+prodid+"/"+prodid+"_3.jpg";
    this.urlFront5 = "assets/images/product/"+prodid+"/"+prodid+"_4.jpg";
    this.urlFront6 = "assets/images/product/"+prodid+"/"+prodid+"_5.jpg";
    this.urlFront7 = "assets/images/product/"+prodid+"/"+prodid+"_6.jpg";
    this.urlFront8 = "assets/images/product/"+prodid+"/"+prodid+"_7.jpg";
    this.urlFront9 = "assets/images/product/"+prodid+"/"+prodid+"_8.jpg";
    this.urlFront10 = "assets/images/product/"+prodid+"/"+prodid+"_9.jpg";
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("frontPreviewId")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId2")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId3")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId4")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId5")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId6")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId7")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId8")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId9")).style.display = "block";
      (<HTMLInputElement>document.getElementById("frontPreviewId10")).style.display = "block";
    }, 5000);
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
    document.getElementById('btn-add-image-1').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-2').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-3').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-4').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-5').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-6').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-7').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-8').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-9').innerHTML = "Change image";
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
    document.getElementById('btn-add-image-10').innerHTML = "Change image";
  };


}


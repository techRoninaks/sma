import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
  baseUrl = "";
  // baseUrl = "http://localhost/Angular/sma4/src/";

  constructor( private http: HttpClient ) { }
  
  prodViewIncrement(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/productviewinc.php', httpParams);
  }
  getProductRevRatings(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/prodrevratings.php', httpParams);
  }
  sendOrderDetails(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("shopId", data['shop_id'])
      .append("userId", data['user_id'])
      .append("message", data['message'])
      .append("productVariant", data['productVariant'])
      .append("productQuantity", data['productQuantity'])
      .append("imageUploaded", data['imageUploaded'])
      .append("deliveryOption", data['deliveryOption'])
      .append("sellerId", data['seller_identity'])
      .append("rfqEnabled", data['rfq_enabled'])
      .append("desiredDate", data['desiredDate'])
      .append("giftEnabled", data['gift_enabled'])      
      .append("msgCount", data['msgCount'])
      .append("image", data['image'])

    return this.http.post(this.baseUrl + 'assets/api/pricelisting.php', httpParams);
  }
  
  	getProductList(data: any) {
		let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("productCount", data['prod_number'])
		return this.http.post(this.baseUrl+'assets/api/productslist.php', httpParams);
	}
  
  sendCartDetails(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("shopId", data['shop_id'])
      .append("userId", data['user_id'])
      .append("message", data['message'])
      .append("productVariant", data['productVariant'])
      .append("productQuantity", data['productQuantity'])
      .append("imageUploaded", data['imageUploaded'])
      .append("deliveryOption", data['deliveryOption'])
      .append("sellerId", data['seller_identity'])
      .append("rfqEnabled", data['rfq_enabled'])
      .append("desiredDate", data['desiredDate'])
      .append("giftEnabled", data['gift_enabled'])
      .append("giftTitle", data['gift_title'])
      .append("giftNote", data['gift_note'])
      .append("giftAddress", data['gift_address'])
      .append("msgCount", data['msgCount'])


    return this.http.post(this.baseUrl + 'assets/api/pricingcart.php', httpParams);
  }
  getRfqInputs(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/rfqprods.php', httpParams);
  }
  getRfqAddress(data: any) {
    let httpParams = new HttpParams()
      .append("userId", data)
    return this.http.post(this.baseUrl + 'assets/api/rfqaddress.php', httpParams);
  }
  getPriceDate(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/pricedategetter.php', httpParams);
  }
  sendRfq(data :any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("hasImage", data['imageUploaded'])
      .append("userId", data['user_id'])
      .append("shopLocation", data['shop_location'])
      .append("note", data['note'])
      .append("productRef", data['product_ref'])
    return this.http.post(this.baseUrl + 'assets/api/rfqadd.php', httpParams);
  }
  // shop Component
  getProductListManage(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/productlistmanage.php', httpParams);
  }
  readFileProdImage(data: any){
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/readFileProdImage.php', httpParams);
  }
  getMessageTitle(data: any){
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/messagetitle.php', httpParams);
  } 

  getShopRevRatings(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/shoprevratings.php', httpParams);
  }
  shopViewIncrement(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/shopviewinc.php', httpParams);
  }
  getMostSelling(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/mostshopitem.php', httpParams);
  }
  getFolCount(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/folCountShop.php', httpParams);
  }
delProdManage(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data)
    return this.http.post(this.baseUrl + 'assets/api/delprodmanage.php', httpParams);
  }
  privacyManage(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("val", data['val'])
    return this.http.post(this.baseUrl + 'assets/api/privacymanage.php', httpParams);
  }
  vacationManage(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("val", data['val'])
    return this.http.post(this.baseUrl + 'assets/api/vacationmanage.php', httpParams);
  }
  editManage(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("val", data['val'])
      .append("type", data['type']);
    return this.http.post(this.baseUrl + 'assets/api/editmanage.php', httpParams);
  }
  vacationSave(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("start", data['start'])
      .append("end", data['end'])
      .append("type", data['type']);
    return this.http.post(this.baseUrl + 'assets/api/vacationsave.php', httpParams);
  }
getDateDiffShop(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/datediffshop.php', httpParams);
  }

  //transaction page
  getTransStatus(data: any) {
    let httpParams = new HttpParams()
      .append("sellerId", data)
    return this.http.post(this.baseUrl + 'assets/api/transtatus.php', httpParams);
  }
  getTransactionDetails(data: any) {
    let httpParams = new HttpParams()
      .append("sellerId", data)
    return this.http.post(this.baseUrl + 'assets/api/transaction.php', httpParams);
  }
  getTransFiltered(data: any) {
    let httpParams = new HttpParams()
      .append("sellerId", data['seller_id'])
      .append("statusDetail", data['status_name'])
    return this.http.post(this.baseUrl + 'assets/api/transfiltered.php', httpParams);
  }

  //sellerPage
  getFaqSite(data :any) {
    let httpParams = new HttpParams()
    // .append("sellerId", data)
    .append("numberFaq", data)

    return this.http.post(this.baseUrl + 'assets/api/faqsite.php', httpParams);
  }
  
  getProductData(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post(this.baseUrl+'assets/api/datagetter.php',httpParams);
  }
  getVariantInfo(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post(this.baseUrl+'assets/api/variant.php',httpParams);
  }
  getSellerDetails(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post(this.baseUrl+'assets/api/sellerdetails.php',httpParams);
  }
  getVariantCount(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post(this.baseUrl+'assets/api/varcount.php',httpParams);
  }
  getVariantNumber(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post(this.baseUrl+'assets/api/numvar.php',httpParams);
  }
  getFollowInfo(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post(this.baseUrl+'assets/api/folunfol.php',httpParams);
  }
  getFollowShop(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post(this.baseUrl+'assets/api/follow.php',httpParams);
  }
  getUnfollowShop(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post(this.baseUrl+'assets/api/follow.php',httpParams);
  }
  getDiscountLabel(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post(this.baseUrl+'assets/api/discountlabel.php', httpParams);
	}
	getRatingReview(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post(this.baseUrl+'assets/api/ratingreview.php', httpParams);
	}
	// getLikeDislikeInfo(data : any){
	//   let httpParams = new HttpParams()
	//   .append("prodId",data['prod_id'])
	//   .append("userId",data['user_id'])
	//   return this.http.post('assets/api/folunfol.php',httpParams);
	// }
	sendReport(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)
		// console.log(data);
		// console.log(rev);
		return this.http.post(this.baseUrl+'assets/api/report.php', httpParams);
	}
	likeRev(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)
		// console.log(data);
		// console.log(rev);
		return this.http.post(this.baseUrl+'assets/api/likeproduct.php', httpParams);
	}
	dislikeRev(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)
		// console.log(data);
		// console.log(rev);
		return this.http.post(this.baseUrl+'assets/api/dislikeproduct.php', httpParams);
	}
	getDateDiff(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post(this.baseUrl+'assets/api/datediff.php', httpParams);
	}
	setData(data: any) {
		let httpParams = new HttpParams()
			.append("", data['quantity'])
			.append("", data['message'])
			.append("", data['uploadProductImage'])
			.append("", data['deliveryDatePicker'])
			.append("", data['shippingOption'])
		return this.http.post(this.baseUrl+'assets/api/submitorderdetails.php', httpParams);

	}
	// shop Component

	getShopData(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post(this.baseUrl+'assets/api/shopgetter.php', httpParams);
	}
	getSellerDetailsShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post(this.baseUrl+'assets/api/sellerdetailshop.php', httpParams);
	}

	getFollowInfoShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
		return this.http.post(this.baseUrl+'assets/api/folunfolshop.php', httpParams);
	}
	getFollowShopPage(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
		return this.http.post(this.baseUrl+'assets/api/followshop.php', httpParams);
	}
	getUnfollowShopPage(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
		return this.http.post(this.baseUrl+'assets/api/unfollowshop.php', httpParams);
	}
	getRatingReviewShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post(this.baseUrl+'assets/api/ratingreviewshop.php', httpParams);
	}

	sendReportShop(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)

		return this.http.post(this.baseUrl+'assets/api/reportshop.php', httpParams);
	}
	likeRevShop(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)

		return this.http.post(this.baseUrl+'assets/api/likeproductshop.php', httpParams);
	}
	dislikeRevShop(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)

		return this.http.post(this.baseUrl+'assets/api/dislikeproductshop.php', httpParams);
	}

	getFaqProduct(data: any) {
		let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("numberFaq", data['number_faq'])
		return this.http.post(this.baseUrl+'assets/api/faqproduct.php', httpParams);
	}
	getFaqShop(data: any) {
		let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("numberFaq", data['number_faq'])
		return this.http.post(this.baseUrl+'assets/api/faqshop.php', httpParams);
	}
  getPageData(page: string){
    let httpParams = new HttpParams()
    .append("pageName", page);
    return this.http.post(this.baseUrl+'assets/api/getPage.php', httpParams);
  }

  getPlanDetailsFree(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);
    return this.http.post(this.baseUrl+'assets/api/plandetailsFetchFree.php',httpParams);
  }
  getPlanDetailsBasic(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);

    return this.http.post(this.baseUrl+'assets/api/plandetailsFetchBasic.php',httpParams);
  }
  getPlanDetailsPremium(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);

    return this.http.post(this.baseUrl+'assets/api/plandetailsFetchPremium.php',httpParams);
  }
  getPlanDetailsPlus(data: Object){
    let httpParams= new HttpParams()
    .append("planDescription", data['planDescription'])
    .append("planPrice", data['planPrice'])
    .append("taxPrice", data['taxPrice'])
    .append("planDiscount", data['planDiscount'])
    .append("duration", data['duration']);
    return this.http.post(this.baseUrl+'assets/api/plandetailsFetchPlus.php',httpParams);
  }

  attemptLogin(data: Object){
    let httpParams= new HttpParams()
    .append("login_email", data['login_email'])
    .append("login_password", data['login_password']);
    return this.http.post(this.baseUrl+'assets/api/login.php',httpParams);
  }

  checkMobile(data: string){
    let httpParams= new HttpParams()
    .append("fp_mobile_no", data);
    console.log(data);
    return this.http.post(this.baseUrl+'assets/api/checkMobileNo.php',httpParams);
  }

  sendOtp(otp:any, mobileNo:any, message:any){
    let httpParams= new HttpParams()
    .append("otp",otp)
    .append("mobile",mobileNo)
    .append("message",message);
    return this.http.post(this.baseUrl+'assets/api/sendOtp.php',httpParams);
  }
  
  setPassword(fp_mobile_no:any, new_password:any){
    let httpParams= new HttpParams()
    .append("fp_mobile_no",fp_mobile_no)
    .append("new_password",new_password);
    console.log(fp_mobile_no);
    console.log(new_password);
    return this.http.post(this.baseUrl+'assets/api/changePassword.php',httpParams);
  }

  deleteCartProductfn(id: any, userId: any){
    let httpParams = new HttpParams()
    .append("id",id)
    .append("userId",userId);
    return this.http.post(this.baseUrl+'assets/api/deleteCartProduct.php',httpParams);
  }
  
  getTrending(tagNum: any, pageNum: any){
    let httpParams= new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum);
    return this.http.post(this.baseUrl+'assets/api/getTrendingProducts.php', httpParams);
    }
  getNewArrivals(tagNum: any, pageNum: any){
    let httpParams= new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum);
    return this.http.post(this.baseUrl+'assets/api/getNewProducts.php', httpParams);
  }
  getTopOffers(tagNum: any, pageNum: any){
    let httpParams= new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum);
    return this.http.post(this.baseUrl+'assets/api/getOfferProducts.php', httpParams);
  }
  verifyURLInject(key: any){
    let httpParams= new HttpParams()
    .append("key",key);
    return this.http.post(this.baseUrl+'assets/api/verifyUrl.php', httpParams);
  }

  getUsercardData(data: any){
   let httpParams= new HttpParams()
   .append("id", data)
   return this.http.post(this.baseUrl+'assets/api/userCardData.php',httpParams);
 }
 getPendingPayCount(data: any){
   let httpParams= new HttpParams()
   .append("id", data)
   return this.http.post(this.baseUrl+'assets/api/pendingPayCount.php',httpParams);
 }
 getShopFollowingCount(data: any){
   let httpParams= new HttpParams()
   .append("id", data)
   return this.http.post(this.baseUrl+'assets/api/shopFollowingCount.php',httpParams);
 }
 getShopName(data: any){
   let httpParams= new HttpParams()
   .append("userId", data)
   return this.http.post(this.baseUrl+'assets/api/shopName.php',httpParams);
 }
 followShopPage(data: any,shopId: any){
   let httpParams= new HttpParams()
   .append("userId", data)
   .append("shopId", shopId);
   return this.http.post(this.baseUrl+'assets/api/followShopPage.php',httpParams);
 }
 unFollowShopPage(data: any,shopId: any){
   let httpParams= new HttpParams()
   .append("userId", data)
   .append("shopId", shopId);
   return this.http.post(this.baseUrl+'assets/api/unFollowShopPage.php',httpParams);
 }
 getSavedCardData(data: any){
   let httpParams= new HttpParams()
   .append("userId", data)
   return this.http.post(this.baseUrl+'assets/api/savedCardData.php',httpParams);
 }
addSellerData(data: Object){
   let httpParams= new HttpParams()
   .append("fullname", data['fullname'])
   .append("reg_email", data['reg_email'])
   .append("reg_mobile_no", data['reg_mobile_no'])
   .append("reg_password", data['reg_password']);
   return this.http.post(this.baseUrl+'assets/api/sellerRegistration.php',httpParams);
 }
addData(data: Object,name: any){
   let httpParams= new HttpParams()
   .append("fullname", data['fullname'])
   .append("reg_address1", data['reg_address1'])
   .append("reg_address2", data['reg_address2'])
   .append("reg_city", data['reg_city'])
   .append("reg_dist", data['reg_dist'])
   .append("reg_state", data['reg_state'])
   .append("reg_country", data['reg_country'])
   .append("reg_pin", data['reg_pin'])
   .append("reg_email", data['reg_email'])
   .append("reg_mobile_no", data['reg_mobile_no'])
   .append("reg_age", data['reg_age'])
   .append("gender", name)
   .append("reg_password", data['reg_password']);
   return this.http.post(this.baseUrl+'assets/api/registration.php',httpParams);
 }
addContact(data: Object){
   let httpParams= new HttpParams()
   .append("name", data['name'])
   .append("email", data['email'])
   .append("phone", data['mobile'])
   .append("remarks", data['remarks'])
   .append("purpose", data['purpose']);
   return this.http.post(this.baseUrl+'assets/api/addContact.php',httpParams);
 }
  dataPostAddProduct: any;


  //checkout popup

  getvariantInfor(id: any) {
    let httpParams = new HttpParams()
      .append("variantid", id);
    return this.http.post(this.baseUrl + 'assets/api/variantinforcheckout.php', httpParams);
  }
  getaddress(data: any) {
    let httpParams = new HttpParams()
      .append("id", data);
    return this.http.post(this.baseUrl + 'assets/api/addresscheckout.php', httpParams);
  }
  getaddressType() {
    return this.http.get(this.baseUrl + 'assets/api/addresstypecheckout.php');
  }
  getbulkDiscount() {
    return this.http.get(this.baseUrl + 'assets/api/bulkdiscountcheckout.php');
  }
  getcustomerOrder() {
    return this.http.get(this.baseUrl + 'assets/api/customerordercheckout.php');
  }
  getorderMessage() {
    return this.http.get(this.baseUrl + 'assets/api/ordermessagecheckout.php');
  }
  getorderstatus() {
    return this.http.get(this.baseUrl + 'assets/api/orderstatuscheckout.php');
  }
  getpurchaseOrder() {
    return this.http.get(this.baseUrl + 'assets/api/purchaseordercheckout.php');
  }
  getproduct(id: any) {
    let httpParams = new HttpParams()
      .append("prodIds", id);
    return this.http.post(this.baseUrl + 'assets/api/productcheckout.php', httpParams);
  }
  getprodCheckout(id: any) {
    let httpParams = new HttpParams()
      .append("prodId", id);
    return this.http.post(this.baseUrl + 'assets/api/prodCheckoutNew.php', httpParams);
  }
  getPolicyAddProduct(id: any) {
    let httpParams = new HttpParams()
      .append("prodid", id);
    return this.http.post(this.baseUrl + 'assets/api/PolicyAddProduct.php', httpParams);
  }
  getuserCheckout(id: any) {
    let httpParams = new HttpParams()
      .append("id", id);
    return this.http.post(this.baseUrl + 'assets/api/userCheckout.php', httpParams);
  }
  getsaveNewAddress(data: any) {
    let httpParams = new HttpParams()
      .append("contact_name", data['contact_name'])
      .append("addr1", data['addr1'])
      .append("addr2", data['addr2'])
      .append("country", data['country'])
      .append("state", data['state'])
      .append("city", data['city'])
      .append("district",data['district'])
      .append("pincode", data['pincode'])
      .append("contact_email", data['contact_email'])
      .append("contact_number", data['contact_number']);
    console.log(httpParams);
    return this.http.post(this.baseUrl + 'assets/api/saveNewAddress.php', httpParams);
  }

getcheckoutFinal(id: any, shippingType) {
    let httpParams = new HttpParams()
      .append("user_id", id)
      .append("shippingType", shippingType);
    return this.http.post(this.baseUrl + 'assets/api/checkoutFinal.php', httpParams);
  }

  getAddressChange(id: any) {
    let httpParams = new HttpParams()
      .append("id",id);
    console.log(httpParams);
    return this.http.post(this.baseUrl + 'assets/api/getAddressChange.php', httpParams);
  }

  getNewAddr(id: any) {
    let httpParams = new HttpParams()
      .append("id",id);
    console.log(httpParams);
    return this.http.post(this.baseUrl + 'assets/api/getNewAddr.php', httpParams);
  }

  getproductstatus() {
    return this.http.get(this.baseUrl + 'assets/api/prodstatuscheckout.php');
  }
  getproductshipprice() {
    return this.http.get(this.baseUrl + 'assets/api/prodshippricecheckout.php');
  }
  getoffer() {
    return this.http.get(this.baseUrl + 'assets/api/offercheckout.php');
  }
  getdataPostAddProduct(data: any) {
    let httpParams = new HttpParams()
      .append("name", data['name'])
      .append("short_desc", data['short_desc'])
      .append("long_desc", data['long_desc'])
      .append("spec", data['spec'])
      .append("shipping_option", data['shipping_option'])
      .append("base_price", data['base_price'])
      .append("bulk_discount_id", data['bulk_discount_id'])
      .append("offer_id", data['offer_id'])
      .append("returning_customer_count", data['returning_customer_count'])
      .append("cmsn_dedtd", data['cmsn_dedtd'])
      .append("shop_id", data['shop_id'])
      .append("category_id", data['category_id'])
      .append("sub_catgry_id", data['sub_catgry_id'])
      .append("active_status", data['active_status'])
      .append("qty_avble", data['qty_avble'])
      .append("safe_qty", data['safe_qty'])
      .append("is_returnable", data['is_returnable'])
      .append("label_id", data['label_id'])
      .append("tags", data['tags'])
      .append("avg_confrmn_time", data['avg_confrmn_time'])
      .append("avg_response_time", data['avg_response_time'])
      .append("avg_prcessing_time", data['avg_prcessing_time'])
      .append("avg_shpping_time", data['avg_shpping_time'])
      .append("auto_cancel_time", data['auto_cancel_time'])
      .append("has_rfq", data['has_rfq'])
      .append("has_gift", data['has_gift'])
      .append("has_order_confmn", data['has_order_confmn'])
      .append("can_orderbydate", data['can_orderbydate'])
      .append("has_instant_buy", data['has_instant_buy'])
      .append("min_order_quant", data['min_order_quant'])
      .append("max_order_quant", data['max_order_quant'])
      .append("shipping_policy", data['shipping_policy'])
      .append("return_policy", data['return_policy'])
      .append("product_policy", data['product_policy'])
      .append("shipping_location_id", data['shipping_location_id'])
      .append("rating", data['rating'])
      .append("rating_count", data['rating_count'])
      .append("review_count", data['review_count'])
      .append("revenue_generated", data['revenue_generated'])
      .append("promo_id", data['promo_id'])
      .append("sold_count", data['sold_count'])
      .append("created_date", data['created_date']);
    return this.http.post(this.baseUrl + 'assets/api/dataPostAddProduct.php', httpParams);
  }
  getsellercart() {
    return this.http.get(this.baseUrl + 'assets/api/sellercart.php');
  }
  getcart(userId: any) {
    let httpParams = new HttpParams()
      .append("userId", userId);
    return this.http.post(this.baseUrl + 'assets/api/cart.php', httpParams);
  }
  getcartCheckout(id: any) {
    let httpParams = new HttpParams()
      .append("id", id);
    return this.http.post(this.baseUrl + 'assets/api/cartCheckout.php', httpParams);
  }
getUser() {
    return this.http.get(this.baseUrl + 'assets/api/bulkdiscountcheckout.php');
  }
  
   getCharts(sellerId: any, scenario: any){
    let httpParams = new HttpParams()
    .append("sellerId",sellerId)
    .append("scenario",scenario);
    return this.http.post(this.baseUrl+'assets/api/getChartData.php', httpParams);
  }

  getSellCount(sellerId: any){
    let httpParams = new HttpParams()
    .append("sellerId",sellerId);
    return this.http.post(this.baseUrl+'assets/api/getSellerCount.php', httpParams);    
  }
  getPurchasCount(sellerId: any){
    let httpParams = new HttpParams()
    .append("sellerId",sellerId);
    return this.http.post(this.baseUrl+'assets/api/getPurchaseData.php', httpParams);
  }
  getNotifyCount(sellerId: any){
    let httpParams = new HttpParams()
    .append("sellerId",sellerId);
    return this.http.post(this.baseUrl+'assets/api/getNotifyDashboard.php', httpParams);
  }

  getListing(catId: any, sKey: any, pin: any, filterSet: any, sortSet: any, tagNum: any, pageNum: any){
    let httpParams = new HttpParams()
    .append("catId",catId)
    .append("key",sKey)
    .append("pin",pin)
    .append("filterSet",filterSet)
    .append("sortSet",sortSet)
    .append("tagNum",tagNum)
    .append("pageNum",pageNum);

    return this.http.post(this.baseUrl+'assets/api/fetchLists.php', httpParams);
  }
  
  // getdataPostAddProduct(data: any) {
  //    let httpParams = new HttpParams()
  //     // .append("prodid", data['prodid'])
  //      .append("name", data['name'])
  //      .append("short_desc", data['short_desc'])
  //     .append("Long_desc", data['Long_desc'])
  //      .append("spec", data['spec'])
  //      .append("shipping_option", data['shipping_option'])
  //      .append("base_price", data['base_price'])
  //      .append("bulk_discount_id", data['bulk_discount_id'])
  //      .append("offer_id", data['offer_id'])
  //     .append("returning_customers_count", data['returning_customers_count'])
  //     .append("product_view_count", data['product_view_count'])
  //      .append("cmsn_dedtd", data['cmsn_dedtd'])
  //      .append("shop_id", data['shop_id'])
  //      .append("category_id", data['category_id'])
  //      .append("sub_catgry_id", data['sub_catgry_id'])
  //      .append("active_status", data['active_status'])
  //      .append("rating_count", data['rating_count'])
  //      .append("review_count", data['review_count'])
  //      .append("revenue_generated", data['revenue_generated'])
  //      .append("promo_id", data['promo_id'])
  //      .append("sold_count", data['sold_count'])
  //     .append("created_date", data['created_date'])
  //     .append("remarks", data['remarks'])
  //     .append("can_upload_image", data['can_upload_image'])
  //     .append("max_no_of_image", data['max_no_of_image'])
  //     .append("add_custom_message_field", data['add_custom_message_field'])

  //     .append("from_time_stamp",data['from_time_stamp'])
  //     .append("to_tme_Stamp",data['to_tme_Stamp'])
  //     .append("percentage",data['percentage'])

  //     .append("quant",data['quant'])
  //     .append("fdiscount",data['fdiscount']);

  //    return this.http.post(this.baseUrl + 'assets/api/dataPostAddProduct.php', httpParams);
  //  }

  getOrderDetailsCheckout(id: any) {
    let httpParams = new HttpParams()
      .append("orderId", id);
    return this.http.post(this.baseUrl + 'assets/api/getOrderDetailsCheckout.php', httpParams);
  }
getdynamicPriceAddProduct(prodid: any) {
    let httpParams = new HttpParams()
      .append("prodid", prodid);
    return this.http.post(this.baseUrl + 'assets/api/getdynamicPriceAddProduct.php', httpParams);
  }

   getdynamicPriceDiscTotalAddProd(prodid: any) {
    let httpParams = new HttpParams()
      .append("prodid", prodid);
    return this.http.post(this.baseUrl + 'assets/api/getdynamicPriceDiscTotalAddProd.php', httpParams);
 }
  
  loadShopList(pincode : any, tagNum : any, pageNum : any){
    let httpParams = new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("pincode",pincode);
    return this.http.post(this.baseUrl + 'assets/api/loadShops.php', httpParams);
  }
  loadFavorites(userId : any, tagNum : any, pageNum : any){
    let httpParams = new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("userId",userId);
    return this.http.post(this.baseUrl + 'assets/api/loadFavShops.php', httpParams);
  }
  loadShopWiseProducts(shopId : any, tagNum : any, pageNum : any, filters : any, sorters : any){
    let httpParams = new HttpParams()
    .append("shopId",shopId)
    .append("tagNum",tagNum)
    .append("pageNum",pageNum).append("filters",filters)
    .append("sort",sorters);
    return this.http.post(this.baseUrl + 'assets/api/loadShopProducts.php', httpParams);
  }
  loadSearchResults(key : any, pincode : any, tagNum : any, pageNum : any, filters : any, sorters : any){
    let httpParams = new HttpParams()
    .append("key",key)
    .append("pincode",pincode)
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("filters",filters)
    .append("sort",sorters);
    return this.http.post(this.baseUrl + 'assets/api/srchQuery.php', httpParams);
  }
  loadCatIdData(catId : any, pincode : any, tagNum : any, pageNum : any, filters : any, sorters : any){
    let httpParams = new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("catId",catId)
    .append("pincode",pincode)
    .append("filters",filters)
    .append("sort",sorters);
    return this.http.post(this.baseUrl + 'assets/api/loadCategory.php', httpParams);
  }
  loadTrending(pincode : any, tagNum : any, pageNum : any, filters : any, sorters : any){
    let httpParams = new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("filters",filters)
    .append("sort",sorters)
    .append("pincode",pincode);
    return this.http.post(this.baseUrl + 'assets/api/loadTrending.php', httpParams);
  }
  loadNewProd(pincode : any, tagNum : any, pageNum : any, filters : any, sorters : any){
    let httpParams = new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("filters",filters)
    .append("sort",sorters)
    .append("pincode",pincode);
    return this.http.post(this.baseUrl + 'assets/api/loadNewProducts.php', httpParams);
  }
  loadOfferProd(pincode : any, tagNum : any, pageNum : any, filters : any, sorters : any){
    let httpParams = new HttpParams()
    .append("tagNum",tagNum)
    .append("pageNum",pageNum)
    .append("filters",filters)
    .append("sort",sorters)
    .append("pincode",pincode);
    return this.http.post(this.baseUrl + 'assets/api/loadTopOffers.php', httpParams);
  }

  addSellerDataStage1(data: Object){
    let httpParams= new HttpParams()
    .append("fullname", data['fullname'])
    .append("reg_email", data['reg_email'])
    .append("reg_mobile_no", data['reg_mobile_no'])
    .append("reg_password", data['reg_password']);
    return this.http.post(this.baseUrl+'assets/api/sellerRegistration.php',httpParams);
  }
 addSellerDataStage2(data: Object,seller_id:any){
  let httpParams= new HttpParams()
  .append("seller_id",seller_id )
  .append("shop_name", data['shop_name'])
  .append("shop_address", data['shop_address'])
  .append("city", data['city'])
 .append("state", data['state'])
  .append("pin", data['pin'])
  .append("main_category", data['main_category']);
  return this.http.post(this.baseUrl+'assets/api/sellerRegistration2.php',httpParams);
 }
 addSellerDataStage3(data: Object){
  let httpParams= new HttpParams()
  .append("id_no", data['id_no'])
  .append("seller_dob", data['seller_dob'])
  .append("seller_id",data['seller_id'])
  .append("id_type", data['id_type']);
  return this.http.post(this.baseUrl+'assets/api/sellerRegistration3.php',httpParams);
 }
 addSellerDataStage4(data: Object){
  let httpParams= new HttpParams()
  .append("ship_city", data['ship_city'])
  .append("checkedValue", data['checkedValue'])
  .append("checkedValue2",data['checkedValue2'])
  .append("country", data['country'])
  .append("state",data['state'])
  .append("district",data['district'])
  .append("city",data['city'])
  .append("accnt_holder_name",data['accnt_holder_name'])
  .append("bank_name",data['bank_name'])
  .append("accnt_type",data['accnt_type'])
  .append("branch",data['branch'])
  .append("accnt_no",data['accnt_no'])
  .append("seller_id",data['seller_id'])
  .append("ifsc",data['ifsc']);
  return this.http.post(this.baseUrl+'assets/api/sellerRegistration4.php',httpParams);
 }
 getSellerData(sellerId : any){
  let httpParams= new HttpParams()
  .append("seller_id", sellerId);
  return this.http.post(this.baseUrl+'assets/api/getSellerData.php',httpParams);
 }
 getCategorylist(){
  return this.http.get(this.baseUrl+'assets/api/getCategoryList.php');
 }
 getIdCardlist(){
  return this.http.get(this.baseUrl+'assets/api/getIdCardlist.php');
 }
 getlocationlist(pincode :any){
  let httpParams= new HttpParams()
  .append("pincode",pincode );
  return this.http.post(this.baseUrl+'assets/api/getLocationList.php',httpParams);
 }
  
    getFaqSiteFiltered(data: any) {
    let httpParams = new HttpParams()
      // .append("sellerId", data)
      .append("numberFaq", data['number_faq'])
      .append("filterFaq", data['filterFaq'])

    return this.http.post(this.baseUrl + 'assets/api/faqsitefiltered.php', httpParams);
  }
  getFaqSiteSubmit(data: any) {
    let httpParams = new HttpParams()
      // .append("sellerId", data)
      .append("submitFaq", data['submitFaq'])

    return this.http.post(this.baseUrl + 'assets/api/faqsitesubmit.php', httpParams);
  }
  getFaqProductFiltered(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
    .append("numberFaq", data['number_faq'])
    .append("filterFaq", data['filterFaq'])

    return this.http.post(this.baseUrl + 'assets/api/faqproductfiltered.php', httpParams);	
  }
  getFaqProductSubmit(data: any) {
    let httpParams = new HttpParams()
    .append("prodId", data['prod_id'])
    .append("submitFaq", data['submitFaq'])

    return this.http.post(this.baseUrl + 'assets/api/faqproductsubmit.php', httpParams);	
  }
  getFaqShopFiltered(data: any) {
    let httpParams = new HttpParams()
    .append("shopId", data['shop_id'])
    .append("numberFaq", data['number_faq'])
    .append("filterFaq", data['filterFaq'])

    return this.http.post(this.baseUrl + 'assets/api/faqshopfiltered.php', httpParams);	
  }
  getFaqShopSubmit(data: any) {
    let httpParams = new HttpParams()
    .append("shopId", data['shop_id'])
    .append("submitFaq", data['submitFaq'])

    return this.http.post(this.baseUrl + 'assets/api/faqshopsubmit.php', httpParams);	
  }

  sendVerifyMail(data: any){
    let httpParams= new HttpParams()
    .append("email", data);
    return this.http.post(this.baseUrl+'assets/api/sendVerifyMail.php',httpParams);
  }
  
  getvariantInfor(id: any) {
     let httpParams = new HttpParams()
      .append("prodid", id);
     return this.http.post(this.baseUrl + 'assets/api/variantinforcheckout.php', httpParams);
   }

 getaddress(data: any) {
    let httpParams = new HttpParams()
      .append("id", data);
    return this.http.post(this.baseUrl + 'assets/api/addresscheckout.php', httpParams);
  }

getPurchaseOrderDateReqOrderCheckout(orderid: any) {
   let httpParams = new HttpParams()
      .append("orderid", orderid);
    return this.http.post(this.baseUrl + 'assets/api/getPurchaseOrderDateReqOrderCheckout.php', httpParams);
 }
  getMsgTitleProCheckout(prodid: any) {
    let httpParams = new HttpParams()
     .append("prodid", prodid);
    return this.http.post(this.baseUrl + 'assets/api/getMsgTitleProCheckout.php', httpParams);
  }

getCustomerOrderCheckout(orderid: any) {
     let httpParams = new HttpParams()
     .append("orderid", orderid);
    return this.http.post(this.baseUrl + 'assets/api/getCustomerOrderCheckout.php', httpParams);
   }

getOrderDetailsCheckout(orderid: any) {
     let httpParams = new HttpParams()
      .append("orderid", orderid);
     return this.http.post(this.baseUrl + 'assets/api/getOrderDetailsCheckout.php', httpParams);
   }
  // deleteCart(id: number) {
  //     const i = this.DataService.findIndex(d => )
  // }
}

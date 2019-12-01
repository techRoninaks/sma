import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

  baseUrl = "";
  // baseUrl = "http://localhost/Angular/sma24/src/";

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
      .append("imageUCount", data['imageUCount'])
      .append("pin", data['pin'])

      .append("image0", data['image0'])
      .append("image1", data['image1'])
      .append("image2", data['image2'])
      .append("image3", data['image3'])
      .append("image4", data['image4'])
      .append("image5", data['image5'])
      .append("image6", data['image6'])
      .append("image7", data['image7'])
      .append("image8", data['image8'])
      .append("image9", data['image9'])

      .append("imageU0", data['imageU0'])
      .append("imageU1", data['imageU1'])
      .append("imageU2", data['imageU2'])
      .append("imageU3", data['imageU3'])
      .append("imageU4", data['imageU4'])
      .append("imageU5", data['imageU5'])
      .append("imageU6", data['imageU6'])
      .append("imageU7", data['imageU7'])
      .append("imageU8", data['imageU8'])
      .append("imageU9", data['imageU9'])

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
      .append("pin", data['pin'])


    return this.http.post(this.baseUrl + 'assets/api/pricingcart.php', httpParams);
  }
  getRfqInputs(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/rfqprods.php', httpParams);
  }
  getRfqAddress(data: any) {
    let httpParams = new HttpParams()
      .append("userId", data)
    return this.http.post(this.baseUrl + 'assets/api/rfqaddress.php', httpParams);
  }
 getPriceDate(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("pin",data['pin'])
      .append("productQuantity",data['prod_quantity'])
      .append("deliveryOption",data['del_option'])
      .append("productVariant",data['productVariant'])

      return this.http.post(this.baseUrl + 'assets/api/pricedategetter.php', httpParams);
  }
//   sendRfq(data :any) {
//     let httpParams = new HttpParams()
//       .append("prodId", data['prod_id'])
//       .append("hasImage", data['imageUploadedRfq'])
//       .append("userId", data['user_id'])
//       .append("shopLocation", data['shop_location'])
//       .append("note", data['note'])
//       .append("productRef", data['product_ref'])
//       .append("image", data['image'])
//       .append("sellerId", data['seller_identity'])
//       .append("shopId", data['shop_id'])
//       .append("shopName", data['shop_name'])

//     return this.http.post(this.baseUrl + 'assets/api/rfqadd.php', httpParams);
//   }
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
    .append("prodId",data['prod_id'])
    .append("shopId",data['shop_id'])
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
	// .append("shopId", data)
        .append("sellerId", data)
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
  updateTransaction(data: Object){
    let httpParams= new HttpParams()
    .append("txnid", data['txnid'])
    .append("prodname", data['prodname'])
    .append("orderId", data['orderId']);
    return this.http.post(this.baseUrl+'assets/api/updateTransaction.php',httpParams);
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
    return this.http.post(this.baseUrl+'assets/api/changePassword.php',httpParams);
  }

//   deleteCartProductfn(id: any, userId: any, prodid:any , quantity){
//     let httpParams = new HttpParams()
//     .append("id",id)
//     .append("user_id",userId)
//     .append("prodid",prodid)
//     .append("quantity",quantity);
//     return this.http.post(this.baseUrl+'assets/api/deleteCartProduct.php',httpParams);
//   }
  
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
  getsaveNewAddress(data: any, orderid) {
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
      .append("mapping_id", orderid)
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
  getsellercart() {
    return this.http.get(this.baseUrl + 'assets/api/sellercart.php');
  }
  getcart(userId: any) {
    let httpParams = new HttpParams()
      .append("userId", userId);
    return this.http.post(this.baseUrl + 'assets/api/cart.php', httpParams);
  }
  // getcartCheckout(id: any) {
  //   let httpParams = new HttpParams()
  //     .append("id", id);
  //   return this.http.post(this.baseUrl + 'assets/api/cartCheckout.php', httpParams);
  // }
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
 addSellerDataStage2(data: Object,seller_id:any,gst_no:any)
  {  
    let httpParams= new HttpParams()  
    .append("seller_id",seller_id )  
    .append("gst_no",gst_no )  
    .append("shop_name", data['shop_name'])  
    .append("shop_address", data['shop_address'])  
    .append("city", data['city'])  
    .append("state", data['state'])  
    .append("pin", data['pin'])  
    .append("main_category", data['main_category'])  
    .append("main_category1", data['main_category1'])  
    .append("main_category2", data['main_category2']);  
    return this.http.post(this.baseUrl+'assets/api/ sellerRegistration2.php',httpParams); 
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
      .append("userid",id["userid"])
      .append("prodid", id["prodid"]);
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

// getCustomerOrderCheckout(orderid: any) {
//      let httpParams = new HttpParams()
//      .append("orderid", orderid);
//     return this.http.post(this.baseUrl + 'assets/api/getCustomerOrderCheckout.php', httpParams);
//    }

getOrderDetailsCheckout(userId: any) {
  let httpParams = new HttpParams()
  .append("userId", userId)
  return this.http.post(this.baseUrl + 'assets/api/getOrderDetailsCheckout.php', httpParams);
}
  sendRfq(data :any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("imageUploaded", data['imageUploadedRfq'])
      .append("imageRUCount", data['imageRUCount'])
      .append("userId", data['user_id'])
      .append("shopLocation", data['shop_location'])
      .append("note", data['note'])
      .append("productRef", data['product_ref'])
      .append("image0", data['image0'])
      .append("image1", data['image1'])
      .append("image2", data['image2'])
      .append("imageRU0", data['imageRU0'])
      .append("imageRU1", data['imageRU1'])
      .append("imageRU2", data['imageRU2'])
      .append("sellerId", data['seller_identity'])
      .append("shopId", data['shop_id'])
      .append("shopName", data['shop_name'])

    return this.http.post(this.baseUrl + 'assets/api/rfqadd.php', httpParams);
  }

  categoryShop(data: any) {
    let httpParams = new HttpParams()
    return this.http.post(this.baseUrl + 'assets/api/categshoplist.php', httpParams);
  }

  categoryListShop(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/categorylistshop.php', httpParams);
  }

  getAddressShop(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/getaddressshop.php', httpParams);
  }
shopAddressUpload(data :any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("sellerId", data['seller_id'])
      .append("shopNameId", data['shopNameId'])
      .append("addr2ShopId", data['addr2ShopId'])
      .append("cityShopId", data['cityShopId'])
      .append("districtShopId", data['districtShopId'])
      .append("stateShopId", data['stateShopId'])
      .append("countryShopId", data['countryShopId'])
      .append("pincodeShopId", data['pincodeShopId'])
      .append("categ", data['categ'])

    return this.http.post(this.baseUrl + 'assets/api/shopaddressupload.php', httpParams);
  }
  uploadShopCover(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("image", data['image'])
    return this.http.post(this.baseUrl + 'assets/api/uploadshopcover.php', httpParams);
  }
  uploadShopLogo(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("image", data['image'])
    return this.http.post(this.baseUrl + 'assets/api/uploadshoplogo.php', httpParams);
  }
  
  uploadFront(data: Object){
    let httpParams = new HttpParams()
    .append("sellerId", data['seller_id'])
    .append("image",data['image']);
    return this.http.post(this.baseUrl+'assets/api/idFrontUpload.php', httpParams);
  }
  uploadBack(data: Object){
    let httpParams = new HttpParams()
    .append("sellerId", data['seller_id'])
    .append("image",data['image']);
    return this.http.post(this.baseUrl+'assets/api/idBackUpload.php', httpParams);
	 }
  updateStage4(data: any){
    let httpParams = new HttpParams()
    .append("sellerId", data)
    return this.http.post(this.baseUrl+'assets/api/updateStage4.php', httpParams);
  }
  updateStage5(data: any){
    let httpParams = new HttpParams()
    .append("sellerId", data)
    return this.http.post(this.baseUrl+'assets/api/updateStage5.php', httpParams);
  }
  updateStage6(data: any){
    let httpParams = new HttpParams()
    .append("sellerId", data)
    return this.http.post(this.baseUrl+'assets/api/updateStage6.php', httpParams);
  }

updateSellerPlanFree(data: any){
  let httpParams= new HttpParams()
  .append("seller_id", data)
  return this.http.post(this.baseUrl+'assets/api/updatePlanFree.php',httpParams);
 }
 updateSellerPlanBasic(data: any){
  let httpParams= new HttpParams()
  .append("seller_id", data)
  return this.http.post(this.baseUrl+'assets/api/updatePlanBasic.php',httpParams);
 }
 updateSellerPlanPremium(data: any){
  let httpParams= new HttpParams()
  .append("seller_id", data)
  return this.http.post(this.baseUrl+'assets/api/updatePlanPremium.php',httpParams);
 }
 updateSellerPlanPlus(data: any){
  let httpParams= new HttpParams()
  .append("seller_id", data)
  return this.http.post(this.baseUrl+'assets/api/updatePlanPlus.php',httpParams);
 }
  
    insertCartProCus(data: any) {
    let httpParams = new HttpParams()
      .append("userId", data['userId'])
      .append("prodid", data['prodid'])
      .append("quantity", data['quantity'])
      .append("variants_chosen", data['variants_chosen'])
      .append("gift_address", data['gift_address'])
      .append("gift_note", data['gift_note'])
      .append("total_price", data['total_price'])
      .append("discount", data['discount'])
      .append("variant_price", data['variant_price'])
      .append("has_image", data['has_image'])
      .append("delivery_date", data['delivery_date'])
      .append("require_delivery_date", data['require_delivery_date'])
      .append("is_ordered", data['is_ordered'])
      .append("varients_choosen", data['varients_choosen'])
      .append("gift_title", data['gift_title'])
      .append("gift_option", data['gift_option'])
      .append("varient_price", data['varient_price']);
    return this.http.post(this.baseUrl + 'assets/api/insertCartProCus.php', httpParams);
  }
  
    deliverAddrCart(userId: any) {
    let httpParams = new HttpParams()
      .append("userId", userId);
    return this.http.post(this.baseUrl + 'assets/api/deliverAddrCart.php', httpParams);
  }
  
    checkUndeliverable(data: any){
    let httpParams = new HttpParams()
      .append("pin",data['pin'])
      .append("shipId",data['ship_id'])
      .append("prodId",data['prod_id'])
      return this.http.post(this.baseUrl + 'assets/api/undeliverable.php', httpParams);
  }
  
  getMainCategoryAddProduct(parentid: any) {
    let httpParams = new HttpParams()
      .append("parentid", parentid);
    return this.http.post(this.baseUrl + 'assets/api/getMainCategoryAddProduct.php', httpParams);
  }
  
  getCategoryAddProduct(id: any) {
    let httpParams = new HttpParams()
      .append("id", id);
    return this.http.post(this.baseUrl + 'assets/api/getCategoryAddProduct.php', httpParams);
  }
  
   getSubCategoryAddProduct(id: any) {
    let httpParams = new HttpParams()
      .append("id", id);
    return this.http.post(this.baseUrl + 'assets/api/getSubCategoryAddProduct.php', httpParams);
  }

  getSubCategorySearch(id: any, searchTerm: any) {
    let httpParams = new HttpParams()
      .append("id", id)
      .append("searchTerm", searchTerm);
    return this.http.post(this.baseUrl + 'assets/api/getSubCategorySearch.php', httpParams);
  }
  createNewSubCategory(id: any, newTerm: any) {
    let httpParams = new HttpParams()
      .append("id", id)
      .append("newTerm", newTerm);
    return this.http.post(this.baseUrl + 'assets/api/createNewSubCategory.php', httpParams);
  }
  createNewMidSubCategory(id: any, newTerm: any) {
    let httpParams = new HttpParams()
      .append("id", id)
      .append("newTerm", newTerm);
    return this.http.post(this.baseUrl + 'assets/api/addNewMidCategory.php', httpParams);
  }
  getProductInfor(id: any, sellerId: any) {
    let httpParams = new HttpParams()
      .append("id", id)
      .append("sellerid", sellerId);
    return this.http.post(this.baseUrl + 'assets/api/getProductInfor.php', httpParams);
  }
  getTaxFromSetting() {
    return this.http.get(this.baseUrl + 'assets/api/getTaxFromSetting.php');
  }
  
  popUpLogin(email: any,password :any){
    let httpParams= new HttpParams()
    .append("login_email", email)
    .append("login_password", password);
    return this.http.post(this.baseUrl+'assets/api/popUplogin.php',httpParams);
  }
  deleteVariantEditProduct(variant: any,prodid :any){
    let httpParams= new HttpParams()
    .append("variant", variant)
    .append("prodid", prodid);
    return this.http.post(this.baseUrl+'assets/api/deleteVariantEditProduct.php',httpParams);
  }

  updateUserData(data: any,userId: any){
    let httpParams= new HttpParams()
    .append("userId",userId)
    .append("fullname", data['fullname'])
    .append("reg_address1", data['reg_address1'])
    .append("reg_city", data['reg_city'])
    .append("reg_dist", data['reg_dist'])
    .append("reg_state", data['reg_state'])
    .append("reg_country", data['reg_country'])
    .append("reg_pin", data['reg_pin'])
    .append("reg_email", data['reg_email'])
    .append("reg_mobile_no", data['reg_mobile_no']);
    return this.http.post(this.baseUrl+'assets/api/updateUserData.php',httpParams);
  }
  
   getDirectPickupSellerDetails(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data)
    return this.http.post(this.baseUrl + 'assets/api/directpickupseller.php', httpParams);
  }
  
  getLikesDislikesShop(data: any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      .append("userId", data['user_id'])
    return this.http.post(this.baseUrl + 'assets/api/likedislikereviewshop.php', httpParams);
  }

  getLikesDislikes(data: any) {
    let httpParams = new HttpParams()
      .append("prodId", data['prod_id'])
      .append("userId", data['user_id'])
    return this.http.post(this.baseUrl + 'assets/api/likedislikereviewproduct.php', httpParams);
  }
  postOffersAddProduct(data: any, prodid : any = "all") {
    let httpParams = new HttpParams()
      .append("dateDrom", data['from_time_stamp'])
      .append("dateTo", data['to_tme_Stamp'])
      .append("prodid", prodid)
      .append("percentage", data['percentage'])
    return this.http.post(this.baseUrl + 'assets/api/addOffersAddProduct.php', httpParams);
  }
  getdataPostAddProduct(data: any, prodid : any = "all") {
     let httpParams = new HttpParams()
     // .append("image", data['image'])
       .append("image1", data['image1'])
       .append("image2", data['image2'])
       .append("image3", data['image3'])
       .append("image4", data['image4'])
       .append("image5", data['image5'])
       .append("image6", data['image6'])
       .append("image7", data['image7'])
       .append("image8", data['image8'])
       .append("image9", data['image9'])
       .append("image10", data['image10'])
       .append("title", data['title'])
       .append("name", data['name'])
       .append("short_desc", data['short_desc'])
       .append("Long_desc", data['Long_desc'])
       .append("spec", data['spec'])
       .append("shipping_option", data['shipping_option'])
       .append("base_price", data['base_price'])
       .append("bulk_discount_id", data['bulk_discount_id'])
       .append("offer_id", data['offer_id'])
       .append("sellerid", data['sellerid'])
       .append("active_status", data['active_status'])
       .append("qty_avble", data['qty_avble'])
       .append("tags", data['tags'])
       .append("avg_prcessing_time", data['avg_prcessing_time'])
       .append("avg_shpping_time", data['avg_shpping_time'])
       .append("auto_cancel_time", data['auto_cancel_time'])
       .append("has_rfq", data['has_rfq'])
       .append("has_gift", data['has_gift'])
       .append("has_order_confmn", data['has_order_confmn'])
       .append("can_upload_image", data['can_upload_image'])
       .append("can_orderbydate", data['can_orderbydate'])
       .append("has_instant_buy", data['has_instant_buy'])
       .append("max_no_of_image", data['max_no_of_image'])
       .append("min_order_quant", data['min_order_quant'])
       .append("max_order_quant", data['max_order_quant'])
       .append("shipping_policy", data['shipping_policy'])
       .append("return_policy", data['return_policy'])
       .append("return_policy", data['return_policy'])
       .append("product_policy", data['product_policy'])
       .append("quantity_price", data['quantity_price'])
       .append("labels", data['labels'])
       .append("shippingArray", data['shippingArray'])
       .append("varinetSelect", data['varinetSelect'])
       .append("titleSelect", data['titleSelect'])
       .append("discountArraySelect", data['discountArraySelect'])
       .append("add_custom_message_field", data['add_custom_message_field'])
       .append("caller", data['caller'])
       .append("faqArray", data['faqArray'])
       .append("mainCat", data['mainCat'])
       .append("subCat", data['subCat'])
       .append("prodid", prodid)
       .append("commDec", data['commDec'])
       .append("price", data['price']);
     return this.http.post(this.baseUrl + 'assets/api/dataPostAddProduct.php', httpParams);
   }
  
  // addComplaintData(data: Object,userId:any){
  //   let httpParams= new HttpParams()
  //  .append("userId", userId)
  //  .append("userName", data['username'])
  //  .append("note", data['complaint_desc']);
  //  return this.http.post(this.baseUrl+'assets/api/addComplaintData.php',httpParams);
  // }
  uploadIdcardimage(imageFront: any,imageBack:any, sellerid: any){
    let httpParams= new HttpParams()
   .append("imageFront", imageFront)
   .append("imageBack", imageBack)
   .append("sellerid", sellerid);
   return this.http.post(this.baseUrl+'assets/api/uploadIdcardimage.php',httpParams);
  }
  getSubCatForProductEdit(sub){
    let httpParams= new HttpParams()
   .append("sub", sub);
   return this.http.post(this.baseUrl+'assets/api/getSubCatForProductEdit.php',httpParams);
  }


addCardData(data1: Object,data2:Object,userId:any,userName:any){
  let httpParams= new HttpParams()
  .append("userName", userName)
  .append("userId", userId)
  .append("cardNo", data1['cardno'])
  .append("validity", data2['date'])
  .append("cvv", data2['cvv']);
  return this.http.post(this.baseUrl+'assets/api/addCardData.php',httpParams);
 }

deleteCardData(userId: any,cardNo: any){
  let httpParams= new HttpParams()
  .append("cardNo", cardNo)
  .append("userId", userId);
  return this.http.post(this.baseUrl+'assets/api/deleteCardData.php',httpParams);
 }
 deleteUserAddress(addressId:any){
  let httpParams= new HttpParams()
    .append("addressId", addressId)
    return this.http.post(this.baseUrl+'assets/api/deleteUserAddressData.php',httpParams);
 }
 getOfferLimit(sellerid:any){
  let httpParams= new HttpParams()
    .append("sellerid", sellerid)
    return this.http.post(this.baseUrl+'assets/api/getOfferLimit.php',httpParams);
 }
getOrderData(data: any){
  let httpParams= new HttpParams()
  .append("userId", data)
  return this.http.post(this.baseUrl+'assets/api/orderData.php',httpParams);
 }
getUserAddressData(userId: any){
  let httpParams= new HttpParams()
  .append("userId", userId)
  return this.http.post(this.baseUrl+'assets/api/userAddressData.php',httpParams);
 }
addUserAddressData(userId: any,userName:any,data: Object){
  let httpParams= new HttpParams()
  .append("userName", userName)
  .append("city", data['city'])
  .append("country", data['country'])
  .append("pin", data['pin'])
  .append("email", data['email'])
  .append("mobile", data['mobile'])
  .append("state", data['state'])
  .append("userId", userId);
  return this.http.post(this.baseUrl+'assets/api/addUserAddressData.php',httpParams);
 }
uploadImage1(data: Object){
    let httpParams = new HttpParams()
    .append("userId", data['user_id'])
    .append("image",data['image']);
    return this.http.post(this.baseUrl+'assets/api/image1Upload.php', httpParams);
  }
  uploadImage2(data: Object){
    let httpParams = new HttpParams()
    .append("userId", data['user_id'])
    .append("image",data['image']);
    return this.http.post(this.baseUrl+'assets/api/image2Upload.php', httpParams);
  }
  uploadImage3(data: Object){
    let httpParams = new HttpParams()
    .append("userId", data['user_id'])
    .append("image",data['image']);
    return this.http.post(this.baseUrl+'assets/api/image3Upload.php', httpParams);
  }
  
  checkCurrentPassword(mobile: any,currentPassword:any,newPassword:any){
  let httpParams= new HttpParams()
  .append("mobile",mobile )
  .append("newPassword",newPassword )
  .append("currentPassword",currentPassword );
  return this.http.post(this.baseUrl+'assets/api/checkCurrentPassword.php',httpParams);
 }

 getShopDetailsSettings(id : any){
  let httpParams= new HttpParams()
  .append("seller_id",id );
  return this.http.post(this.baseUrl+'assets/api/getShopDetailsSetting.php',httpParams);
 }

 updateShopDetailsSettings(data : Object){
  let httpParams= new HttpParams()
  .append("seller_id",data['seller_id'])
  .append("name",data['shopname'])
  .append("email",data['email'])
  .append("phone",data['phone'])
  .append("gst",data['gst'])
  .append("address",data['address'])
  .append("imageMain",data['imageMain'])
  .append("imageProductOne",data['imageProductOne'])
  .append("imageProductTwo",data['imageProductTwo'])
  .append("imageProductThree",data['imageProductThree'])
  .append("category",data['category']);
  return this.http.post(this.baseUrl+'assets/api/uploadShopDetailsSetting.php',httpParams);
 }
 updateOwnerDetailsSettings(data : Object){
  let httpParams= new HttpParams()
  .append("seller_id",data['seller_id'])
  .append("name",data['name'])
  .append("email",data['email'])
  .append("phone",data['phone'])
  .append("gst",data['gst'])
  .append("owneridtype",data['owneridtype'])
  .append("owneridno",data['owneridno'])
  .append("ownerdob",data['ownerdob']);
  return this.http.post(this.baseUrl+'assets/api/uploadOwnerDetails.php',httpParams);
 }

 updatePaymentDetailsSettings(data : Object){
  let httpParams= new HttpParams()
  .append("seller_id",data['seller_id'])
  .append("shippingform",data['shippingform'])
  .append("shippingmode",data['shippingmode'])
  .append("accountholder",data['accountholder'])
  .append("accounttype",data['accounttype'])
  .append("accountno",data['accountno'])
  .append("ifsc",data['ifsc'])
  .append("shippingLoc",data['shippingLoc'])
  .append("bankname",data['bankname']);
  return this.http.post(this.baseUrl+'assets/api/uploadPaymentDetails.php',httpParams);
 }

 updateAdvancedDetailsSettings(data : Object){
 let httpParams= new HttpParams()
 .append("seller_id",data['seller_id'])
 .append("responseInput",data['responseInput'])
 .append("processInput",data['processInput'])
 .append("cancellInput",data['cancellInput'])
 .append("giftInput",data['giftInput'])
 .append("deliver_by_date",data['deliver_by_date'])
 .append("rfq",data['rfq'])
 .append("order_confirmation",data['order_confirmation']);
 return this.http.post(this.baseUrl+'assets/api/uploadAdvancedDetails.php',httpParams);
}

uploadShippingLocations(data : Object){
 let httpParams= new HttpParams()
 .append("sellerId",data['sellerId'])
 .append("primaryArea",data['primaryArea'])
 .append("SecondaryArea",data['SecondaryArea']);
 return this.http.post(this.baseUrl+'assets/api/uploadShippingLocations.php',httpParams);
}
deleteLocation(id){
 let httpParams= new HttpParams()
 .append("SecondaryArea",id);
 return this.http.post(this.baseUrl+'assets/api/deleteLocation.php',httpParams);
}
updateShippingLocation(data : Object){
 let httpParams= new HttpParams()
 .append("sellerId",data['sellerId'])
 .append("primaryArea",data['primaryArea'])
 .append("id",data['shop_id'])
 .append("SecondaryArea",data['SecondaryArea']);
 return this.http.post(this.baseUrl+'assets/api/updateShippingLocation.php',httpParams);
}

getShippingLocationSettings(id : any){
 let httpParams= new HttpParams()
 .append("seller_id",id);
 return this.http.post(this.baseUrl+'assets/api/getShippingLocations.php',httpParams);
}
getDropdownForShipping(id : any){
 let httpParams= new HttpParams()
 .append("shipping_alias",id);
 return this.http.post(this.baseUrl+'assets/api/getDropdownForShipping.php',httpParams);
}
addProductVarients(data : any, prodId = "all"){
 let httpParams= new HttpParams()
 .append("prodid", prodId)
 .append("variantArray",data);
 return this.http.post(this.baseUrl+'assets/api/addProductVarients.php',httpParams);
}

getCategoryForSetting(){
  return this.http.get(this.baseUrl+'assets/api/getCategoryForSetting.php');
}
  
  getIndividualOrderDataPrev(orderid: any){
let httpParams= new HttpParams()
.append("orderid", orderid)
return this.http.post(this.baseUrl+'assets/api/sellerOrderDataPrev.php',httpParams);
}
getIndividualOrderData(data: any){
let httpParams= new HttpParams()
.append("id", data)
return this.http.post(this.baseUrl+'assets/api/sellerOrderData.php',httpParams);
}
getOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/orderDataSeller.php',httpParams);
}
getAllOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/allOrderDataSeller.php',httpParams);
}
getAllOrderUser(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/allOrderDataUser.php',httpParams);
}
getOrderDataSellerPrev(orderid: any){
let httpParams= new HttpParams()
.append("orderid", orderid)
return this.http.post(this.baseUrl+'assets/api/orderDataSellerPrev.php',httpParams);
}
updateStatus(stageDate: any,stageName: any,orderIdShort: any){
let httpParams = new HttpParams()
.append("stageDate", stageDate)
.append("stageName",stageName)
.append("orderIdShort",orderIdShort);
return this.http.post(this.baseUrl+'assets/api/updateStatus.php', httpParams);
}
updateCancelStatus(stageDate: any,stageName: any,orderIdShort: any,cancelReason: any){
let httpParams = new HttpParams()
.append("cancelReason", cancelReason)
.append("stageDate", stageDate)
.append("stageName",stageName)
.append("orderIdShort",orderIdShort);
return this.http.post(this.baseUrl+'assets/api/updateCancelStatus.php', httpParams);
}
updateLink(track_link: any,orderIdShort:any){
let httpParams = new HttpParams()
.append("orderIdShort", orderIdShort)
.append("track_link", track_link);
return this.http.post(this.baseUrl+'assets/api/updateLink.php', httpParams);
}
uploadImageShipped(data: Object){
let httpParams = new HttpParams()
.append("orderId", data['orderId'])
.append("image",data['image']);
return this.http.post(this.baseUrl+'assets/api/imageShippedUpload.php', httpParams);
}
uploadImageDelivered(data: Object){
let httpParams = new HttpParams()
.append("orderId", data['orderId'])
.append("image",data['image']);
return this.http.post(this.baseUrl+'assets/api/imageDeliveredUpload.php', httpParams);
}
uploadImageClosed(data: Object){
let httpParams = new HttpParams()
.append("orderId", data['orderId'])
.append("image",data['image']);
return this.http.post(this.baseUrl+'assets/api/imageClosedUpload.php', httpParams);
}

getLabelForProduct(){
  return this.http.get(this.baseUrl+'assets/api/getLabelsForProducts.php');
}
getTagsForProduct(id, prodid: any = "none"){
  let httpParams = new HttpParams()
.append("id",id)
.append("prodid",prodid);
  return this.http.post(this.baseUrl+'assets/api/getAllTags.php', httpParams);
}
getAllCategoriesProduct(){
  return this.http.get(this.baseUrl+'assets/api/getAllCategoriesProduct.php');
}
getShippingLocationAddProduct(id){
  let httpParams= new HttpParams()
 .append("seller_id",id);
  return this.http.post(this.baseUrl+'assets/api/getShippingLocationAddProduct.php' , httpParams);
}
getShippingLocationEditProduct(id, prodid){
  let httpParams= new HttpParams()
 .append("seller_id",id)
 .append("prodid",prodid);
  return this.http.post(this.baseUrl+'assets/api/getShippingLocationEditProduct.php' , httpParams);
}

getTitleForAddproduct(id){
  let httpParams= new HttpParams()
 .append("id",id);
  return this.http.post(this.baseUrl+'assets/api/getTitleForAddproduct.php' , httpParams);
}

getDiscountDay(id){
  let httpParams= new HttpParams()
 .append("id",id);
  return this.http.post(this.baseUrl+'assets/api/getDiscountDay.php' , httpParams);
}

getShippingLocationProductEdit(id){
  let httpParams= new HttpParams()
 .append("id",id);
  return this.http.post(this.baseUrl+'assets/api/getShippingLocationProductEdit.php' , httpParams);
}

getCategoryVariantList(categoryid){
  let httpParams= new HttpParams()
 .append("categoryid",categoryid);
  return this.http.post(this.baseUrl+'assets/api/getCategoryVariantList.php' , httpParams);
}

getFaqForProductEdit(id){
  let httpParams= new HttpParams()
 .append("id",id);
  return this.http.post(this.baseUrl+'assets/api/getFaqForProductEdit.php' , httpParams);
}
getVaritentInfo(id){
  let httpParams= new HttpParams()
 .append("id",id);
  return this.http.post(this.baseUrl+'assets/api/getVaritentInfo.php' , httpParams);
}

getAutoShippingLocation(id){
  let httpParams= new HttpParams()
 .append("searchTerm",id);
  return this.http.post(this.baseUrl+'assets/api/getAutoShippingLocation.php' , httpParams);
}
  
getNotifications(data: any){

  let httpParams= new HttpParams()
  .append("userId", data)
  return this.http.post(this.baseUrl+'assets/api/getNotifications.php',httpParams);
}

  //********  MSG TS starts  *********
  getAdmin() {
    return this.http.get(this.baseUrl + 'assets/api/Admin.php');
  }
  getBuyer() {
    return this.http.get(this.baseUrl + 'assets/api/Buyer.php');
  }
  getSeller() {
    return this.http.get(this.baseUrl + 'assets/api/Seller.php');
  }
  makethread(Buyerid:any,Sellerid:any,buyer:any,seller:any){
    console.log(Buyerid,Sellerid,buyer,seller);
    let httpParams = new HttpParams()
    .append("Buyerid", Buyerid)
    .append("Sellerid", Sellerid)
    .append("buyer", buyer)
    .append("seller", seller);
    return this.http.post(this.baseUrl+'assets/api/makethread.php', httpParams);
  }
  makethread1(myid:any,Sellerid:any,buyer:any,seller:any){
    console.log(myid,Sellerid,buyer,seller);
    let httpParams = new HttpParams()
    .append("Buyerid",myid)
    .append("Sellerid", Sellerid)
    .append("buyer", buyer)
    .append("seller", seller)
    return this.http.post(this.baseUrl+'assets/api/makethread.php', httpParams);
  }
  makethread_msg(myid:any,receiverid:any,mytype:any,receivertype:any){
    console.log(myid,receiverid,mytype,receivertype);
    let httpParams = new HttpParams()
    .append("Buyerid",myid)
    .append("Sellerid",receiverid)
    .append("buyer",mytype)
    .append("seller",receivertype)
    return this.http.post(this.baseUrl+'assets/api/makethread.php', httpParams);
  }
  disp_rfq(threadid: any){
  let httpParams= new HttpParams()
  .append("threadid", threadid)
  return this.http.post(this.baseUrl+'assets/api/rfqmsg.php',httpParams);
 }
 msgsent(msg: any,threadid: any,Buyerid: any,sender_type: any){
  let httpParams= new HttpParams()
  .append("msg", msg)
  .append("threadid", threadid)
  .append("Buyerid", Buyerid)
  .append("sender_type", sender_type)
  console.log(msg,threadid,Buyerid,sender_type);
  return this.http.post(this.baseUrl+'assets/api/chatin.php',httpParams);
 }
 msgsent1(msg: any,threadid: any,Buyerid: any,sender_type: any){
  let httpParams= new HttpParams()
  .append("msg", msg)
  .append("threadid", threadid)
  .append("Buyerid", Buyerid)
  .append("sender_type", sender_type)
  console.log(msg,threadid,Buyerid,sender_type);
  return this.http.post(this.baseUrl+'assets/api/chatin.php',httpParams);
 }
 msgsent_msg(msg: any, threadid:any ,receiverid:any, receivertype:any){
  let httpParams= new HttpParams()
  .append("msg", msg)
  .append("threadid", threadid)
  .append("Senderid", receiverid)
  .append("sender_type", receivertype)
  console.log(msg,threadid,receiverid,receivertype);
  return this.http.post(this.baseUrl+'assets/api/chat_msg.php',httpParams);
 }
 fetchrfqmsg(threadid: any){
  let httpParams= new HttpParams()
  .append("threadid", threadid)
  return this.http.post(this.baseUrl+'assets/api/fetchrfqmsg.php',httpParams);
 }
 rfqsubmition(order_no: any,buyer_name:any,location:any,product_name:any,discription:any,shipping_price:any,product_price:any,delivery_by:any,processing_time:any,shipping_time:any,gift_name:any,phone_number:any,address:any,note:any){
  let httpParams= new HttpParams()
  .append("order_no",order_no)
  .append("buyer_name",buyer_name)
  .append("location",location)
  .append("product_name",product_name)
  .append("discription",discription)
  .append("shipping_price",shipping_price)
  .append("product_price",product_price)
  .append("delivery_by",delivery_by)
  .append("processing_time",processing_time)
  .append("shipping_time",shipping_time)
  .append("gift_name",gift_name)
  .append("phone_number",phone_number)
  .append("address",address)
  .append("note",note)
  console.log(order_no,buyer_name,delivery_by,gift_name);
  return this.http.post(this.baseUrl+'assets/api/postrfqaccept.php',httpParams);
 }
 fetchmsg(threadid: any){
  let httpParams= new HttpParams()
  .append("threadid", threadid)
  return this.http.post(this.baseUrl+'assets/api/fetchmsg.php',httpParams);
 }
  sendRfqShop(data :any) {
    let httpParams = new HttpParams()
      .append("shopId", data['shop_id'])
      // .append("hasImage", data['imageUploaded'])
      .append("imageUploaded", data['imageUploadedRfq'])
      .append("imageRUCount", data['imageRUCount'])
      .append("userId", data['user_id'])
      .append("shopLocation", data['shop_location'])
      .append("note", data['note'])
      .append("productRef", data['product_ref'])
      // .append("image", data['image'])
      .append("sellerId", data['seller_id'])
      .append("image0", data['image0'])
      .append("image1", data['image1'])
      .append("image2", data['image2'])
      .append("imageRU0", data['imageRU0'])
      .append("imageRU1", data['imageRU1'])
      .append("imageRU2", data['imageRU2'])
    return this.http.post(this.baseUrl + 'assets/api/rfqshop.php', httpParams);
 }

  getcity(state :any){
let httpParams= new HttpParams()
.append("state", state);
return this.http.post(this.baseUrl+'assets/api/getCity.php',httpParams);
}
getPincode(city :any){
let httpParams= new HttpParams()
.append("city", city);
return this.http.post(this.baseUrl+'assets/api/getPin.php',httpParams);
}
getPincodeDetails(pin :any){
let httpParams= new HttpParams()
.append("pin", pin);
return this.http.post(this.baseUrl+'assets/api/getPincodeDetails.php',httpParams);
}
createInvoice(){
let httpParams= new HttpParams()
// .append("prodId", prodId)
// .append("userId", userId);
return this.http.get(this.baseUrl+'assets/api/createInvoice.php');
}
addComplaintData(data: Object,userId:any,sellerId: any){
let httpParams= new HttpParams()
.append("userId", userId)
.append("sellerId", sellerId)
// .append("userName", data['username'])
.append("note", data['complaint_desc']);
return this.http.post(this.baseUrl+'assets/api/addComplaintData.php',httpParams);
}
reqUpdate(userId:any,prodId: any){
let httpParams= new HttpParams()
.append("prodId", prodId)
.append("userId", userId);
return this.http.post(this.baseUrl+'assets/api/reqUpdate.php',httpParams);
}
addReviewData(data: Object,userId:any,count:any,prodId: any){
let httpParams= new HttpParams()
.append("prodId", prodId)
.append("rating", count)
.append("userId", userId)
.append("title", data['title'])
.append("note", data['review_desc']);
return this.http.post(this.baseUrl+'assets/api/addReviewData.php',httpParams);
}
getPendingPayData(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/pendingPayOrderData.php',httpParams);
}
getReadyShippingData(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/readyShippingData.php',httpParams);
}
uploadImage4(data: Object){
let httpParams = new HttpParams()
.append("userId", data['user_id'])
.append("image",data['image']);
return this.http.post(this.baseUrl+'assets/api/image4Upload.php', httpParams);
}
uploadImage5(data: Object){
let httpParams = new HttpParams()
.append("userId", data['user_id'])
.append("image",data['image']);
return this.http.post(this.baseUrl+'assets/api/image5Upload.php', httpParams);
}
uploadImage6(data: Object){
let httpParams = new HttpParams()
.append("userId", data['user_id'])
.append("image",data['image']);
return this.http.post(this.baseUrl+'assets/api/image6Upload.php', httpParams);
}
getPendingConfirmOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/pendingConfirmOrderDataSeller.php',httpParams);
}
getPendingPayOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/pendingPayOrderDataSeller.php',httpParams);
}
getProcessingOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/processingOrderDataSeller.php',httpParams);
}
getShippedOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/shippedOrderDataSeller.php',httpParams);
}
getDeliveredOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/deliveredOrderDataSeller.php',httpParams);
}
getClosedOrderDataSeller(data: any){
let httpParams= new HttpParams()
.append("sellerId", data)
return this.http.post(this.baseUrl+'assets/api/closedOrderDataSeller.php',httpParams);
}
getPendingConfirmOrder(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/pendingConfirmOrder.php',httpParams);
}
getProcessingOrder(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/processingOrder.php',httpParams);
}
getShippedOrder(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/shippedOrder.php',httpParams);
}
getDeliveredOrder(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/deliveredOrder.php',httpParams);
}
getClosedOrder(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/closedOrder.php',httpParams);
}
getPendingPayOrder(data: any){
let httpParams= new HttpParams()
.append("userId", data)
return this.http.post(this.baseUrl+'assets/api/pendingPayOrder.php',httpParams);
}
  
cartDeliveryPrice(prodId: any,pincode: any,data) {
let httpParams = new HttpParams()
.append("prodId", prodId)
.append("pincode", pincode)
.append("deliveryOption", data['deliveryOption'])
.append("productQuantity", data['productQuantity']);
return this.http.post(this.baseUrl + 'assets/api/cartDeliveryPrice.php', httpParams);
}

deleteCartProductfn(id, userId, prodid, quantity, pincode) {
let httpParams = new HttpParams()
.append("id", id)
.append("user_id", userId)
.append("prodid", prodid)
.append("quantity", quantity)
.append("pincode", pincode);
return this.http.post(this.baseUrl + 'assets/api/deleteCartProduct.php', httpParams);
}

addrUndeliverableCart(prodId, pincode) {
let httpParams = new HttpParams()
.append("prodId", prodId)
// .append("userId",userId);
.append("pincode", pincode);
return this.http.post(this.baseUrl + 'assets/api/addrUndeliverableCart.php', httpParams);
}

getcartCheckout(id) {
let httpParams = new HttpParams()
.append("id", id);
return this.http.post(this.baseUrl + 'assets/api/cartCheckout.php', httpParams);
}

getCustomerOrderCheckout(orderid) {
let httpParams = new HttpParams()
.append("orderid", orderid);
// .append("prodid", prodid);
// .append("pin", data['pin']);
return this.http.post(this.baseUrl + 'assets/api/getCustomerOrderCheckout.php', httpParams);
}

cartImgProdUpload(data) {
    let httpParams = new HttpParams()
        .append("prodId", data);
    return this.http.post(this.baseUrl + 'assets/api/cartImgProdUƒpload.php', httpParams);
}
  dynamicOfferCart(prodId: any) {
let httpParams = new HttpParams()
.append("prodid", prodId)
return this.http.post(this.baseUrl + 'assets/api/dynamicOfferCart.php', httpParams);
}
  variantInfoCartChosen(prodId: any) {
let httpParams = new HttpParams()
.append("prodId", prodId);
return this.http.post(this.baseUrl + 'assets/api/variantInfoCartChosen.php', httpParams);
}
  getViewOrderData(data: any,orderIdShort: any)
  {  
    let httpParams= new HttpParams()  
    .append("orderIdShort", orderIdShort)  
    .append("id", data);  
    return this.http.post(this.baseUrl+'assets/api/ viewSellerOrderData.php',httpParams);  
  } 
  
  getViewOrderDataSeller(data: any,orderIdShort: any)
  {  
    let httpParams= new HttpParams()  
    .append("orderIdShort", orderIdShort)  
    .append("sellerId", data);  
    return this.http.post(this.baseUrl+'assets/api/ viewOrderDataSeller.php',httpParams);  
  }

  // deleteCart(id: number) {
  //     const i = this.DataService.findIndex(d => )
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }

	// product component
	getProductData(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/datagetter.php', httpParams);
	}
	getVariantInfo(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/variant.php', httpParams);
	}
	getSellerDetails(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/sellerdetails.php', httpParams);
	}
	getVariantCount(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/varcount.php', httpParams);
	}
	getVariantNumber(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/numvar.php', httpParams);
	}
	getFollowInfo(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
		return this.http.post('http://localhost:81/sma/src/assets/api/folunfol.php', httpParams);
	}
	getFollowShop(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
		return this.http.post('http://localhost:81/sma/src/assets/api/follow.php', httpParams);
	}
	getUnfollowShop(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
		return this.http.post('http://localhost:81/sma/src/assets/api/unfollow.php', httpParams);
	}
	getDiscountLabel(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/discountlabel.php', httpParams);
	}
	getRatingReview(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/ratingreview.php', httpParams);
	}
	// getLikeDislikeInfo(data : any){
	//   let httpParams = new HttpParams()
	//   .append("prodId",data['prod_id'])
	//   .append("userId",data['user_id'])
	//   return this.http.post('http://localhost:81/sma/src/assets/api/folunfol.php',httpParams);
	// }
	sendReport(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)
		// console.log(data);
		// console.log(rev);
		return this.http.post('http://localhost:81/sma/src/assets/api/report.php', httpParams);
	}
	likeRev(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)
		// console.log(data);
		// console.log(rev);
		return this.http.post('http://localhost:81/sma/src/assets/api/likeproduct.php', httpParams);
	}
	dislikeRev(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("prodId", data['prod_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)
		// console.log(data);
		// console.log(rev);
		return this.http.post('http://localhost:81/sma/src/assets/api/dislikeproduct.php', httpParams);
	}
	getDateDiff(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/datediff.php', httpParams);
	}
	setData(data: any) {
		let httpParams = new HttpParams()
			.append("", data['quantity'])
			.append("", data['message'])
			.append("", data['uploadProductImage'])
			.append("", data['deliveryDatePicker'])
			.append("", data['shippingOption'])
		return this.http.post('http://localhost:81/sma/src/assets/api/submitorderdetails.php', httpParams);

	}
	// shop Component

	getShopData(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/shopgetter.php', httpParams);
	}
	getSellerDetailsShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/sellerdetailshop.php', httpParams);
	}
	getProductList(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/productslist.php', httpParams);
	}
	getFollowInfoShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
		return this.http.post('http://localhost:81/sma/src/assets/api/folunfolshop.php', httpParams);
	}
	getFollowShopPage(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
		return this.http.post('http://localhost:81/sma/src/assets/api/followshop.php', httpParams);
	}
	getUnfollowShopPage(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
		return this.http.post('http://localhost:81/sma/src/assets/api/unfollowshop.php', httpParams);
	}
	getRatingReviewShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/ratingreviewshop.php', httpParams);
	}

	sendReportShop(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)

		return this.http.post('http://localhost:81/sma/src/assets/api/reportshop.php', httpParams);
	}
	likeRevShop(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)

		return this.http.post('http://localhost:81/sma/src/assets/api/likeproductshop.php', httpParams);
	}
	dislikeRevShop(data: any, rev: any) {
		let httpParams = new HttpParams()
			.append("shopId", data['shop_id'])
			.append("userId", data['user_id'])
			.append("reviewId", rev)

		return this.http.post('http://localhost:81/sma/src/assets/api/dislikeproductshop.php', httpParams);
	}
	getPlanDetailsFree(data: Object) {
		let httpParams = new HttpParams()
			.append("planDescription", data['planDescription'])
			.append("planPrice", data['planPrice'])
			.append("taxPrice", data['taxPrice'])
			.append("planDiscount", data['planDiscount'])
			.append("duration", data['duration']);
		return this.http.post('http://localhost:81/sma/src/assets/api/plandetailsFetchFree.php', httpParams);
	}
	getPlanDetailsBasic(data: Object) {
		let httpParams = new HttpParams()
			.append("planDescription", data['planDescription'])
			.append("planPrice", data['planPrice'])
			.append("taxPrice", data['taxPrice'])
			.append("planDiscount", data['planDiscount'])
			.append("duration", data['duration']);
		return this.http.post('http://localhost:81/sma/src/assets/api/plandetailsFetchBasic.php', httpParams);
	}
	getPlanDetailsPremium(data: Object) {
		let httpParams = new HttpParams()
			.append("planDescription", data['planDescription'])
			.append("planPrice", data['planPrice'])
			.append("taxPrice", data['taxPrice'])
			.append("planDiscount", data['planDiscount'])
			.append("duration", data['duration']);
		return this.http.post('http://localhost:81/sma/src/assets/api/plandetailsFetchPremium.php', httpParams);
	}
	getPlanDetailsPlus(data: Object) {
		let httpParams = new HttpParams()
			.append("planDescription", data['planDescription'])
			.append("planPrice", data['planPrice'])
			.append("taxPrice", data['taxPrice'])
			.append("planDiscount", data['planDiscount'])
			.append("duration", data['duration']);
		return this.http.post('http://localhost:81/sma/src/assets/api/plandetailsFetchPlus.php', httpParams);
	}
	getFaqProduct(data: any) {
		let httpParams = new HttpParams()
			.append("prodId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/faqproduct.php', httpParams);
	}
	getFaqShop(data: any) {
		let httpParams = new HttpParams()
			.append("shopId", data)
		return this.http.post('http://localhost:81/sma/src/assets/api/faqshop.php', httpParams);
	}















































































































	getPageData(page: string) {
		let httpParams = new HttpParams()
			.append("pageName", page);
		return this.http.post('http://localhost:81/SMA/src/assets/api/getPage.php', httpParams);
	}
	addData(data: Object) {
		let httpParams = new HttpParams()
			.append("fullname", data['fullname'])
			.append("reg_address", data['reg_address'])
			.append("reg_email", data['reg_email'])
			.append("reg_mobile_no", data['reg_mobile_no'])
			.append("reg_age", data['reg_age'])
			.append("gender", data['gender'])
			.append("reg_password", data['reg_password']);

		return this.http.post('http://localhost/sma/src/assets/api/registration.php', httpParams);
	}
	attemptLogin(data: Object) {
		console.log(data);
		let httpParams = new HttpParams()
			.append("login_email", data['login_email'])
			.append("login_password", data['login_password']);

		return this.http.post('http://localhost/sma/src/assets/api/login.php', httpParams);
	}
	checkMobile(data: Object) {
		console.log(data);
		let httpParams = new HttpParams()
			.append("fp_mobile_no", data['fp_mobile_no']);

		return this.http.post('http://localhost/sma/src/assets/api/checkMobileNo.php', httpParams);
	}
	sendOtp(mobileObj: Object, messageObj: Object, otpObj: Object) {
		console.log(mobileObj);
		console.log(otpObj);
		console.log(messageObj);
		let httpParams = new HttpParams()
			.append("mobileNo", mobileObj['mobileNo'])
			.append("otp", otpObj['otp'])
			.append("message", messageObj['message']);

		return this.http.post('http://localhost/sma/src/assets/api/sendOtp.php', httpParams);
	}
	verifyOtp(data: Object) {
		let httpParams = new HttpParams()
		// .append();
		return this.http.post('http://localhost/sma/src/assets/api/verifyOtp.php', httpParams);
	}
	getvariantInfor() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/variantinforcheckout.php');
	}
	getaddress() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/addresscheckout.php');
	}
	getaddressType() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/addresstypecheckout.php');
	}
	getbulkDiscount() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/bulkdiscountcheckout.php');
	}
	getcustomerOrder() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/customerordercheckout.php');
	}
	getorderMessage() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/ordermessagecheckout.php');
	}
	getorderstatus() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/orderstatuscheckout.php');
	}
	getpurchaseOrder() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/purchaseordercheckout.php');
	}
	getproduct() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/productcheckout.php');
	}
	getproductstatus() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/prodstatuscheckout.php');
	}
	getproductshipprice() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/prodshippricecheckout.php');
	}
	getoffer() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/offercheckout.php');
	}
	getsellercart() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/sellercart.php');
	}
	getcart() {
		return this.http.get('http://localhost/scoopmyart/src/assets/api/cart.php');
	}
	getUser() {

		return this.http.get('assets/api/bulkdiscountcheckout.php');
	}
}

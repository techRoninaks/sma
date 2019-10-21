import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

var imageCoverValue: any = "";
var imageLogoValue: any = "";

@Component({
	selector: 'app-manageshop',
	templateUrl: './manageshop.component.html',
	styleUrls: ['./manageshop.component.scss']
})
export class ManageshopComponent implements OnInit {

	router: any;
	public token: any;
	shopData: any = "";
	sellerDataShop: any = "";
	array12: any = "";
	Object = Object;
	dynamicData: any = "";
	follow: any = "";
	unfollow: any = "";
	folResult: boolean;
	followInfo: any = "";
	tokenObj: object;
	tokenFaqSubmit: object;
	revId: number;
	ratingReviewShop: any = [];
	filledStarRat: any = [];
	unFilledStarRat: any = [];
	reviewStar: any;
	i: number = 0;
	j: number = 0;
	ir: number = 0;
	filledStar: any = [];
	unFilledStar: any = [];
	jr: number = 0;
	defRfqTag: any = 0;
	shopRating: any;
	priv: number;
	selName: any = "";
	followC: any = "";
	mostSelling: any = [];
	shipOption: number;
	ratingData: any = [];
	bar1: any;
	bar2: any;
	editDefault: number = 0;
	editProdPolicy: number = 0;
	editBio: number = 0;
	editShipPolicy: number = 0;
	editShopPolicy: number = 0;
	editReturnPolicy: number = 0;
	editShop: number = 0;
	bar3: any;
	bar4: any;
	bar5: any;
	catName: any = [];
	faqShop: any = [];
	prod: any = [];

	idP: any;
	privOption: any;
	vacOption: any;
	nine: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	four: any = [0, 1, 2, 3];
	six: any = [0, 1, 2, 3, 4, 5];
	prodCount: string[];
	pCount: string[];
	x: any;
	z: any;
	shopAddress: object;
	userId: any;
	sellerId: any;
	tokenFaq: object;
	tokenUpload: object;
	addressData: any = [];
	rfqInput: any = [];
	constructor(private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute, private cookieService: CookieService) { }

	ngOnInit() {
		// this.setCookie("userId", 2);
		this.userId = this.getCookie("userId");
		this.setCookie("sellerId", 1);
		this.sellerId = this.getCookie("sellerId");

		this.route.queryParams.subscribe(params => {
			this.token = params['shop_id'];
			// console.log(this.token);
			this.tokenObj = { shop_id: this.token, user_id: this.userId };
			this.tokenFaq = { shop_id: this.token, number_faq: 0 };

			// console.log(this.tokenObj);
			// this.token = params['userId'];
		});
		this.data.getShopData(this.token).subscribe(
			data => {
				this.shopData = data;
				this.priv = this.shopData.privateAccount;
				this.shopRating = this.shopData.ratingShop;
				this.shipOption = this.shopData.shippingOptionId;
				this.privOption = this.shopData.privateAccount;
				// console.log(this.privOption);
				this.vacOption = this.shopData.onVac;
				// console.log(this.vacOption);
				for (this.ir = 0; this.ir < 5; this.ir++) {
					if (this.ir < this.shopRating) {
						this.filledStar[this.ir] = this.ir;
					} else {
						this.unFilledStar[this.jr++] = this.ir;
					}
				}

				if (this.privOption == '1') {
					(<HTMLInputElement><any>document.getElementById('privacyTog')).checked = true;
				}
				else {
					(<HTMLInputElement><any>document.getElementById('privacyTog')).checked = false;
				}
				if (this.vacOption == '1') {
					(<HTMLInputElement><any>document.getElementById('vacTog')).checked = true;
					document.getElementById("vacationToggle").style.display = "block";
					if ((this.shopData.vacStartDate != null) && (this.shopData.vacEndDate != null)) {
						(<HTMLInputElement><any>document.getElementById("dateSetRadio")).checked = true;
					}
					else {
						(<HTMLInputElement><any>document.getElementById("untilRadio")).checked = true;
					}
				}
				else {
					(<HTMLInputElement><any>document.getElementById('vacTog')).checked = false;
				}

			},
			error => console.error(error)
		);
		imageCoverValue = document.getElementById('shopCover').addEventListener('change', this.onCoverClick.bind(this));
		imageLogoValue = document.getElementById('shopLogo').addEventListener('change', this.onLogoClick.bind(this));
		this.data.getSellerDetailsShop(this.token).subscribe(
			data => {
				this.sellerDataShop = data;
				if (this.priv == 0) {
					this.selName = "By " + this.sellerDataShop.sellerName;

				}
				else {
					this.selName = "";
				}
			},
			error => console.error(error)
		);

		this.data.categoryShop(this.token).subscribe(
			data => {
				this.rfqInput = data;

			}
		);

		this.data.getProductListManage(this.token).subscribe(
			data => {
				this.array12 = data;
			},
			error => console.error(error)
		);


		this.data.getProductData(this.token).subscribe(
			data => {
				this.dynamicData = data;
			},
			error => console.error(error)
		);

		this.data.categoryListShop(this.token).subscribe(
			data => {
				this.catName = data;
				console.log(this.catName);
				// this.prod=this.catName.category;
				var catCount: any;
				catCount = Object.keys(this.catName).length;
				console.log(catCount);
				this.defRfqTag = catCount;
				catCount -= 1;
				console.log(catCount);

				for (var x = catCount; x > -1; x--) {
					console.log(x);
					this.prod[x] = this.catName[x].category;
				}
				console.log(this.prod);
			}
		);


		this.data.getAddressShop(this.token).subscribe(
			data => {
				this.addressData = data;
			},
			error => console.error(error)
		);

		this.data.getFollowInfoShop(this.tokenObj).subscribe(
			data => {
				this.followInfo = data;
				var x = this.followInfo.response;
				if (this.followInfo.response == "successful") {
					this.folResult = true;
				}
				else if (this.followInfo.response == "unsuccessful") {
					this.folResult = false;
				}
			},
			error => console.error(error)
		);
		this.data.getFolCount(this.token).subscribe(
			data => {
				this.followC = data;
			},
			error => console.error(error)
		);
		this.data.getMostSelling(this.token).subscribe(
			data => {
				this.mostSelling = data;
			},
			error => console.error(error)
		);
		this.data.shopViewIncrement(this.token).subscribe();

		this.data.getFaqShop(this.tokenFaq).subscribe(
			data => {
				this.faqShop = data;

			}
		);
		// console.log(this.ratingReviewShop);
	}
	faqMore() {
		this.tokenFaq = { shop_id: this.token, number_faq: 1 };
		this.data.getFaqShop(this.tokenFaq).subscribe(
			data => {
				this.faqShop = data;
			}
		);
		(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";

	}
	filterFaq() {
		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("searchFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("searchFaq")).value.length;
		if (faqSearchInputLength >= 3) {
			this.tokenFaq = { shop_id: this.token, number_faq: 1, filterFaq: faqSearchInput };
			this.data.getFaqShopFiltered(this.tokenFaq).subscribe(
				data => {
					this.faqShop = data;
				}
			);
			(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";
		}
	}
	submitFaq() {
		alert("Question submitted");
		var faqSearchInput = (<HTMLInputElement><any>document.getElementById("submitFaq")).value;
		var faqSearchInputLength = (<HTMLInputElement><any>document.getElementById("submitFaq")).value.length;
		if (faqSearchInputLength >= 5) {
			this.tokenFaqSubmit = { shop_id: this.token, submitFaq: faqSearchInput };
			this.data.getFaqShopSubmit(this.tokenFaqSubmit).subscribe();
		}
		(<HTMLInputElement><any>document.getElementById("submitFaq")).value = "";
	}

	// Cookie Section BEGN
	setCookie(cname, value) {
		this.cookieService.set(cname, value);
	}
	getCookie(cname) {
		return this.cookieService.get(cname);
	}
	deleteCookie(cname) {
		this.cookieService.delete(cname);
	}

	followShop() {
		this.folResult = true;
		this.data.getFollowShopPage(this.tokenObj).subscribe();
		this.followC.folCount = parseFloat(this.followC.folCount) + parseFloat('1');
	}
	unfollowShop() {
		this.folResult = false;
		this.data.getUnfollowShopPage(this.tokenObj).subscribe();
		this.followC.folCount = parseFloat(this.followC.folCount) - parseFloat('1');
	}
	report(revId: any) {
		console.log(revId);
		console.log(typeof (revId));
		this.data.sendReportShop(this.tokenObj, revId).subscribe();
	}
	vacation() {
		var x = (<HTMLInputElement><any>document.getElementById("vacTog")).checked;
		console.log(x);
		if (x == false) {
			document.getElementById("vacationToggle").style.display = "none";
			this.x = { shop_id: this.token, val: "0" };
			this.data.vacationManage(this.x).subscribe();
		}
		else {
			document.getElementById("vacationToggle").style.display = "block";
			this.x = { shop_id: this.token, val: "1" };
			this.data.vacationManage(this.x).subscribe();
		}
	}
	privacy() {
		var x = (<HTMLInputElement><any>document.getElementById("privacyTog")).checked;
		console.log(x);
		if (x == false) {
			this.x = { shop_id: this.token, val: "0" };
			this.data.privacyManage(this.x).subscribe();
		}
		else {
			this.x = { shop_id: this.token, val: "1" };
			this.data.privacyManage(this.x).subscribe();
		}
	}
	delProduct(id: any) {
		this.idP = id;
		document.getElementById("product" + id).style.display = "none";
		this.data.delProdManage(this.idP).subscribe();
	}
	edit(x: any) {
		// this.editDefault=1;
		if (x == 'shop') {
			this.editShop = 1;
		}
		if (x == 'prod') {
			this.editProdPolicy = 1;
		}
		if (x == 'bio') {
			this.editBio = 1;
		}

		if (x == 'ship') {
			this.editShipPolicy = 1;
		}

		if (x == 'shop') {
			this.editShopPolicy = 1;
		}

		if (x == 'return') {
			this.editReturnPolicy = 1;
		}
	}
	sub(x: any) {
		// this.editDefault=0;
		if (x == 'shop') {
			this.editShop = 0;
			var shopNameId = (<HTMLInputElement><any>document.getElementById('shopNameId')).value;
			var addr2ShopId = (<HTMLInputElement><any>document.getElementById('addr2ShopId')).value;
			var cityShopId = (<HTMLInputElement><any>document.getElementById('cityShopId')).value;
			var districtShopId = (<HTMLInputElement><any>document.getElementById('districtShopId')).value;
			var stateShopId = (<HTMLInputElement><any>document.getElementById('stateShopId')).value;
			var countryShopId = (<HTMLInputElement><any>document.getElementById('countryShopId')).value;
			var pincodeShopId = (<HTMLInputElement><any>document.getElementById('pincodeShopId')).value;
			var categ = this.prod;

			this.shopAddress = { categ: categ, seller_id: this.sellerId, shop_id: this.token, shopNameId: shopNameId, addr2ShopId: addr2ShopId, cityShopId: cityShopId, districtShopId: districtShopId, stateShopId: stateShopId, countryShopId: countryShopId, pincodeShopId: pincodeShopId };
			this.data.shopAddressUpload(this.shopAddress).subscribe();
			this.addressData.addr1 = shopNameId;
			this.addressData.addr2 = addr2ShopId;
			this.addressData.city = cityShopId;
			this.addressData.district = districtShopId;
			this.addressData.state = stateShopId;
			this.addressData.country = countryShopId;
			this.addressData.pincode = pincodeShopId
		}
		if (x == 'prod') {
			this.editProdPolicy = 0;
			var type = 'prod';
			var y = (<HTMLInputElement><any>document.getElementById('prodTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
			// (<HTMLInputElement><any>document.getElementById('prodPolicyId')).innerText=y;
			this.shopData.productPolicy = y;
		}
		if (x == 'bio') {
			this.editBio = 0;
			var type = 'bio';
			var y = (<HTMLInputElement><any>document.getElementById('bioTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
			// (<HTMLInputElement><any>document.getElementById('bioId')).innerHTML=y;
			this.shopData.descriptionShop = y;
		}

		if (x == 'ship') {
			this.editShipPolicy = 0;
			var type = 'ship';
			var y = (<HTMLInputElement><any>document.getElementById('shipTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
			// (<HTMLInputElement><any>document.getElementById('shipPolicyId')).innerHTML=y;
			this.shopData.shipPolicy = y;

		}

		if (x == 'shop') {
			this.editShopPolicy = 0;
			var type = 'shop';
			var y = (<HTMLInputElement><any>document.getElementById('shopTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
			// (<HTMLInputElement><any>document.getElementById('shopPolicyId')).innerHTML=y;
			this.shopData.shopPolicy = y;

		}

		if (x == 'return') {
			this.editReturnPolicy = 0;
			var type = 'return';
			var y = (<HTMLInputElement><any>document.getElementById('retTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
			// (<HTMLInputElement><any>document.getElementById('returnPolicyId')).innerHTML=y;
			this.shopData.returnPolicy = y;

		}
	}
	vacationSave(q: any) {
		if (q == 'until') {
			var type = 'until';
			this.z = { shop_id: this.token, type: type, start: 0, end: 0 };
			this.data.vacationSave(this.z).subscribe();
		}
		if (q == 'dateSet') {
			var type = 'dateSet';
			var s = (<HTMLInputElement><any>document.getElementById('startDate')).value;
			console.log(s);
			var e = (<HTMLInputElement><any>document.getElementById('endDate')).value;
			console.log(e);
			this.z = { shop_id: this.token, type: type, start: s, end: e };
			this.data.vacationSave(this.z).subscribe();
		}
	}
	onCoverClick(event) {
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			imageCoverValue = text;
			console.log(imageCoverValue);
		};
	}
	onLogoClick(event) {
		// 		console.log(event.target.files[0]);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		// reader.onLoad = onLoadCallback;
		reader.onload = (event) => {
			var text: any = reader.result;
			imageLogoValue = text;
			// 			console.log(imageValue);
		};
	}
	submitCover() {
		var image = imageCoverValue;
		console.log(image);
		this.tokenUpload = { image: image, shop_id: this.token };

		// setTimeout(function () {
		this.data.uploadShopCover(this.tokenUpload).subscribe();
		// }, 3000);

	}
	submitLogo() {
		var image = imageLogoValue;
		this.tokenUpload = { image: image, shop_id: this.token };
		this.data.uploadShopLogo(this.tokenUpload).subscribe();
	}

	filterFunction() {
		var input, filter, ul, li, a, i, txtValue;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		ul = document.getElementById("myUL");
		li = ul.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}

		var rfqSearchInput = (<HTMLInputElement><any>document.getElementById("myInput")).value.length;
		if (rfqSearchInput >= 3) {
			(<HTMLInputElement><any>document.getElementById("myUL")).style.display = "block";
		}
		else {
			(<HTMLInputElement><any>document.getElementById("myUL")).style.display = "none";

		}
	}
	addTagCategory(x: any) {
		var y = this.defRfqTag;
		this.prod[y++] = x;
		this.defRfqTag = y;
		console.log(this.prod);
	}
	delCategory(id: any) {
		var n = this.Object.keys(this.prod).length;
		var chiP = id.split("!");
		this.idP = chiP[0];
		var chiIndex = chiP[1];
		var removed = this.prod.splice(chiIndex, 1);
		console.log(removed);
		console.log(this.prod);
		this.defRfqTag = this.prod.length;
	}
}
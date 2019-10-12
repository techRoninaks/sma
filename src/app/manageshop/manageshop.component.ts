import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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

	bar3: any;
	bar4: any;
	bar5: any;
	faqShop: any = [];
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
	userId: any;
	tokenFaq: object;
	constructor(private data: DataService, private formBuilder: FormBuilder, private route: ActivatedRoute, private cookieService: CookieService) { }

	ngOnInit() {
		// this.setCookie("userId", 2);
		this.userId = this.getCookie("userId");
		this.route.queryParams.subscribe(params => {
			this.token = params['shop_id'];
			// console.log(this.token);
			this.tokenObj = { shop_id: this.token, user_id: this.userId };
			this.tokenFaq = { shop_id: this.token, number_faq:0};

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
	faqMore(){
		this.tokenFaq = { shop_id: this.token, number_faq:1};
		this.data.getFaqShop(this.tokenFaq).subscribe(
			data => {
				this.faqShop = data;
			}
		);
		(<HTMLInputElement><any>document.getElementById("moreFaq")).style.display = "none";

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
		this.followC.folCount = this.followC.folCount + 1;
	}
	unfollowShop() {
		this.folResult = false;
		this.data.getUnfollowShopPage(this.tokenObj).subscribe();
		this.followC.folCount = this.followC.folCount - 1;
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
		if (x == 'prod') {
			this.editProdPolicy = 0;
			var type = 'prod';
			var y = (<HTMLInputElement><any>document.getElementById('prodTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
		}
		if (x == 'bio') {
			this.editBio = 0;
			var type = 'bio';
			var y = (<HTMLInputElement><any>document.getElementById('bioTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
		}

		if (x == 'ship') {
			this.editShipPolicy = 0;
			var type = 'ship';
			var y = (<HTMLInputElement><any>document.getElementById('shipTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
		}

		if (x == 'shop') {
			this.editShopPolicy = 0;
			var type = 'shop';
			var y = (<HTMLInputElement><any>document.getElementById('shopTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
		}

		if (x == 'return') {
			this.editReturnPolicy = 0;
			var type = 'return';
			var y = (<HTMLInputElement><any>document.getElementById('retTxtAr')).value;
			this.z = { shop_id: this.token, val: y, type: type };
			this.data.editManage(this.z).subscribe();
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
}



import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { range, empty } from 'rxjs';
import { filter } from 'minimatch';

declare var $: any;

@Component({
	selector: 'app-categorylisting',
	templateUrl: './categorylisting.component.html',
	styleUrls: ['./categorylisting.component.scss']
})
export class CategorylistingComponent implements OnInit {
	token: any;
	Object = Object;
	dummyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	price: string = "00.00";
	actualPrice: string = "00.00";
	offer: string = "-25% off";
	array12: any = [];
	head = false;
	i: number = 0;
	filledStar: any = [];
	unFilledStar: any = [];
	j: number = 0;
	filterArray: any = [];
	cookieArray: {};
	deleteCookieCount: any = 0;
	deleteCookieArray: any = [];
	pageData: Object;
	filterCount: number = 0;
	pageCount: number = 0;
	totPages: any = [];
	ratingView: any = 0;
	pages: any = 0;
	subCategory: any = {};
	variants: any = {};
	shipMethods: any = {};
	minOption: any = "";
	maxOption: any = "";
	priceRange: any = [];
	maxPriceRange: any = {};
	popHeader: any = "";
	popContent: any = "";
	popImgSrc: any = "";
	filterChipset: any = [];
	comonShopId: any = [];

	constructor(private route: ActivatedRoute, private cookieService: CookieService, private data: DataService, private router: Router) { }

	ngOnInit() {
		//Php files
		this.data.getPageData("category").subscribe(data => {
			this.pageData = data;
			this.pages = this.pageData["no_of_products"];
			this.loadData();
		})

		this.filterChips();
		// this.setCookie("pin","682020");

	}

	openNav() {
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	}
	closeNav() {
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
	}
	toggleBtns(oldBtn) {
		if (document.getElementById(oldBtn).classList.contains("show")) {
			document.getElementById(oldBtn).classList.remove('show');
		}
	}
	getParams(urlParam) {
		var keyToken = "";
		this.route.queryParams.subscribe(params => {
			keyToken = params[urlParam];
		});

		if (keyToken !== undefined) {
			return keyToken;
		}
		return "";

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
	addToFilterArray(parentCookie, cname, cdata) {
		var filterJson = this.getCookie(parentCookie);
		var jsonParsed = JSON.parse(filterJson);
		jsonParsed[cname] = cdata;
		this.setCookie(parentCookie, JSON.stringify(jsonParsed));
	}
	//filter cookies to be deleted
	deleteFilter(filterChip) {
		document.getElementById(filterChip).style.display = "none";
		// this.deleteCookieArray[this.deleteCookieCount++] = id;
		console.log(filterChip);
		var deliverable;
		var freeShip;
		var instantBuy;
		var maxPrice;
		var rfq;
		var orderConfirm;
		var rating;
		var minPrice;

		if (filterChip == "Undeliverable items") {
			deliverable = false;
		}
		if (filterChip == "Free shipping") {
			freeShip = false;
			this.addToFilterArray("filterSet", "freeShipping", freeShip);
		}
		if (filterChip == "Instant buy") {
			instantBuy = false;
			this.addToFilterArray("filterSet", "instantBuy", instantBuy);
		}
		if (filterChip == "Max. Price") {
			maxPrice = false;
			this.addToFilterArray("filterSet", "maxPrice", maxPrice);
		}
		if (filterChip == "Order confirmation") {
			orderConfirm = false;
			this.addToFilterArray("filterSet", "orderConfirm", orderConfirm);
		}
		if (filterChip == "Rating") {
			rating = false;
			this.addToFilterArray("filterSet", "rating", rating);
		}
		if (filterChip == "RFQ Enabled") {
			rfq = false;
			this.addToFilterArray("filterSet", "rfq", rfq);
		}
		if (filterChip == "Min. Price") {
			minPrice = false;
			this.addToFilterArray("filterSet", "minPrice", minPrice);
		}

	}

	selectRating() {
		var rating = (<HTMLInputElement><any>document.getElementById("tRating")).value;
		document.getElementById("tRatDisp").innerHTML = rating;

	}
	//Delete a product in seller view
	delProduct(id: any) {
		if (confirm("Do you want to delete the product?")) {
			document.getElementById("product" + id).style.display = "none";
			this.data.delProdManage(id).subscribe();
		}

	}
	//apply filter functionality
	applyFilters() {

		var rating = (<HTMLInputElement><any>document.getElementById("tRating")).value;
		var freeShip = (<HTMLInputElement><any>document.getElementById("tFShip")).checked;
		var rfq = (<HTMLInputElement><any>document.getElementById("tRfq")).checked;
		var instBuy = (<HTMLInputElement><any>document.getElementById("tInstant")).checked;
		var ordConfm = (<HTMLInputElement><any>document.getElementById("orderCon")).checked;
		var minPrice = (<HTMLInputElement><any>document.getElementById("tminPrice")).value;
		var maxPrice = (<HTMLInputElement><any>document.getElementById("tmaxPrice")).value;

		var variants = (<any>document.getElementsByName("variantBtn"));
		var variantData = [];

		for (var i = 0, j = 0; i < variants.length; i++) {
			if (variants[i].checked) {
				variantData[j++] = variants[i].id;
			}
		}

		var shipMethod = (<any>document.getElementsByName("shipBtn"));
		var shipData = [];

		for (var i = 0, j = 0; i < shipMethod.length; i++) {
			if (shipMethod[i].checked) {
				shipData[j++] = shipMethod[i].id;
			}
		}

		//append to filter array
		this.addToFilterArray("filterSet", "rating", rating);
		this.addToFilterArray("filterSet", "freeShipping", freeShip);
		this.addToFilterArray("filterSet", "rfq", rfq);
		this.addToFilterArray("filterSet", "instantBuy", instBuy);
		this.addToFilterArray("filterSet", "orderConfirm", ordConfm);
		this.addToFilterArray("filterSet", "minPrice", minPrice);
		this.addToFilterArray("filterSet", "maxPrice", maxPrice);
		this.addToFilterArray("filterSet", "variants", variantData);
		this.addToFilterArray("filterSet", "shipMethod", shipData);

		document.getElementById('load').style.display = "grid";
		this.toggleBtns('collapseOne');
		this.loadData();
	}
	applySort() {
		//get elements by name and then send the condition to sort set
		var PLH = (<HTMLInputElement><any>document.getElementById("tpriceLow")).checked;
		var PHL = (<HTMLInputElement><any>document.getElementById("tpriceHigh")).checked;
		var latest = (<HTMLInputElement><any>document.getElementById("tlatest")).checked;
		var pop = (<HTMLInputElement><any>document.getElementById("tpopularity")).checked;
		var prLH = (<HTMLInputElement><any>document.getElementById("tproLH")).checked;
		var prHL = (<HTMLInputElement><any>document.getElementById("tproHL")).checked;
		var sLH = (<HTMLInputElement><any>document.getElementById("tShipLH")).checked;
		var sHL = (<HTMLInputElement><any>document.getElementById("tShipHL")).checked;

		this.addToFilterArray("SortSet", "priceLH", PLH);
		this.addToFilterArray("SortSet", "priceHL", PHL);
		this.addToFilterArray("SortSet", "latest", latest);
		this.addToFilterArray("SortSet", "popular", pop);
		this.addToFilterArray("SortSet", "processLH", prLH);
		this.addToFilterArray("SortSet", "processHL", prHL);
		this.addToFilterArray("SortSet", "shipLH", sLH);
		this.addToFilterArray("SortSet", "shipHL", sHL);
		// this.loadFilters(this.pages);

		document.getElementById('load').style.display = "grid";
		this.toggleBtns('collapseTwo');
		this.loadData();
	}
	//load related filters in filter dropdown based on scenarios

	loadPages(PageCount) {
		for (var i = 0; i < PageCount; i++) {
			this.totPages[i] = i + 1;
		}
	}

	//Check which scenario from URL and call other functions
	loadData() {

		var srchKey = this.getParams("key");
		var catId = this.getParams("cat_id");
		var shopId = this.getParams("shop_id");

		var location = this.getCookie("pin");

		if (location !== "") {

			if (srchKey !== "") {

				this.loadSearchData(srchKey);

			} else if (catId !== "") {

				this.loadCatData(catId);

			} else if (shopId !== "") {

				this.loadShopData(shopId);

			}
		} else {
			this.locPopUpBoxTemplate("Looks like you're lost!", "Please enter a valid location!", "assets/images/lostImage.jpg");
		}
		this.filterChips();

	}

	loadShopData(shopId) {

		var pincode = this.getCookie("pin");
		var filters = this.getCookie("filterSet");
		var sorters = this.getCookie("SortSet");
		var request = "";

		if (shopId == "all") {

			//all shop listing
			(<any>document.getElementById("productListing")).style.display = "none";
			(<any>document.getElementById("shopByStore")).style.display = "grid";
			(<any>document.getElementById("filterBtnMain")).style.display = "none";
			(<any>document.getElementById("sortBtnMain")).style.display = "none";
			this.data.loadShopList(pincode, 12, 1).subscribe(shopData => {

				request = shopData["request"];
				if (request == "success") {
					this.array12 = shopData["data"];
				}
				this.requestHandler(request);
			})

		} else if (shopId == "favorites") {

			//list favorite shops
			(<any>document.getElementById("productListing")).style.display = "none";
			(<any>document.getElementById("shopByStore")).style.display = "grid";
			(<any>document.getElementById("filterBtnMain")).style.display = "none";
			(<any>document.getElementById("sortBtnMain")).style.display = "none";
			var userId = this.getCookie("userId");
			this.data.loadFavorites(userId, 12, 1).subscribe(favShops => {

				request = favShops["request"];
				if (request == "success") {
					this.array12 = favShops["data"];
				}
				this.requestHandler(request);
			})

		} else if (!isNaN(parseInt(shopId))) {

			//seller view
			var sellerId = this.getCookie("sellerId");
			if (!isNaN(parseInt(sellerId))) {
				(<any>document.getElementById("productListing")).style.display = "none";
				(<any>document.getElementById("sellerListing")).style.display = "grid";
				(<any>document.getElementById("addNewProd")).style.display = "grid";
				(<any>document.getElementById("filterBtnMain")).style.display = "none";
				(<any>document.getElementById("sortBtnMain")).style.display = "none";
				(<any>document.getElementById("filterBtnMainSide")).style.display = "none";
				this.data.loadShopWiseProductsInSellerView(shopId, 12, 1, filters, sorters).subscribe(shopProducts => {

					request = shopProducts["request"];
					if (request == "success") {
						this.array12 = shopProducts["data"];
						this.subCategory = shopProducts["subCategory"];
						this.variants = shopProducts["variants"];
						this.shipMethods = shopProducts["shipMethods"];
						this.priceRange = this.generatePriceRange(shopProducts["priceRange"]);
						this.comonShopId = this.array12[0].shopId;
					}
					this.requestHandler(request);

				})
			} else {
				//shopwise product listing
				this.data.loadShopWiseProducts(shopId, 12, 1, filters, sorters).subscribe(shopProducts => {

					request = shopProducts["request"];
					if (request == "success") {
						this.array12 = shopProducts["data"];
						this.subCategory = shopProducts["subCategory"];
						this.variants = shopProducts["variants"];
						this.shipMethods = shopProducts["shipMethods"];
						this.priceRange = this.generatePriceRange(shopProducts["priceRange"]);
						this.comonShopId = this.array12[0].shopId;
					}
					this.requestHandler(request);

				})
			}


		}
	}

	loadCatData(catId) {

		var pincode = this.getCookie("pin");
		var filters = this.getCookie("filterSet");
		var sorters = this.getCookie("SortSet");
		var request = "";

		if (!isNaN(parseInt(catId))) {
			//category listing on cat-id
			this.data.loadCatIdData(catId, pincode, 12, 1, filters, sorters).subscribe(catIdData => {

				request = catIdData["request"];
				if (request == "success") {
					this.array12 = catIdData["data"];
					this.subCategory = catIdData["subCategory"];
					this.variants = catIdData["variants"];
					this.shipMethods = catIdData["shipMethods"];
					this.priceRange = this.generatePriceRange(catIdData["priceRange"]);
				}
				this.requestHandler(request);

			});

		} else if (catId == "trending_products") {
			//trending list
			this.data.loadTrending(pincode, 12, 1, filters, sorters).subscribe(trendingData => {

				request = trendingData["request"];
				if (request == "success") {
					this.array12 = trendingData["data"];
					this.subCategory = trendingData["subCategory"];
					this.variants = trendingData["variants"];
					this.shipMethods = trendingData["shipMethods"];
					this.priceRange = this.generatePriceRange(trendingData["priceRange"]);
				}
				this.requestHandler(request);

			});

		} else if (catId == "offer_products") {
			//offer list
			this.data.loadOfferProd(pincode, 12, 1, filters, sorters).subscribe(offerData => {

				request = offerData["request"];
				if (request == "success") {
					this.array12 = offerData["data"];
					this.subCategory = offerData["subCategory"];
					this.variants = offerData["variants"];
					this.shipMethods = offerData["shipMethods"];
					this.priceRange = this.generatePriceRange(offerData["priceRange"]);
				}
				this.requestHandler(request);

			});

		} else if (catId == "new_products") {
			//new product list
			this.data.loadNewProd(pincode, 12, 1, filters, sorters).subscribe(newData => {

				request = newData["request"];
				if (request == "success") {
					this.array12 = newData["data"];
					this.subCategory = newData["subCategory"];
					this.variants = newData["variants"];
					this.shipMethods = newData["shipMethods"];
					this.priceRange = this.generatePriceRange(newData["priceRange"]);
				}
				this.requestHandler(request);

			});

		}

	}

	loadSearchData(srchKey) {

		var pincode = this.getCookie("pin");
		var filters = this.getCookie("filterSet");
		var sorters = this.getCookie("SortSet");
		var request = "";

		this.data.loadSearchResults(srchKey, pincode, 12, 1, filters, sorters).subscribe(searchData => {

			request = searchData["request"];
			if (request == "success") {
				this.array12 = searchData["data"];
				this.subCategory = searchData["subCategory"];
				this.variants = searchData["variants"];
				this.shipMethods = searchData["shipMethods"];
				this.priceRange = this.generatePriceRange(searchData["priceRange"]);
			}
			this.requestHandler(request);

		});
	}

	generatePriceRange(priceArray) {

		var maxPrice = Math.max(...priceArray)
		var minPrice = Math.min(...priceArray)
		var leastCount = Math.round((maxPrice - minPrice) / (priceArray.length * 0.5));
		var range = [];

		for (var i = 0; i < priceArray.length; i++) {

			range[i] = minPrice + i * leastCount;
			if (range[i] > maxPrice) {
				range[i] = maxPrice;
				break;
			}

		}

		return range;

	}
	changeMaxPrice() {

		var currentMinPrice = (<HTMLInputElement><any>document.getElementById("tminPrice")).value;
		this.maxPriceRange = [];

		for (var i = 0; i < this.priceRange.length; i++) {

			if (this.priceRange[i] > parseInt(currentMinPrice)) {

				this.maxPriceRange[i] = this.priceRange[i];

			}
		}
	}

	popUpBoxTemplate(heading, description, image) {
		$("#myModal").modal();
		this.popHeader = heading;
		this.popContent = description;
		this.popImgSrc = image;
	}
	locPopUpBoxTemplate(heading, description, image) {
		$("#locationModal").modal();
		this.popHeader = heading;
		this.popContent = description;
		this.popImgSrc = image;
	}

	requestHandler(request) {

		if (request == "success") {
			setTimeout(function () {
				document.getElementById('load').style.display = "none";
			}, 500);
			return;

		} else if (request == "not_found") {
			setTimeout(function () {
				document.getElementById('load').style.display = "none";
			}, 500);
			var formElement = "form Here";
			this.popUpBoxTemplate("Sorry, we couldn't find what you're looking for...", formElement, "assets/images/notFoundImage.jpg");
			return;
		}
		setTimeout(function () {
			document.getElementById('load').style.display = "none";
		}, 500);
		this.popUpBoxTemplate("Aw, Snap!", "Sorry, something went wrong... Try again after sometime!", "assets/images/snapError.jpg");

	}

	goHome() {
		$("#myModal").modal("hide");
		this.router.navigate(['']);
	}
	shopById(shopId) {
		this.router.navigate(['/category'], { queryParams: { shop_id: shopId } });
	}

	deliverable() {
		var deliFlag = (<HTMLInputElement><any>document.getElementById("inpDeliver")).checked;
		this.addToFilterArray("filterSet", "deliverable", deliFlag);

		document.getElementById('load').style.display = "grid";
		this.loadData();
	}

	filterChips() {
		this.filterArray = JSON.parse(this.getCookie("filterSet"));
		var count = 0;

		console.log(this.filterArray);
		if (this.filterArray["deliverable"] == true) {
			this.filterChipset[count++] = "Undeliverable items";
			(<HTMLInputElement><any>document.getElementById("inpDeliver")).checked = true;
		}
		if (this.filterArray["freeShipping"] == true) {
			this.filterChipset[count++] = "Free shipping";
			(<HTMLInputElement><any>document.getElementById("tFShip")).checked = true;
		}
		if (this.filterArray["instantBuy"] == true) {
			this.filterChipset[count++] = "Instant buy";
			(<HTMLInputElement><any>document.getElementById("tFShip")).checked = true;
		}
		if (this.filterArray["maxPrice"] !== "") {
			this.filterChipset[count++] = "Max. Price";
			(<HTMLInputElement><any>document.getElementById("tmaxPrice")).value = this.filterArray["maxPrice"];
		}
		if (this.filterArray["minPrice"] !== "") {
			this.filterChipset[count++] = "Min. Price";
			(<HTMLInputElement><any>document.getElementById("tminPrice")).value = this.filterArray["minPrice"];
		}
		if (this.filterArray["orderConfirm"] == true) {
			this.filterChipset[count++] = "Order confirmation";
			(<HTMLInputElement><any>document.getElementById("orderCon")).checked = true;
		}
		if (this.filterArray["rating"] !== "") {
			this.filterChipset[count++] = "Rating";
		}
		if (this.filterArray["rfq"] == true) {
			this.filterChipset[count++] = "RFQ Enabled";
			(<HTMLInputElement><any>document.getElementById("tRfq")).checked = true;
		}
		if (this.filterArray["shipMethod"].length > 0) {
			var shipMethods = this.filterArray["shipMethod"];
			for (var i = 0; i < shipMethods.length; i++) {
				this.filterChipset[count++] = shipMethods[i];
			}
		}
		if (this.filterArray["variants"]) {
			var variant = this.filterArray["variants"];
			for (var i = 0; i < variant.length; i++) {
				this.filterChipset[count++] = variant[i];
			}
		}
		console.log(this.filterChipset)
	}

	submitLocation() {
		var locationPin = (<HTMLInputElement><any>document.getElementById('locationPin')).value;
		console.log(locationPin);
		this.setCookie("pin", locationPin);
		window.location.reload();
	}
}


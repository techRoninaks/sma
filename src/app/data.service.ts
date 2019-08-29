import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getProductData(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/datagetter.php',httpParams);
  }
  getVariantInfo(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/variant.php',httpParams);
  }
  getSellerDetails(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/sellerdetails.php',httpParams);
  }
  getVariantCount(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/varcount.php',httpParams);
  }
  getVariantNumber(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data)
    return this.http.post('http://localhost:81/sma/src/assets/api/numvar.php',httpParams);
  }
  getFollowInfo(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post('http://localhost:81/sma/src/assets/api/folunfol.php',httpParams);
  }
  getFollowShop(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post('http://localhost:81/sma/src/assets/api/follow.php',httpParams);
  }
  getUnfollowShop(data : any){
    let httpParams = new HttpParams()
    .append("prodId",data['prod_id'])
    .append("userId",data['user_id'])
    return this.http.post('http://localhost:81/sma/src/assets/api/follow.php',httpParams);
  }
}

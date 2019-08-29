import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPageData(page: string){
    let httpParams = new HttpParams()
    .append("pageName", page);
    return this.http.post('http://localhost/SMA/src/assets/api/getPage.php', httpParams);
  }
}

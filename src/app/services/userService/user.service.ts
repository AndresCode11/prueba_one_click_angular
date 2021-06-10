import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userListUrl: string;
  private detailListUrl: string;
  private userDetailUrl: string;

  constructor(private http: HttpClient) { 
    this.userListUrl = environment.API_ENDPOINT + '/user_list';
    this.detailListUrl = environment.API_ENDPOINT + '/detail_list';
    this.userDetailUrl = environment.API_ENDPOINT + '/user_detail';
  }

  getUserListService(): Observable<Object> {
    return this.http.get(this.userListUrl, {responseType: 'json'});
  }

  getDetailListService(): Observable<Object> {
    return this.http.get(this.detailListUrl, {responseType: 'json'});
  }

  getUserDetailService(formData: FormData): Observable<Object> {
    return this.http.post(this.userDetailUrl, formData, {responseType: 'json'});
  }
}

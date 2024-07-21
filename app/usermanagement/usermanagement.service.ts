import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http: HttpClient) 
  {

   }

  public dbUrl = "http://localhost:3000/user";

//Observable

  adduser(c:user): Observable<user>
  {
    return this.http.post<user>(this.dbUrl,c);

  }

  getAlluser(): Observable<Array<user>>
  {
    return this.http.get<Array<user>>(this.dbUrl);

  }
 
}
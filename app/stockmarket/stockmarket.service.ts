
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stockmarket } from './Stockmarket';


@Injectable({
  providedIn: 'root'
})
export class StockmarketService {


  constructor(private http:HttpClient)
   { }

   company: Stockmarket[] |any;

   private apiGet:string =`http://localhost:5000/api/v1/market/company/getall`;
   private apiPost:string =`http://localhost:5000/api/v1/market/company/register`;
   private apiDel:string ='http://localhost:5000/api/v1/market/company/delete';
   private apiPutcompany:string ='http://localhost:5000/api/v1/market/updatecompany';
   private apiGetcompany:string ='http://localhost:5000/api/v1/market/company/info';
   private apiPoststock:string ='http://localhost:5000/api/v1/market/stock/add';
   private apiPutstock:string ='http://localhost:5000/api/v1/market/stock/put';
   /*
   private apiGet:string =`http://ec2-3-217-201-84.compute-1.amazonaws.com/api/v1/market/company/getall`;
   private apiPost:string =`http://ec2-44-201-83-3.compute-1.amazonaws.com:8080/api/v1/market/company/register`;
   private apiDel:string ='http://ec2-44-201-83-3.compute-1.amazonaws.com:8080/api/v1/market/company/delete';
   private apiPutcompany:string ='http://ec2-44-201-83-3.compute-1.amazonaws.com:8080/api/v1/market/updatecompany';
   private apiGetcompany:string ='http://ec2-44-201-83-3.compute-1.amazonaws.com:8080/api/v1/market/company/info';
   private apiPoststock:string ='http://ec2-44-201-83-3.compute-1.amazonaws.com:8080/api/v1/market/stock/add';
   private apiPutstock:string ='http://ec2-44-201-83-3.compute-1.amazonaws.com:8080/api/v1/market/stock/put';
  */
   register(companymodel:Stockmarket):Observable<Stockmarket>
   {
     console.log(companymodel);
     return this.http.post<Stockmarket>(this.apiPost,companymodel);
      
   }

   getAll():Observable<Array<Stockmarket>>
   {
     return this.http.get<Array<Stockmarket>>(this.apiGet);

   }

   delete(companyCode:number): Observable<Stockmarket>
   {
     return this.http.delete<Stockmarket>(`${this.apiDel}/${companyCode}`);
      
     
   }
   update(companymodel:Stockmarket):Observable<Stockmarket>
   {
     console.log(companymodel);
     return this.http.put<Stockmarket>(this.apiPutcompany,companymodel);
      
   }
   getSingleCompany(companyCode:number):Observable<Array<Stockmarket>>
   {
     return this.http.get<Array<Stockmarket>>(`${this.apiGetcompany}/${companyCode}`);

   } 
   addStock(companyCode:number,value: any):Observable<Stockmarket>
   {

     return this.http.post<Stockmarket>(`${this.apiPoststock}/${companyCode}`,value);
      
   }
   updateStock(companyCode:number,value: any):Observable<Stockmarket>
   {

     return this.http.put<Stockmarket>(`${this.apiPutstock}/${companyCode}`,value);
      
   }
}

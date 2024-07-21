import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Stockmarket } from './Stockmarket';
import { StockmarketService } from './stockmarket.service';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-stockmarket',
  templateUrl: './stockmarket.component.html',
  styleUrls: ['./stockmarket.component.css']
})

export class StockmarketComponent implements OnInit  {
  @ViewChild(MatSort) sort: MatSort |any;
  public myForm: FormGroup | any;
  private searchEventSubscription: Subscription | any;
  displayedColumns: string[] = ['companyCode',
  'companysName', 
 'companysCEO',
  'companyTurnover',
 'companyWebsite', 
'stockExchange',
  'stockprice',
  'time',
  'delete',
  'update',
'updatestock'];
  constructor(private datePipe: DatePipe,private http:HttpClient, private comp:StockmarketService,private router: Router,private route: ActivatedRoute) 
    {
      
     }

  ngOnInit(): void
   {
  
   
    this.minmax();
    this.viewAllCompanys;
  }


data: {} |any;
dat :any;
companymodel:Stockmarket = new Stockmarket();
com:Stockmarket = new Stockmarket();
companyarr:Array<Stockmarket>=[];
cmv:Array<Stockmarket>=[];
csp:Array<Stockmarket>=[];
companyCode:number |any;
max : number=0;
min: number=0;
sum :number=0;
avg :number=0;
cname1 :String|any
cname2:String|any
t1 :Date|any;
t2 :Date|any;
m :Date|any;
m1 :Date|any;
m2 :Date|any;
dataSource = new MatTableDataSource(this.companyarr);
d1 = new MatTableDataSource(this.csp);
Register()
{
  
  this.comp.register(this.companymodel).subscribe(data=>
    {
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success') 
      this.data = JSON.stringify(data);
      this.companyarr.push(this.data);
      this.minmax();
    },
    error=>
    {
      Swal.fire('Sorry...', 'Fill mandatory Fields!', 'error') 
      console.log(error);
    })
}

viewAllCompanys()
{
  this.comp.getAll().subscribe(
    data=>
    {
     
      console.log(Object.values(data ));
      this.companyarr = Object.values(data );
      this.dataSource = new MatTableDataSource(this.companyarr);
      this.dataSource.sort = this.sort;
    },
    error=>
    {
      console.log(error);
    })
};
deleteCompany(cid:number)
  {

    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result: any) => {  
      if (result.value) {  
        Swal.fire(  
          'Deleted!',  
          'Your file has been deleted.',  
          'success'  
        )  

        this.comp.delete(cid).subscribe(data=>
          {
        
            console.log("Record is deleted!",data);
            let companyIndex = this.companyarr.findIndex(c=>c.companyCode === cid);
            console.log(companyIndex);
            this.companyarr.splice(companyIndex,1);
            this.viewAllCompanys();
            this.minmax();
          },
          error=>
          {
            console.log("error");
          }
          
          )
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your file is safe :)',  
          'error'  
        )  
      }  
    })  




    
  }
  Update()
{
  this.comp.update(this.companymodel).subscribe(data=>
    {
      Swal.fire('Thank you...', 'You updated succesfully!', 'success') 
      this.data = JSON.stringify(data);
      this.companyarr.push(this.data);
      this.minmax();
    },error=>
    {
      Swal.fire('Sorry...', 'Fill mandatory Fields!', 'error') 
      console.log(error);
    })
}
updatecompany(id:number)
{
  this.router.navigate(['update',id]);
}
updatestock(id:number)
{
  this.router.navigate(['updatestock',id]);
}

viewSingleCompany(cid:number)
{
  this.comp.getSingleCompany(cid).subscribe(
    data=>
    {
      console.log(Object.values(data ));
      this.csp = Object.values(data );
     this.d1 = new MatTableDataSource(this.csp);
    },
    error=>
    {
      console.log(error);
    })
};
addStock(cid:number)
{
  this.comp.addStock(cid,this.companymodel).subscribe(data=>
    {
      this.data = JSON.stringify(data);
      this.companyarr.push(this.data);
      console.log(Object.values(data ));
      this.minmax();
    },
    error=>
    {
      console.log(error);
    
    })


}
updateStock(cid:number)
{
  this.comp.updateStock(cid,this.companymodel).subscribe(data=>
    {
      this.data = JSON.stringify(data);
      this.companyarr.push(this.data);
      console.log(Object.values(data ));
      this.minmax();
    },
    error=>
    {
      console.log(error);
    })
}
minmax()
{

  this.comp.getAll().subscribe(
    data=>
    {
     this.sum=0;
      console.log(Object.values(data ));
      this.cmv = Object.values(data );
       this.max=0;
      for(let j=0;j<data.length;j++)
      {
        this.sum=this.sum+this.cmv[j].stockprice;
       if (this.max<this.cmv[j].stockprice)
       {
        this.max=this.cmv[j].stockprice;
        this.cname1=this.cmv[j].companysName;
       }
      }
      this.avg=this.sum/data.length;
      this.min=this.max;
      this.cname2=this.cname1;
      console.log(this.max);
      console.log(this.min);
      for(let j=0;j<data.length;j++)
      {
       if (this.min>this.cmv[j].stockprice && this.cmv[j].companyCode!=0)
       {
        this.min=this.cmv[j].stockprice;
        this.cname2=this.cmv[j].companysName;
       }
      }
      console.log(this.min);

    },
    error=>
    {
      console.log(error);
    })
};

applyFilter(event: Event) {

  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
 
}
/*
minmaxavgtime(t1:Time,t2:Time)
{

  this.comp.getAll().subscribe(
    data=>
    {
     this.sum=0;
      console.log(Object.values(data ));
      this.cmv = Object.values(data );
       this.max=0;
      for(let j=0;j<data.length;j++)
      {
        if( this.cmv[j].time>=t1 && this.cmv[j].time<=t2)
        {
        this.sum=this.sum+this.cmv[j].stockprice;
        }
       if (this.max<this.cmv[j].stockprice && this.cmv[j].time>=t1 && this.cmv[j].time<=t2)
       {
         
        this.max=this.cmv[j].stockprice;
        this.cname1=this.cmv[j].companysName;
       }
      }
      this.avg=this.sum/data.length;
      this.min=this.max;
      this.cname2=this.cname1;
      console.log(this.max);
      console.log(this.min);
      for(let j=0;j<data.length;j++)
      {
       if (this.min>this.cmv[j].stockprice && this.cmv[j].companyCode!=0 && this.cmv[j].time>=t1 && this.cmv[j].time<=t2)
       {
        this.min=this.cmv[j].stockprice;
        this.cname2=this.cmv[j].companysName;
       }
      }
      console.log(this.min);

    },
    error=>
    {
      console.log(error);
    })
};
*/
/*
minmaxavgtime(t1:Date,t2:Date)
{

  this.comp.getAll().subscribe(
    data=>
    {
     this.sum=0;
      console.log(Object.values(data ));
      this.cmv = Object.values(data );
       this.max=0;
      for(let j=0;j<data.length;j++)
      {
       this.m = this.datePipe.transform(this.cmv[j].time,"MMM d, y, h:mm:ss a");
      
        if( this.m>=t1 && this.m<=t2)
        {
        this.sum=this.sum+this.cmv[j].stockprice;
        }
       if (this.max<this.cmv[j].stockprice && this.m>=t1 && this.m<=t2)
       {
         
        this.max=this.cmv[j].stockprice;
        this.cname1=this.cmv[j].companysName;
       }
      }
      this.avg=this.sum/data.length;
      this.min=this.max;
      this.cname2=this.cname1;
      console.log(this.max);
      console.log(this.min);
      for(let j=0;j<data.length;j++)
      {
        this.m = this.datePipe.transform(this.cmv[j].time,"MMM d, y, h:mm:ss a");
       if (this.min>this.cmv[j].stockprice && this.cmv[j].companyCode!=0 && this.m>=t1 && this.m<=t2)
       {
        this.min=this.cmv[j].stockprice;
        this.cname2=this.cmv[j].companysName;
       }
      }
      console.log(this.min);

    },
    error=>
    {
      console.log(error);
    })
};
*/
minmaxavgtime(t1:Date,t2:Date)
{

  this.comp.getAll().subscribe(
    data=>
    {
     this.sum=0;
      console.log(Object.values(data ));
      this.cmv = Object.values(data );
       this.max=0;
      for(let j=0;j<data.length;j++)
      {
      
      this.m1= this.datePipe.transform(this.t1,"MMM d, y, h:mm:ss a");
       this.m2 = this.datePipe.transform(this.t2,"MMM d, y, h:mm:ss a");
       this.m = this.datePipe.transform(this.cmv[j].time,"MMM d, y, h:mm:ss a");
       console.log(this.m1);
       console.log(this.m2);
       console.log(this.m);
      
        if( this.m>=this.m1 && this.m<=this.m2)
        {
        this.sum=this.sum+this.cmv[j].stockprice;
        }
       if (this.max<this.cmv[j].stockprice && this.m>=this.m1 && this.m<=this.m2)
       {
         
        this.max=this.cmv[j].stockprice;
        this.cname1=this.cmv[j].companysName;
       }
      }
      this.avg=this.sum/data.length;
      this.min=this.max;
      this.cname2=this.cname1;
      console.log(this.max);
      console.log(this.min);
      for(let j=0;j<data.length;j++)
      {
      this.m=this.cmv[j].time;
      this.m1= this.datePipe.transform(this.t1,"MMM d, y, h:mm:ss a");
      this.m2 = this.datePipe.transform(this.t2,"MMM d, y, h:mm:ss a");
      this.m = this.datePipe.transform(this.cmv[j].time,"MMM d, y, h:mm:ss a");
     
    
       if (this.min>this.cmv[j].stockprice && this.cmv[j].companyCode!=0 && this.m>=this.m1 && this.m<=this.m2)
       {
        this.min=this.cmv[j].stockprice;
        this.cname2=this.cmv[j].companysName;
       }
      }
      console.log(this.min);

    },
    error=>
    {
      console.log(error);
    })
};




}
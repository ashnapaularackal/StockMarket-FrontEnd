import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stockmarket } from '../stockmarket/Stockmarket';
import { StockmarketService } from '../stockmarket/stockmarket.service';

@Component({
  selector: 'app-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.css']
})
export class UpdatestockComponent implements OnInit {

  id: number |any;
 stockmarket: Stockmarket|any;

  constructor(private route:ActivatedRoute,private router:Router,private stockmarketService: StockmarketService) { }

  ngOnInit(): void {
    this.stockmarket=new Stockmarket;
    this.id=this.route.snapshot.params['id'];
    this.stockmarketService.getSingleCompany(this.id)
    .subscribe(data => {
      console.log(data)
      this.stockmarket = data;
    }, error => console.log(error));
  }
  updateStock(cid:number)
  {
    this.stockmarketService.updateStock(cid,this.stockmarket).subscribe(data=>
      {
        console.log(data);
        this.stockmarket = new Stockmarket();
       
        this.gotoList();
    
      },error => console.log(error));
    }
  
   
  
    gotoList() {
      this.router.navigate(['/stockmarket']);
    }
  }



import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock Market';
  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {

    this.router.navigate(['/stockmarket']);
  
}
}

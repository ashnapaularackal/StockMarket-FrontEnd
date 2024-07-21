
import { Component, OnChanges,OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit, OnDestroy{

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  
    ngOnInit(): void {

    }
 
    loginForm = new FormGroup(
  {
       firstname: new FormControl('',Validators.required),
      password: new FormControl('',Validators.minLength(8))
  }
    )
  
    public display:any =null;
    getData()
    {
      this.display = JSON.stringify(this.loginForm.value);
      console.log(this.loginForm.value);
    }
    
  }
  
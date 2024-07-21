import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';

import { MatTableModule} from '@angular/material/table';

import { MatExpansionModule } from '@angular/material/expansion';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { StockmarketComponent } from './stockmarket/stockmarket.component';

import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { UpdateComponent } from './update/update.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import {DatePipe} from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];
@NgModule({
  declarations: [
    AppComponent,
   StockmarketComponent,
  
   UsermanagementComponent,
    UpdateComponent,
    UpdatestockComponent

  ],
  imports: [
   
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule ,
    CommonModule,
   MatPaginatorModule,
   MatSortModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
   
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

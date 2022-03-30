import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HairComponent } from './hair-page/hair/hair.component';
import { HairPicturesComponent } from './hair-page/hair-pictures/hair-pictures.component';
import { EmployeeCheckoutComponent } from './employee/employee-checkout/employee-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    HairComponent,
    HairPicturesComponent,
    EmployeeCheckoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

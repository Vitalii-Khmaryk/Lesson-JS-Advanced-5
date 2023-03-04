import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ColectComponent } from './colect/colect.component';
import { HeaderComponent } from './header/header.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { ChildComponent } from './works/tasklist/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ColectComponent,
    HeaderComponent,
    CenzorComponent,
    UserslistComponent,
    TasklistComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './template/register/register.component';
import { RegisterlistComponent } from './template/registerlist/registerlist.component';
import { NavbarComponent } from './template/navbar/navbar.component';


//Service
import {SregisterService} from './service/sregister.service';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    RegisterlistComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SregisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

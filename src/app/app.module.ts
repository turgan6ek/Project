import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImgCarouselComponent } from './home-page/img-carousel/img-carousel.component';
import {CarouselModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { CardListComponent } from './card-list/card-list.component';
import { AddNewComponent } from './add-new/add-new.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ImgCarouselComponent,
    HomePageComponent,
    BlogPageComponent,
    ListPageComponent,
    CardListComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

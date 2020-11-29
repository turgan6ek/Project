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
import {LikeModulePipe} from './card-list/LikeModule.pipe';
import { RouterModule } from '@angular/router';
import {LoggingPlant} from './add-new/PlantService/logging.plant';
import {PlantService} from './add-new/PlantService/plant.service';
import {addPlantGuardService} from './guards/addPlantGuard.service';
import {AuthModule} from './auth/auth.module';
import {UserService} from './auth/user.service';
import {AuthenticationService} from './auth/auth.service';

const routes = [
  {path: '', component: HomePageComponent},
  {path : 'home', component:HomePageComponent},
  {path : 'blog-page', component:BlogPageComponent},
  {path : 'list-page', component:ListPageComponent},
  {path: "add",component: AddNewComponent,
    canActivate:[addPlantGuardService]
  },

]

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
    AddNewComponent,
    LikeModulePipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule,
  ],
  providers: [LoggingPlant,PlantService, addPlantGuardService, UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

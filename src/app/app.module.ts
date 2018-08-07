import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SlickModule } from 'ngx-slick';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CompotitionsComponent } from './compotitions/compotitions.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './compotitions/category/category.component';
import { CompotitionsListComponent } from './compotitions/compotitions-list/compotitions-list.component';
import { WinnerBannerComponent } from './winner-banner/winner-banner.component';
import { ZillionCompotitionsComponent } from './compotitions/zillion-compotitions/zillion-compotitions.component';
import { SkilledBasedCompotitionsComponent } from './compotitions/skilled-based-compotitions/skilled-based-compotitions.component';
import { SurveyBasedCompotitionsComponent } from './compotitions/survey-based-compotitions/survey-based-compotitions.component';
import { DirectoryCompotitionsComponent } from './compotitions/directory-compotitions/directory-compotitions.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersService } from './shared/services/users.service';
import { CompotitionsService } from './shared/services/compotitions.service';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './profile/details/details.component';
import { MyCompotitionsComponent } from './profile/my-compotitions/my-compotitions.component';
import { AuthGuard } from './shared/gaurds/auth.gaurd';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { UserService } from './shared/services/user.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { ResetUserPasswordService } from './shared/services/reset-user-password.service';
import { SupportComponent } from './profile/support/support.component';
import { FilterMyCompetitionsPipe } from './shared/pipes/filter-my-competitions.pipe';
import { ForgotComponent } from './auth/forgot/forgot.component';


const appRoutes: Routes = [
  { path: 'zillion-competitions', component: ZillionCompotitionsComponent },
  { path: 'skilled-based-competitions', component: SkilledBasedCompotitionsComponent },
  { path: 'survey-based-competitions', component: SurveyBasedCompotitionsComponent },
  { path: 'directory-competitions-listings', component: DirectoryCompotitionsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: CompotitionsListComponent },
  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CompotitionsComponent,
    FooterComponent,
    CategoryComponent,
    CompotitionsListComponent,
    WinnerBannerComponent,
    ZillionCompotitionsComponent,
    SkilledBasedCompotitionsComponent,
    SurveyBasedCompotitionsComponent,
    DirectoryCompotitionsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailsComponent,
    MyCompotitionsComponent,
    SupportComponent,
    FilterMyCompetitionsPipe,
    ForgotComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
    FormsModule,
    SlickModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [
    UsersService,
    CompotitionsService,
    AuthGuard,
    AuthenticationService,
    ResetUserPasswordService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { FavoritesComponent } from './pages/favorites.component';
import { ViewedComponent } from './pages/viewed.component';
import { ListComponent } from './components/list.component';
import { DetailComponent } from './pages/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { MyFilterPipe } from './pipes/filter.pipe';
import { closeDirective } from './directives/directives/close';
import { DateAddedComponent } from './pages/date-added.component';
import { MyPageComponent } from './pages/my-page.component';
import { SettingsComponent } from './pages/settings.component';
import { HelpComponent } from './pages/help.component';
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'mypage', component: MyPageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateAddedComponent,
    FavoritesComponent,
    ViewedComponent,
    ListComponent,
    DetailComponent,
    MyFilterPipe,
    closeDirective,
    MyPageComponent,
    SettingsComponent,
    HelpComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  exports: [
    closeDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule }



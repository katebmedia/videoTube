import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { FavoritesComponent } from './pages/favorites.component';
import { ViewedComponent } from './pages/viewed.component';
import { ListComponent } from './components/list.component';
import { DetailComponent } from './pages/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DateAddedComponent } from './pages/dateAdded.component';
import { HttpClientModule } from '@angular/common/http';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: DetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateAddedComponent,
    FavoritesComponent,
    ViewedComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { RouterModule }



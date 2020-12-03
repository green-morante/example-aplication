import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContacsComponent } from './components/contacs/contacs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GalleryComponent,
    FaqComponent,
    ContacsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

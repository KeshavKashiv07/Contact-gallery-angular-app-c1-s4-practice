import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { IconComponent } from './icon/icon.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactContainerComponent,
    IconComponent,
    ContactCardComponent,
    ContactAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

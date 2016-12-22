import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { AlertDirective } from './directive/alert.directive';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { NewComponent } from './component/new/new.component';
import { ContactComponent } from './component/contact/contact.component';
import { TabsComponent} from './component/tabs/tabs.component';
import { TabComponent } from './component/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertDirective,
    MenuComponent,
    HomeComponent,
    NewComponent,
    ContactComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

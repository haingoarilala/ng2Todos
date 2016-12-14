import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { NewComponent } from './component/new/new.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
   { path: 'home', component: HomeComponent },
   { path: 'new', component: NewComponent },
   { path: 'contact', component: ContactComponent },
]

export const routing = RouterModule.forRoot(routes);
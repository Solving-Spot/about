import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'about',
   component: AboutComponent  
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: '', redirectTo: 'about', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

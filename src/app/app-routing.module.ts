import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =
 [
{path:'Home',component:HomeComponent},
{path: 'Sign_in', component:LoginComponent},
{path: 'Sign_up', component:DashboardComponent},
{path: 'Home/Book', component:AddBookComponent},
{path: 'Home/Book/Edit/:id', component:EditBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

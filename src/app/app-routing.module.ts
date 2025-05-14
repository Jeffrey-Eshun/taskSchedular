import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';


const routes: Routes = [
  {path: 'tasks', component:TasksComponent},
  {path: '', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'tasks/id', component:TaskDetailsComponent},
  {path: "**", component:TasksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

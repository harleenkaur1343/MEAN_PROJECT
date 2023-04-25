import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/Router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//import {StudentsService} from './shared/students.service';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
    {path: '', component:ListComponent},
   // {path: '/', component:CreateUpdateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    StudentCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [/*StudentsService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

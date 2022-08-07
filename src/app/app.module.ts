import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { HomeComponent } from './features/home/views/home/home.component';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { HeaderComponent } from './shared/views/header/header.component';
import { ContainerComponent } from './features/container/container.component';
import { SidebarComponent } from './shared/views/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    HeaderComponent,
    ContainerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

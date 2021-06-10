import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MaterializeModalModule } from 'materialize-angular';
import { DetailComponent } from './components/detail/detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DataComponent } from './components/data/data.component';
import { SqlComponent } from './components/sql/sql.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailComponent,
    DataComponent,
    SqlComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([]),
    LoadingBarModule,
    LoadingBarHttpClientModule,
    HttpClientModule,
    MaterializeModalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

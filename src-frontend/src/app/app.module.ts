import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppServicesModule } from './modules/service.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { YearComponent } from './components/year/year.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    YearComponent,
    LoadingComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

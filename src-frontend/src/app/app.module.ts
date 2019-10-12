import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppServicesModule } from './modules/service.module';
import { VacationComponent } from './components/vacation/vacation.component';
import { YearComponent } from './components/common/year/year.component';
import { LoadingComponent } from './components/common/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalendarComponent } from './components/common/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationComponent,
    YearComponent,
    LoadingComponent,
    MenuComponent,
    CalendarComponent
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

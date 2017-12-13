import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TimelineComponent } from '../routes/timeline/timeline.component';

const appRoutes: Routes = [
  { path: 'timeline', component: TimelineComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // debugging purposes only
        enableTracing: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

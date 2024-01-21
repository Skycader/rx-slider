import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderRxComponent } from './components/slider-rx/slider-rx.component';
import { FormsModule } from '@angular/forms';
import { RenderPipe } from './pipes/render.pipe';

@NgModule({
  declarations: [AppComponent, SliderRxComponent, RenderPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule { }

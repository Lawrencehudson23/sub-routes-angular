import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { PublicComponent } from './components/notes/public/public.component';
import { PersonalComponent } from './components/notes/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    PublicComponent,
    PersonalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NotesReducer } from './store/notes/notes.reducer';
import { UserReducer } from './store/user/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NotesComponent,
    NotesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ user: UserReducer, notes: NotesReducer }),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

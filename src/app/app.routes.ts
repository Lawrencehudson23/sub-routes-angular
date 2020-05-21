import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/notes/personal/personal.component';
import { PublicComponent } from './components/notes/public/public.component';
import { NotesComponent } from './components/notes/notes.component';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'notes',
    component: NotesComponent,
    children: [
      { path: 'public', component: PublicComponent },
      { path: 'personal', component: PersonalComponent },
    ],
  },
];
export const routing = RouterModule.forRoot(APP_ROUTES);

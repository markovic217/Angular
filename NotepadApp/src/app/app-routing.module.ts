import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoteDetailsComponent } from './note-details/note-details.component';

const routes: Routes = [
  {path: '', component:LayoutComponent},
  {path: 'details', component: NoteDetailsComponent},
  {path: ':id', component: NoteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

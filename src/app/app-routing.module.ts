import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'signin', loadChildren: () => import('./features/signin/signin.module')
    .then(m => m.SigninModule) },
  { path: 'books', loadChildren: () => import('./features/books/books.module')
    .then(m => m.BooksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

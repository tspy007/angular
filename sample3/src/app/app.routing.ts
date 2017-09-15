import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component'
import { BookDetailComponent } from './book-detail/book-detail.component';


const appRoutes = [
{ path: 'book/:id', component: BookDetailComponent, },
{ path: 'books', component: BookListComponent },
{ path: '', redirectTo: 'book', pathMatch: 'full' }
]

export const Routing = RouterModule.forRoot(appRoutes);


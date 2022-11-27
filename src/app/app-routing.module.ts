import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PreviewComponent } from './page/preview/preview.component';
import { TestComponent } from './page/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

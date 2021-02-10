import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersIndexComponent } from './characters-index.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersIndexComponent,
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersIndexRoutingModule {}

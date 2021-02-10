import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CharactersIndexRoutingModule } from './characters-index-routing.module';
import { CharactersIndexComponent } from './characters-index.component';
import { CharactersListComponent } from '../components/characters-list/characters-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersIndexRoutingModule,

  ],
  declarations: [CharactersIndexComponent,
    CharactersListComponent],
})
export class CharactersIndexModule {}

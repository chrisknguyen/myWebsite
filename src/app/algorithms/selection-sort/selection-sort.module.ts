import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionSortRoutingModule } from './selection-sort-routing.module';
import { SelectionSortComponent } from './selection-sort.component';


@NgModule({
  declarations: [
    SelectionSortComponent
  ],
  imports: [
    CommonModule,
    SelectionSortRoutingModule
  ],
  exports: [
    SelectionSortComponent
  ]
})
export class SelectionSortModule {
}

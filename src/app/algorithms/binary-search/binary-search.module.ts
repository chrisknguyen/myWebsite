import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinarySearchComponent } from './binary-search.component';
import { BinarySearchRoutingModule } from './binary-search-routing.module';

@NgModule({
  declarations: [BinarySearchComponent],
  imports: [
    CommonModule,
    BinarySearchRoutingModule
  ],
  exports: [
    BinarySearchComponent
  ]
})
export class BinarySearchModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [

    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [

    TopNavComponent
  ]
})
export class TopNavModule { }

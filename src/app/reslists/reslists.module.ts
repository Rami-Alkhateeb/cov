import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReslistsPageRoutingModule } from './reslists-routing.module';

import { ReslistsPage } from './reslists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReslistsPageRoutingModule
  ],
  declarations: [ReslistsPage]
})
export class ReslistsPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPage } from './courses.page';

import { CoursesPageRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CoursesPageRoutingModule
  ],
  declarations: [CoursesPage]
})
export class CoursesPageModule {}

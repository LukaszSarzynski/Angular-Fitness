import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule} from '@angular/material';

const aNeededModule = [MatButtonModule, MatIconModule, MatFormFieldModule,
   MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule];

@NgModule({
  imports: aNeededModule,
  exports: aNeededModule
})
export class MaterialDesignModule { }

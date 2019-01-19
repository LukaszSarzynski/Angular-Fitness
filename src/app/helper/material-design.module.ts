import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule} from '@angular/material';

const aNeededModule = [MatButtonModule, MatIconModule, MatFormFieldModule,
   MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
   MatSidenavModule, MatToolbarModule];

@NgModule({
  imports: aNeededModule,
  exports: aNeededModule
})
export class MaterialDesignModule { }

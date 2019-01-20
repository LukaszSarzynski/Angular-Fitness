import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule, MatListModule} from '@angular/material';

const aNeededModule = [MatButtonModule, MatIconModule, MatFormFieldModule,
   MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
   MatSidenavModule, MatToolbarModule, MatListModule];

@NgModule({
  imports: aNeededModule,
  exports: aNeededModule
})
export class MaterialDesignModule { }

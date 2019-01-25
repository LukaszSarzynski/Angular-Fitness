import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
  MatSelectModule, MatProgressSpinnerModule} from '@angular/material';

const aNeededModule = [MatButtonModule, MatIconModule, MatFormFieldModule,
   MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
   MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
   MatSelectModule, MatProgressSpinnerModule];

@NgModule({
  imports: aNeededModule,
  exports: aNeededModule
})
export class MaterialDesignModule { }

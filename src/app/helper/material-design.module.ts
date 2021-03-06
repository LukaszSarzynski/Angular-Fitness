import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
  MatSelectModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';

const aNeededModule = [MatButtonModule, MatIconModule, MatFormFieldModule,
   MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
   MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule,
   MatSelectModule, MatProgressSpinnerModule, MatDialogModule];

@NgModule({
  imports: aNeededModule,
  exports: aNeededModule
})
export class MaterialDesignModule { }

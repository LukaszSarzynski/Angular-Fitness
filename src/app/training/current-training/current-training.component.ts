import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { StopTrainingComponent } from './stop-training.componet';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() eeTrainingExit = new EventEmitter();
  iCurrentProgres = 0;
  nTimer;

  constructor(private oDialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.nTimer = setInterval(() => {
      this.iCurrentProgres += 17;
      if (this.iCurrentProgres > 99) {
        this.iCurrentProgres = 100;
        clearInterval(this.nTimer);
      }
    }, 1000);
  }

  stopTraining() {
    clearInterval(this.nTimer);
    const oDialogRef = this.oDialog.open(StopTrainingComponent, {
      data: {
        iProgres: this.iCurrentProgres
      }
    });

    oDialogRef.afterClosed().subscribe( bDialogAnswer => {
      console.log(bDialogAnswer);
      if (bDialogAnswer) {
        this.eeTrainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }

    });
  }


}

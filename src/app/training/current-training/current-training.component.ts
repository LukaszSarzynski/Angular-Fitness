import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  iCurrentProgres = 0;
  nTimer;

  constructor() { }

  ngOnInit() {
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
  }


}

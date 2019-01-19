import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  maxDay: Date;

  constructor() { }

  ngOnInit() {
    this.maxDay = new Date();
    this.maxDay.setFullYear(this.maxDay.getFullYear() - 3);
  }

  onSubmit(oForm: NgForm) {
    if (oForm.valid) {
      console.log(oForm);

    }
  }

}

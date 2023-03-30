import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chamber',
  templateUrl: './chamber.page.html',
  styleUrls: ['./chamber.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChamberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

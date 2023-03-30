import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-harbour',
  templateUrl: './harbour.page.html',
  styleUrls: ['./harbour.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HarbourPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

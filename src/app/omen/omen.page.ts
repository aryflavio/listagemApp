import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-omen',
  templateUrl: './omen.page.html',
  styleUrls: ['./omen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OmenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

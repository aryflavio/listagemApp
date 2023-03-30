import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-viper',
  templateUrl: './viper.page.html',
  styleUrls: ['./viper.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViperPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

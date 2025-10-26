import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, cubeOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.scss'],
  imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonItem, IonLabel, IonAvatar, IonContent, IonCard, IonCardContent, IonIcon, IonButton, IonList, IonListHeader, IonCardHeader, IonCardTitle],
  standalone: true,
})
export class ProductivityComponent  implements OnInit {

  constructor() { 
    addIcons({ checkmarkCircleOutline, timeOutline, cubeOutline });
  }

  ngOnInit() {}

}

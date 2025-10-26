import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRefresher, IonRefresherContent, IonToolbar, RefresherCustomEvent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, cubeOutline, timeOutline } from 'ionicons/icons';
import { take, timeout, TimeoutError } from 'rxjs';
import { Productivity } from 'src/app/core/services/productivity';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.scss'],
  imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonItem, IonLabel, IonAvatar, IonContent, IonCard, IonCardContent, IonIcon, IonButton, IonList, IonListHeader, IonCardHeader, IonCardTitle, IonRefresher, IonRefresherContent],
  standalone: true,
})
export class ProductivityComponent  implements OnInit {
  data: any[] = [];

  constructor(private productivityService: Productivity) { 
    addIcons({ checkmarkCircleOutline, timeOutline, cubeOutline });
  }

  ngOnInit() {
    this.getData();
  }

  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      this.getData();
      event.target.complete();
    }, 2000);
  }

  getData() {
    this.productivityService.getData().pipe(timeout(15000), take(1)).subscribe({
      next: (response) => {
        if (response.result) {
          this.data = response.data;
          console.log('DATOS: ', this.data);
        } else {
          this.data = [];
        }
      },
      error: (error: TimeoutError) => {
        if (error instanceof TimeoutError) {
          this.getData();
          return;
        }
        
        console.log(error);
      }
    });
  }

}

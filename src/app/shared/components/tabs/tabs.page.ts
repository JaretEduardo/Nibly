import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import  { addIcons } from 'ionicons';
import  { calendarOutline, settingsOutline, statsChartOutline, trendingUpOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon],
  standalone: true,
})
export class TabsPage implements OnInit {

  constructor(private router: Router) { 
    addIcons({ calendarOutline, trendingUpOutline, statsChartOutline, settingsOutline });
  }

  ngOnInit() {
  }

  isTabActive(tabName: string): boolean {
    return this.router.url.includes(`/${tabName}`);
  }

}

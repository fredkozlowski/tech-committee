import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from '../../models/info-card.model';
import { InfoCardComponent } from '../info-card/info-card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: true,
  imports: [CommonModule, InfoCardComponent]
})
export class CardListComponent implements OnInit {
  cards: InfoCard[] = [
    {
      title: 'Angular Development',
      description: 'Learn about Angular framework and its powerful features for building modern web applications.',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      tags: ['Angular', 'TypeScript', 'Web Development']
    },
    {
      title: 'React Development',
      description: 'Explore React library and its ecosystem for building user interfaces.',
      imageUrl: 'https://reactjs.org/logo-og.png',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      title: 'Vue.js Development',
      description: 'Discover Vue.js framework and its progressive architecture.',
      imageUrl: 'https://vuejs.org/images/logo.png',
      tags: ['Vue', 'JavaScript', 'UI']
    }
  ];

  ngOnInit(): void {
  }
} 
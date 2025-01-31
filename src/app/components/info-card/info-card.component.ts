import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCard } from '../../models/info-card.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoCardComponent {
  @Input() card!: InfoCard;
} 
import { Component } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CardListComponent]
})
export class AppComponent {
  title = 'tech-committee';
}

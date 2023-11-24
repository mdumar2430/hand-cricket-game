import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {TossComponent} from '../app/toss/toss.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent,TossComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'odd-or-even';
  playerName = ''
  winner = ''
}

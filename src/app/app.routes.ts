import { Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import { TossComponent } from '../app/toss/toss.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'game', component: GameComponent}
];

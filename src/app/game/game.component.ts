import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TossComponent } from '../toss/toss.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, TossComponent, FormsModule, RouterModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  showToss = true;
  tossWinner = ''
  playerWon = false
  computerChoice = ''
  playerChoice = ''
  playerScore = 0
  computerScore = 0
  innings1 = true
  innings2 = false
  gameStarted = false
  batsmanRuns = 0
  bowlerRuns = 0
  isplayerOut = false
  isComputerOut = false
  showHit = true
  showBowl = true
  target = 0
  result = ''
  
  getResults(score:number, target:number, type:number){
    if(type == 0){
      if(score >= target){
        this.result = 'You Won!'
        this.showHit = false;
        return true;
      }
      else if(score == target-1){
        this.result = 'Its a DRAW!'
      }
      else{
        this.result = 'Computer Won'
      }
    }
    if(type == 1){
      if(score >= target){
        this.result = 'Computer Won!'
        this.showBowl = false
        return true;
      }
      else if(score == target-1){
        this.result = 'Its a DRAW!'
      }
      else{
        this.result = 'You Won!'
      }
    }
    if(this.isComputerOut && this.isplayerOut){
      return true;
    }
    return false;
  }

  startBatting(){
    this.playerChoice ='Bat'
    this.batsmanRuns = 0
    this.bowlerRuns = 0
    this.innings1 = false
    this.innings2 = true
    this.target = this.computerScore + 1
  }

  startBowling(){
    this.playerChoice ='Bowl'
    this.batsmanRuns = 0
    this.bowlerRuns = 0
    this.innings1 = false
    this.innings2 = true
    this.target = this.playerScore + 1
  }

  hit(){
    this.bowlerRuns = Math.floor(Math.random() * 6) + 1
    if(this.playerChoice == 'Bat'){
      if(this.batsmanRuns != this.bowlerRuns){
        this.playerScore += +this.batsmanRuns;
      }
      else{
        this.isplayerOut = true
        this.showHit = false
      }
    }
  }

  bowl(){
    this.batsmanRuns = Math.floor(Math.random() * 6) + 1
    if(this.playerChoice == 'Bowl'){
      if(this.batsmanRuns != this.bowlerRuns){
        this.computerScore += +this.batsmanRuns;
      }
      else{
        this.isComputerOut = true
        this.showBowl = false
      }
    }
  }

  chooseBatorBowl(choice : number){
    if(choice == 0){
      this.playerChoice = 'Bat';
      this.computerChoice = 'Bowl';
    }else{
      this.playerChoice = 'Bowl';
      this.computerChoice = 'Bat';
    }
    this.gameStarted = true;
  }

  onTossCompleted(winner: string) {
    this.showToss = false;  
    this.tossWinner = winner;
    if(this.tossWinner == 'You'){
      this.playerWon = true;
    }
    else{
      let rand = Math.floor(Math.random() * 6);
      this.computerChoice = (rand % 2 == 0)?"Bat":"Bowl"
      if(this.computerChoice == "Bat"){
        this.playerChoice = "Bowl"
      }
      else{
        this.playerChoice = "Bat"
      }
    }
  }
}

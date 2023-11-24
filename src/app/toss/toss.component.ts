import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'toss',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toss.component.html',
  styleUrl: './toss.component.css'
})
export class TossComponent {
  @Output() tossCompleted = new EventEmitter();
  choice = ''
  optionSelected = false
  btnShow = false
  result = ''
  winner = ''
  tails = '../../assets/tails.png'
  heads = '../../assets/heads.png'
  url = ''
  start(){
    this.tossCompleted.emit(this.winner);
  }
  
  toss(){
    this.optionSelected = true
    let count = Math.floor(Math.random() * 20) + 5;
    let counter = 0
    console.log(count);
    const timer = setInterval(() => {
      this.result = counter % 2 == 0 ? 'Heads' : "Tails"
      this.url = counter % 2 == 0 ? this.heads : this.tails
      counter++;
      if (count === counter) {
        if(this.choice == this.result){
          this.winner = 'You'
        }else{
          this.winner = 'Computer'
        }
        clearInterval(timer);
      }
    }, 100);
  }
}

import { Component, HostListener } from '@angular/core';


//keyCodes table here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  counter = 0;
  stringAImg = "../../assets/mini-bluetooth-speaker-500x500.jpg";
  stringAPlay = "../../assets/JBL-Audio-Speakers-Bass-PNG-Clipart-green.png";
  stringBImg = "../../assets/mini-bluetooth-speaker-500x500.jpg";

 @HostListener('window:keyup', ['$event'])
  handleKeypress(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.counter++;
    } else if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.counter--;
    } else if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
    this.playStringA()
    } else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
    this.playStringB();
    }
  }

  playBuzzer(){
  let audio = new Audio();
  audio.src = "../../assets/mixkit-wrong-answer-bass-buzzer-948.wav";
  audio.load();
  audio.play();
  }

  playGameOver(){
  let audio = new Audio();
  audio.src = "../../assets/mixkit-arcade-retro-game-over-213.wav";
  audio.load();
  audio.play();
  }

  playStringA() {
  this.playGameOver();
  this.stringAImg = "../../assets/JBL-Audio-Speakers-Bass-PNG-Clipart-green.png";
         setTimeout(()=>{
              this.stringAImg = "../../assets/mini-bluetooth-speaker-500x500.jpg";
          }, 1300);
  };

    playStringB() {
    this.playBuzzer();
    this.stringBImg = "../../assets/giphy.gif";
           setTimeout(()=>{
                this.stringBImg = "../../assets/mini-bluetooth-speaker-500x500.jpg";
            }, 1300);
    }
}

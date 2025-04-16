import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger("fadeInOut", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [
        style({ opacity: 0 }),
        animate("0.5s ease-in-out"),
      ]),
    ]),
  ],
})
export class WelcomeComponent {

  ngOnInit() {
    let audio = new Audio('assets/audio/bedziesiedzialo.mp3');
    audio.volume = 0.10;
    audio.play();
  }

  birdsAnimation() {
    
  }

}

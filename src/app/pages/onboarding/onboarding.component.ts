import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  chat = false

  constructor() { }

  ngOnInit(): void {
  }

  chatBot () {
    if (!this.chat) {
      this.chat = true
    }else{
      this.chat = false
    }
  }
}

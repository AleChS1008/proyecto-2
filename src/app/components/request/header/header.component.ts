import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  arrowInd = false
  arrowWorld = false

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  changeArrowInd () {
    if(!this.arrowInd){
      this.arrowInd = true
    }else{
      this.arrowInd = false
    }
  }
  changeArrowWorld () {
    if(!this.arrowWorld){
      this.arrowWorld = true
    }else{
      this.arrowWorld = false
    }
  }
}

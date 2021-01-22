import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss'],
})
export class Error500Component implements OnInit {
  log: any = null;
  showDetails: boolean = false;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.log = this.router.getCurrentNavigation().extras.state.log;
    }
  }

  ngOnInit(): void {}

  isShowDetails() {
    this.showDetails = !this.showDetails;
  }
}

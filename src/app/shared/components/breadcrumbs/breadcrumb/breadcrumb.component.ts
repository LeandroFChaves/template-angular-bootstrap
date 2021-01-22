import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Breadcrumb } from '../navigation.model';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-breadcrumb',

  templateUrl: './breadcrumb.component.html',
  styleUrls: ['breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  breadcrumbs!: Breadcrumb[];
  title: string;

  constructor(public navigationService: NavigationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.navigationService.routeData$().subscribe((routeData) => {
        this.title = routeData.title;

        this.breadcrumbs = routeData.breadcrumbs;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

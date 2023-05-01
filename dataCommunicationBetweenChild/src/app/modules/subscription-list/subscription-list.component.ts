import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubscriptionDataService } from '../../data-services/subscriptions.data-service';
import { Subscription } from '../../models/subscription.model';

@Component({
  selector: 'subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SubscriptionListComponent {
  _subscriptions$: Observable<Subscription[]> =this.subscriptionDataService.getSubscriptions();
  

  constructor(private subscriptionDataService: SubscriptionDataService) {}
  ngOnInit(): void {
    this.subscriptionDataService.selectedUserId.subscribe((userID) => {
      this._subscriptions$ = this.subscriptionDataService.getSubscriptions(userID);
    });
    
  }
}

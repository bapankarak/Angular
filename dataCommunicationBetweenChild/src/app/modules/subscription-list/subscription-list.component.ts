import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubscriptionDataService } from '../../data-services/subscriptions.data-service';
import { Subscription } from '../../models/subscription.model';

@Component({
  selector: 'subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionListComponent {
  _subscriptions$: Observable<Subscription[]> =this.subscriptionDataService.getSubscriptions();

  constructor(private subscriptionDataService: SubscriptionDataService) {}
  ngOnInit(): void {
    this.subscriptionDataService.selectedUserId.subscribe((message) => {
      console.log('Message: ', this._subscriptions$); // => Hello from child 1!
      this._subscriptions$.forEach(item=>{console.log(item)})
    });
  }
}

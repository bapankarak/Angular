import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SubscriptionDataService } from '../../data-services/subscriptions.data-service';
import { UserDataService } from '../../data-services/user.data-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectorComponent {
  _users$: Observable<User[]> = this.userDataService.getUsers();

  constructor(
    private userDataService: UserDataService,
    public subscriptionDataService: SubscriptionDataService
  ) {}

  selectedUser(event:any): void {
    console.log(event.target.value);
    this.subscriptionDataService.selectedUserId.next(event.target.value);
  }
}

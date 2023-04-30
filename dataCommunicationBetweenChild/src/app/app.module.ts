import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSelectorComponent } from './modules/user-selector/user-selector.component';
import { SubscriptionListComponent } from './modules/subscription-list/subscription-list.component';
import { SubscriptionDataService } from './data-services/subscriptions.data-service';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectorComponent,
    SubscriptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SubscriptionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

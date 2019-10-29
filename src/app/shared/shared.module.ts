import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { RestaurantService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

import { NgModule, ModuleWithProviders } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations:[
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports:[
        InputComponent,
        RadioComponent,
        RatingComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SnackbarComponent
    ]
})
export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [
                ShoppingCartService,
                RestaurantService,
                OrderService,
                NotificationService
            ]
        }
    }
}
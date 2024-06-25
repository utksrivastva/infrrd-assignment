import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployeeListRoutingModule } from "./employee-list-routing.module";
import { EmployeeListComponent } from "./employee-list.component";

import { EmployeeCardComponent } from "./components/employee-card/employee-card.component";
import { RatingComponent } from '../../shared/components/rating/rating.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [EmployeeListComponent, EmployeeCardComponent, RatingComponent, MessageModalComponent],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        EmployeeListRoutingModule
    ]
})
export class EmployeeListModule { }
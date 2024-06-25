import { Component, OnInit, Input } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  constructor() { }

  profilePicture = "../assets/Images/Infrrd.png"
  faPaperPlane = faPaperPlane;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  @Input() data: any;

  messageModalVisibility: boolean = false;

  ngOnInit(): void {
  }

  toggleMessageModalVisibility() {
    this.messageModalVisibility = !this.messageModalVisibility;
  }

  hideMessageModal() {
    this.messageModalVisibility = false;
  }

}

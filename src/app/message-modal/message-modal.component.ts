import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})

export class MessageModalComponent implements OnInit {

  constructor() { }

  faEnvelope = faEnvelope;
  faSlack = faSlack;
  faSkype = faSkype
  faGithub = faGithub;

  @Input() visibility: boolean;
  @Output() onMessageMediumSelection = new EventEmitter(); 

  ngOnInit(): void {
  }

  messageMedium() {
    this.onMessageMediumSelection.emit("false");
  }
}

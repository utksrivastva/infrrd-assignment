import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faList } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  orgLogo: string = "../assets/Images/Infrrd.png"
  menuListOptions: any = [
    {
      icon: faList,
      title: "Overview"
    },
    {
      icon: faMessage,
      title: "Messages"
    },
    {
      icon: faMagnifyingGlass,
      title: "Search"
    },
    {
      icon: faFilter,
      title: "Filter"
    },
    {
      icon: faClockRotateLeft,
      title: "History"
    },
    {
      icon: faUser,
      title: "My Account"
    }
  ];

  userControls: any = [
    {
      icon: faHandshakeAngle,
      title: "Get Help"
    },
    {
      icon: faArrowRightFromBracket,
      title: "Sign Out"
    }
  ]

  @Output() onMenuOptionSelection = new EventEmitter()

  ngOnInit(): void {
  }

  selectedOption(optionTitle: string) {
    
    this.onMenuOptionSelection.emit(optionTitle);
  }
}

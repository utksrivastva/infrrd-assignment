import { Component, OnInit } from '@angular/core';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  faBell = faBell;
  faUsers = faUsers;

  intraOrgTeams: any = [];
  selectedValue: any = 0;

  ngOnInit(): void {
    let responseData = this.dataService.getOrganizationalMetaData();
    this.intraOrgTeams = responseData['orgTeamData']
  }


  filterByTeam() {
    this.dataService.setSelectedTeamValue(this.selectedValue);
  }

}

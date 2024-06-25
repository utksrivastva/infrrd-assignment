import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private filterSubscription: Subscription;
  private searchCriteriaSubscription: Subscription;

  constructor(private dataService: DataService) { }

  employeeData: any = [];
  filteredEmployeesData: any = [];
  employeesInBLR: boolean = false;
  filterByTeam: boolean = false;

  filterParams: any = {}

  ngOnInit(): void {
    this.employeeData = this.dataService.getEmployeeData();
    
    this.filterSubscription = this.dataService.filterByTeam$.subscribe(
      (selectedTeam) =>  {
        
        if(selectedTeam != 0) {
          this.filterByTeam = true;
          this.filterParams['currentTeamID'] = selectedTeam;
        }
        else {
          this.filterByTeam = false;
          delete this.filterParams.currentTeamID;
        }
        this.filterEmployees()
      }
    )

    this.searchCriteriaSubscription = this.dataService.searchCriteria$.subscribe(
      (searchCriteria) => {
        
        if(Object.keys(searchCriteria).length > 0) {
          for(let key in searchCriteria) {
            if(this.filterParams[key] == undefined) {
              
              this.filterParams[key] = searchCriteria[key];
            }
          }
          
          this.filterEmployees();
        }
        else {
          if(this.employeesInBLR == true || this.filterByTeam == true) {
            for(let key in this.filterParams) {
              if(key == 'location' || key == 'currentTeamID') {
                if(this.employeesInBLR == false) {
                  this.filterParams['location'] = undefined;
                }
                if(this.filterByTeam == false) {
                  this.filterParams['currentTeamID'] = undefined;
                }
              }
              else {
                this.filterParams[key] = undefined;
              }
            }
            this.filterEmployees();
          }
          else {
            this.filterParams = {};
            this.filteredEmployeesData = this.dataService.getEmployeeData();
          }
        }
      }
    )
  }


  filterEmployeesByLocation() {
    
    if(this.employeesInBLR) {
      this.filterParams['location'] = "Bangalore";
    }
    else {
      delete this.filterParams.location;
    }
    this.filterEmployees();
  }

  filterEmployees() {
    if(Object.keys(this.filterParams).length > 0) {
      
      this.filteredEmployeesData = [];
      let arrOfFiltersParams = Object.keys(this.filterParams);
      
      for(let i = 0; i < this.employeeData.length; i++) {
        let valueMatchFlag = true;
        for(let j = 0; j < arrOfFiltersParams.length; j++) {
          if(this.filterParams[arrOfFiltersParams[j]] != undefined && this.filterParams[arrOfFiltersParams[j]] != this.employeeData[i][arrOfFiltersParams[j]]) {
            valueMatchFlag = false;
          }
        }
        if(valueMatchFlag) {
          this.filteredEmployeesData.push(this.employeeData[i]);
        }
      }
    }
    else {
      this.filteredEmployeesData = this.dataService.getEmployeeData();
    }
    
  }

  ngOnDestroy() {
    if(this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }

    if(this.searchCriteriaSubscription) {
      this.searchCriteriaSubscription.unsubscribe();
    }
  }
}

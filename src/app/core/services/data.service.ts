import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private employeeData: any = [
    {
      ID: 1,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Meredith Fischer",
      designation: "HR Manager",
      rating: 4.5,
      experience: 12,
      yearOfJoining: 2015,
      currentTeam: "OCBC",
      currentTeamID: 2,
      reportingManager: "Anita Frost",
      location: "Singapore",
      department: "Human Resource",
      departmentID: 100,
      phone: "+6575045412",
      email: "meredith@infrrd.com"
    },
    {
      ID: 2,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Sara Kline",
      designation: "Lead Analyst",
      rating: 4,
      experience: 5.5,
      yearOfJoining: 2020,
      currentTeam: "Rustify",
      currentTeamID: 3,
      reportingManager: "Zachery Ray",
      location: "Singapore",
      department: "Engineering",
      departmentID: 111,
      phone: "+6580012355",
      email: "sara@infrrd.com"
    },
    {
      ID: 3,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Tessa Brennan",
      designation: "SDET",
      rating: 4,
      experience: 8,
      yearOfJoining: 2018,
      currentTeam: "Radian",
      currentTeamID: 4,
      reportingManager: "Cheryl Meza",
      location: "Singapore",
      department: "Quality Assurance",
      departmentID: 112,
      phone: "+6524421881",
      email: "tessa@infrrd.com"
    },
    {
      ID: 4,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Chris Cole",
      designation: "Lead Software Engineer",
      rating: 4,
      experience: 7.5,
      yearOfJoining: 2017,
      currentTeam: "OCBC",
      currentTeamID: 2,
      reportingManager: "Eric Smith",
      location: "Singapore",
      department: "Engineering",
      departmentID: 111,
      phone: "+6542244004",
      email: "chris@infrrd.com"
    },
    {
      ID: 5,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Sanjay Verma",
      designation: "Software Engineer",
      rating: 4,
      experience: 2,
      yearOfJoining: 2020,
      currentTeam: "IDC",
      currentTeamID: 1,
      reportingManager: "Ranbir Sinha",
      location: "Bangalore",
      department: "Engineering",
      departmentID: 111,
      phone: "+919900100123",
      email: "sanjay@infrrd.com"
    },
    {
      ID: 6,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Arpit Sharma",
      designation: "Lead Software Engineer",
      rating: 5,
      experience: 9,
      yearOfJoining: 2017,
      currentTeam: "IDC",
      currentTeamID: 1,
      reportingManager: "Ranbir Sinha",
      location: "Bangalore",
      department: "Engineering",
      departmentID: 111,
      phone: "+91788701234",
      email: "arpit@infrrd.com"
    },
    {
      ID: 7,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Deepika Garg",
      designation: "Junior SDET",
      rating: 3.5,
      experience: 3,
      yearOfJoining: 2021,
      currentTeam: "IDC",
      currentTeamID: 1,
      reportingManager: "Nikita Sharma",
      location: "Bangalore",
      department: "Quality Assurance",
      departmentID: 112,
      phone: "+919900543210",
      email: "deepika@infrrd.com"
    },
    {
      ID: 8,
      profilePhotoURL: "../assets/Images/Infrrd.png",
      name: "Anamika Sharma",
      designation: "Lead HR",
      rating: 4,
      experience: 8.5,
      yearOfJoining: 2022,
      currentTeam: "IDC",
      currentTeamID: 1,
      reportingManager: "Meredith Fischer",
      location: "Bangalore",
      department: "Human Resource",
      departmentID: 100,
      phone: "+918899101234",
      email: "tanya@infrrd.com"
    }
  ]; 

  /*private teamsData: any = [
    {
      ID: 1,
      title: "IDC"
    },
    {
      ID: 2,
      title: "OCBC"
    },
    {
      ID: 3,
      title: "Rustify"
    },
    {
      ID: 4,
      title: "Radian"
    }
  ];*/

  private orgMetaData: any = {
    orgTeamData: [
      {
        ID: 1,
        title: "IDC"
      },
      {
        ID: 2,
        title: "OCBC"
      },
      {
        ID: 3,
        title: "Rustify"
      },
      {
        ID: 4,
        title: "Radian"
      }
    ],
    orgDepartments: [
      {
        ID: 100,
        title: "Human Resource"
      },
      {
        ID: 111,
        title: "Engineering"
      },
      {
        ID: 112,
        title: "Quality Assurance"
      }
    ],
    orgYearOfJoining: [
      {
        ID: 2015,
        value: 2015
      },
      {
        ID: 2017,
        value: 2017
      },
      {
        ID: 2018,
        value: 2018
      },
      {
        ID: 2020,
        value: 2020
      },
      {
        ID: 2021,
        value: 2021
      },
      {
        ID: 2022,
        value: 2022
      }
    ],
    orgOfficeLocations: [
      {
        ID: "Singapore",
        title: "Singapore"
      },
      {
        ID: "Bangalore",
        title: "Bangalore"
      }
    ]
  }

  private filterByTeamSubject = new BehaviorSubject<number>(0);
  filterByTeam$ = this.filterByTeamSubject.asObservable();

  private searchCriteriaSubject = new BehaviorSubject<any>({});
  searchCriteria$ = this.searchCriteriaSubject.asObservable();

  constructor() { }

  getEmployeeData() {
    return this.employeeData;
  }

  getOrganizationalMetaData() {
    return this.orgMetaData;
  }

  setSelectedTeamValue(team: number) {
    this.filterByTeamSubject.next(team);
  }

  updateSearchCriteria(criteria: any) {
    this.searchCriteriaSubject.next(criteria);
  }
  /*getSelectedTeamValue() {
    return this.selectedTeam;
  }

  setSelectedTeamValue(ID: number) {
    this.selectedTeam = ID;
    this.filterByTeam();
  }

  filterByTeam() {
    let filterBy = this.teamsData.filter((team: any) => {
      console.log(team);
      if(team.ID == this.selectedTeam) {
        return team.title;
      }
    });
    console.log(filterBy);
    let filteredEmployeesData = [];
    this.employeeData.forEach((employee: any) => {
      if(employee.currentTeam == filterBy[0].title) {
        filteredEmployeesData.push(employee);
      }
    });
    console.log(filteredEmployeesData); 
  }*/


}

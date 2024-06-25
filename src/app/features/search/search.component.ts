import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../core/services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @Output() onClose = new EventEmitter()
  searchEmployeesForm: FormGroup;
  formData: any = {};
  faArrowLeft = faArrowLeft;
  intialFormValue: any = {}

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { 
    this.searchEmployeesForm = this.formBuilder.group({
      departmentID: [0],
      yearOfJoining: [0],
      location: [0]
    })
  }
  

  ngOnInit(): void {
    this.formData = this.dataService.getOrganizationalMetaData();
    
  }

  applyFilters() {
    const formValue = this.searchEmployeesForm.value;
    const searchCriteria = {
      ...formValue,
      departmentID: formValue.departmentID ? Number(formValue.departmentID) : undefined,
      yearOfJoining: formValue.yearOfJoining ? Number(formValue.yearOfJoining) : undefined,
      location: formValue.location == 0 ? undefined : formValue.location 
    }
    this.dataService.updateSearchCriteria(searchCriteria);
  }

  clearFilters() {
    this.dataService.updateSearchCriteria({});
  }

  closeSearchContainer() {
    this.onClose.emit(false)
  }
}

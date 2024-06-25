import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portal';

  renderSearchComponent: boolean = false;

  
  toggleSearchComponent(optionSelected: string) {
    

    if(optionSelected == "Search") {
      this.renderSearchComponent = true;
    }
  }

  closeSearchComponent(displayValue) {
    this.renderSearchComponent = displayValue;
  }
}

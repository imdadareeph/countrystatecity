
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counrtryUrl = 'http://localhost:3000';
  stateUrl = 'http://localhost:3000';
  cityUrl = 'http://localhost:3000';
  selectedCountry = 0;
  selectedState = 0;

  title = 'Select Country State and City';
  states = [];
  cities = [];


  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
      return item.state_id === Number(state_id)
    });
  }

  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }

  getStates() {
    return [
      { id: 1, country_id: 1, name: 'Assam' },
      { id: 2, country_id: 1, name: 'Delhi' },
      { id: 3, country_id: 2, name: 'San Francisco' },
      { id: 4, country_id: 2, name: 'Los Angeles' },
      { id: 5, country_id: 3, name: 'New South Wales' },
      { id: 6, country_id: 3, name: 'Victoria' },
    ]
  }

  getCity() {
    return [
      { id: 1, state_id: 1, name: 'Guwahati' },
      { id: 2, state_id: 1, name: 'Dibrugarh' },
      { id: 3, state_id: 1, name: 'Barpeta' },
      { id: 4, state_id: 1, name: 'Tinsukia' },
      { id: 5, state_id: 2, name: 'Alipur' },
      { id: 6, state_id: 2, name: 'Mustafabad' },
      { id: 7, state_id: 2, name: 'Sultanpur' },
      { id: 8, state_id: 2, name: 'Bankauli' },
      { id: 9, state_id: 3, name: 'SOMA' },
      { id: 10, state_id: 3, name: 'Richmond' },
      { id: 11, state_id: 3, name: 'Sunset' },
      { id: 12, state_id: 4, name: 'Burbank' },
      { id: 13, state_id: 4, name: 'Hollywood' },
      { id: 14, state_id: 5, name: 'Sunset' },
      { id: 15, state_id: 5, name: 'Burbank' },
      { id: 16, state_id: 5, name: 'Hollywood' },
      { id: 17, state_id: 6, name: 'Benalla' },
      { id: 18, state_id: 6, name: 'Melbourne' },
    ]
  }
}

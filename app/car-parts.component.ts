import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls:[ 'app/car-parts.component.css' ]
})
export class CarPartsComponent  { 
	carParts: CarPart[]; // find all this data in mocks.ts - keeps the file clean

	ngOnInit() { // initializes property values, makes it easier to test
		this.carParts = CARPARTS; // make array of data the application pulls from carParts come from the mock data, which uses the const CARPARTS
	}

	// See commented out lines below for how this method works
	
		// Using ES2015 =>
		totalCarParts() { 
			return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
		};

		// Same as above with different, slightly older style formatting
		// totalCarParts() { 
		// 	return this.carParts.reduce(function(prev, current) {return prev + current.inStock; }, 0);
		// }

		// Same as above, a little more readable and a traditional method style
		// totalCarParts() {
		// 	let sum = 0;
		// 	for(let carPart of this.carParts) {
		// 		sum += carPart.inStock;
		// 	}
		// 	return sum;
		// }
}

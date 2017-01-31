import { Component } from '@angular/core';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls:[ 'app/car-parts.component.css' ]
})
export class CarPartsComponent  { 
	carParts = [{
		"id": 1,
		"name": "Super Tires",
		"description": "These tires are the very best",
		"inStock": 5,
		"price": 4.99
	},
	{
		"id": 2,
		"name": "Reinforced Shocks",
		"description": "Shocks made from Kryptonite",
		"inStock": 4,
		"price": 9.99
	},
	{
		"id": 3,
		"name": "NOS button",
		"description": "Gives you the boost you need to win respect on the streets",
		"inStock": 0,
		"price": 16.99
	},
	{
		"id": 4,
		"name": "Padded seats",
		"description": "Super soft seats for a smooth ride",
		"inStock": 1,
		"price": 8.99
	}
	];

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

import { CarPart } from './car-part';

export const CARPARTS: CarPart[] = [{
		"id": 1,
		"name": "Super Tires",
		"description": "These tires are the very best",
		"inStock": 5,
		"price": 4.99,
		"image": "/images/tire.jpg",
		"featured": false
	},
	{
		"id": 2,
		"name": "Reinforced Shocks",
		"description": "Shocks made from Kryptonite",
		"inStock": 4,
		"price": 9.99,
		"image": "/images/shocks.jpg",
		"featured": false
	},
	{
		"id": 3,
		"name": "NOS button",
		"description": "Gives you the boost you need to win respect on the streets",
		"inStock": 0,
		"price": 16.99,
		"image": "/images/nos.jpg",
		"featured": true
	},
	{
		"id": 4,
		"name": "Padded seats",
		"description": "Super soft seats for a smooth ride",
		"inStock": 1,
		"price": 8.99,
		"image": "/images/seats.jpg",
		"featured": false
	}
	];
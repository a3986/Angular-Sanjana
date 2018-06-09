import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  visibleImages = [];
  public getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  public getData() {
    return MockData;
  }

  public getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [
  { "id": 1, "category": "c1", "caption": "caption 1", "img": "http://lorempixel.com/200/100/food/" },
  { "id": 2, "category": "c2", "caption": "caption 2", "img": "http://lorempixel.com/200/100/food/" },
  { "id": 3, "category": "c1", "caption": "caption 3", "img": "http://lorempixel.com/200/100/food/" },
  { "id": 4, "category": "c2", "caption": "caption 4", "img": "http://lorempixel.com/200/100/food/" }
];

const MockData: any = {
  "filteringOptions": [
    {
      "type": "multi",
      "filterBy": "category",
      "component": "toggle-button",
      "itemList": [
        {
          "name": "Veg",
          "code": "veg"
        },
        {
          "name": "Non Veg",
          "code": "nonveg"
        }
      ],
      "value": "veg"
    },
    {
      "type": "range",
      "filterBy": "price",
      "component": "slider",
      "componentConfig": {
        "label": "",
        "min": 100,
        "max": 600,
        "step": 50,
        "connect": true,
        "tooltips": [
          true,
          true
        ],
        "behaviour": "drag",
        "selectedRange": [100, 600]
      }
    },
    {
      "type": "eq",
      "filterBy": "base",
      "component": "select-box",
      "itemList": [
        {
          "name": "All",
          "code": "all"
        },
        {
          "name": "Regular",
          "code": "regular"
        },
        {
          "name": "Thin Crust",
          "code": "thincrust"
        },
        {
          "name": "Flat Bread",
          "code": "flatbread"
        },
        {
          "name": "Multigrain",
          "code": "multigrain"
        }
      ],
      "componentConfig": {
        "defaultText": "Select Pizza Base"
      }
    },
    {
      "type": "eq",
      "filterBy": "type",
      "component": "select-box",
      "itemList": [
        {
          "name": "All",
          "code": "all"
        },
        {
          "name": "Cheese Burst",
          "code": "cheeseburst"
        },
        {
          "name": "Cheese Topping",
          "code": "cheesetopping"
        },
        {
          "name": "No Cheese",
          "code": "nocheese"
        }
      ],
      "componentConfig": {
        "defaultText": "Select Pizza Type"
      }
    }
  ],
  "products": [
    {
      "id": 1,
      "category": "veg",
      "base": "regular",
      "type": "cheeseburst",
      "url": "assets/img/1.jpg",
      "price": 150,
      "displayValue": {
        "name": "Pizza 1",
        "category": "Veg",
        "base": "Regular",
        "type": "Cheese Burst"
      }
    },
    {
      "id": 2,
      "category": "veg",
      "base": "thin",
      "type": "cheeseburst",
      "url": "assets/img/1.jpg",
      "price": 250,
      "displayValue": {
        "name": "Pizza 2",
        "category": "Veg",
        "base": "Thin Crust",
        "type": "Cheese Burst"
      }
    },
    {
      "id": 3,
      "category": "nonveg",
      "base": "regular",
      "type": "cheesetopping",
      "url": "assets/img/2.jpg",
      "price": 350,
      "displayValue": {
        "name": "Pizza 3",
        "category": "Non Veg",
        "base": "Regular",
        "type": "Cheese Topping"
      }
    },
    {
      "id": 4,
      "category": "nonveg",
      "base": "multigrain",
      "type": "nocheese",
      "url": "assets/img/2.jpg",
      "price": 400,
      "displayValue": {
        "name": "Pizza 4",
        "category": "Non Veg",
        "base": "Multigrain",
        "type": "No Cheese"
      }
    },
    {
      "id": 5,
      "category": "veg",
      "base": "flatbread",
      "type": "cheesetopping",
      "url": "assets/img/1.jpg",
      "price": 575,
      "displayValue": {
        "name": "Pizza 5",
        "category": "Veg",
        "base": "Flatbread",
        "type": "Cheese Topping"
      }
    },
    {
      "id": 6,
      "category": "veg",
      "base": "thin",
      "type": "cheeseburst",
      "url": "assets/img/1.jpg",
      "price": 320,
      "displayValue": {
        "name": "Pizza 6",
        "category": "Veg",
        "base": "Thin Crust",
        "type": "Cheese Burst"
      }
    },
    {
      "id": 7,
      "category": "nonveg",
      "base": "regular",
      "type": "cheesetopping",
      "url": "assets/img/2.jpg",
      "price": 480,
      "displayValue": {
        "name": "Pizza 7",
        "category": "Non Veg",
        "base": "Regular",
        "type": "Cheese Topping"
      }
    },
    {
      "id": 8,
      "category": "nonveg",
      "base": "multigrain",
      "type": "nocheese",
      "url": "assets/img/2.jpg",
      "price": 150,
      "displayValue": {
        "name": "Pizza 8",
        "category": "Non Veg",
        "base": "Multigrain",
        "type": "No Cheese"
      }
    }
  ]
};

/* const MockData: any = {
  'categories': [
    {
      'categori_id': 1,
      'name': 'drinks'
    },
    {
      'categori_id': 2,
      'name': 'lunch'
    },
    {
      'categori_id': 3,
      'name': 'food'
    },
    {
      'categori_id': 4,
      'name': 'sea'
    }
  ],
  'products': [
    {
      'id': 1,
      'name': 'Lorem',
      'price': '60.000',
      'available': true,
      'best_seller': true,
      'categories': [
        1,
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 2,
      'name': 'ipsum',
      'price': '20.000',
      'available': false,
      'best_seller': false,
      'categories': [
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 3,
      'name': 'dolor',
      'price': '10.000',
      'available': true,
      'best_seller': true,
      'categories': [
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 4,
      'name': 'sit',
      'price': '35.000',
      'available': false,
      'best_seller': false,
      'categories': [
        1,
        2
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 5,
      'name': 'amet',
      'price': '12.000',
      'available': true,
      'best_seller': true,
      'categories': [
        1,
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 6,
      'name': 'consectetur',
      'price': '120.000',
      'available': true,
      'best_seller': false,
      'categories': [
        1,
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 7,
      'name': 'adipiscing',
      'price': '50.000',
      'available': false,
      'best_seller': false,
      'categories': [
        1,
        3
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 8,
      'name': 'elit',
      'price': '2000',
      'available': true,
      'best_seller': false,
      'categories': [
        1,
        3
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 9,
      'name': 'Maecenas',
      'price': '150.000',
      'available': true,
      'best_seller': true,
      'categories': [
        2,
        4
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      'id': 10,
      'name': 'eu',
      'price': '200.000',
      'available': false,
      'best_seller': true,
      'categories': [
        2,
        3
      ],
      'img': 'http://lorempixel.com/200/100/food/',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    }
  ]
}; */
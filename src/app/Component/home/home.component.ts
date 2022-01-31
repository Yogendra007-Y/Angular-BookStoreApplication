import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookList = [
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/images/dontMakeMeThink.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    }
  ]

}

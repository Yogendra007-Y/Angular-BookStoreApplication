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
      'bookImages':'./assets/bookImages/Image1.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image1.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image1.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image4.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image5.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image6.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image7.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image8.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    }
  ]

}

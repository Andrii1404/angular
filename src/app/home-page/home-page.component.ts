import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  startIndex = 0;
  Imagedata = [
    'https://cf.bstatic.com/images/hotel/max1024x768/162/162182692.jpg',
    'https://cf.bstatic.com/images/hotel/max1024x768/271/27122777.jpg',
    'https://cf.bstatic.com/images/hotel/max1024x768/174/174155818.jpg',
  ];

  constructor() {
  }

  ngOnInit() {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.FunctionSlide();
      this.Repeat();
    }, 3000);
  }

  FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }
}

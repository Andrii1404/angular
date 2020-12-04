import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../service/currency.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  startIndex = 0;
  currencyValue = null;
  currencyArray = [{
    name: 'Долар США',
    cc: 'USD'
  }, {
    name: 'Євро',
    cc: 'EUR'
  }, {
    name: 'Фунт стерлінгів',
    cc: 'GBP'
  }];
  selectedCurrency = 'USD';
  flatData = [
    {img: 'https://cf.bstatic.com/images/hotel/max1024x768/162/162182692.jpg', price: '5000'},
    {img: 'https://cf.bstatic.com/images/hotel/max1024x768/271/27122777.jpg', price: '8000'},
    {img: 'https://cf.bstatic.com/images/hotel/max1024x768/174/174155818.jpg', price: '6000'},
  ];

  constructor(public currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.Repeat();
    this.currencyService.getCurrencyData().subscribe(data => {
      this.currencyValue = data;
      this.priceInCurrency();
    });
  }

  priceInCurrency() {
    this.currencyValue.forEach((item) => {
      if (item.cc === this.selectedCurrency) {
        this.currencyValue = item.rate;
      }
    });
  }

  priceInCurrencyFunc(item) {
    return (item / this.currencyValue).toFixed(2);
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

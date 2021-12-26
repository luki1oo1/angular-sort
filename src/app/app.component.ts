import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Iarray {
  company: string,
  contact: string,
  countryName: string,
  yearOfBirth: number,
  points: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app-sort';

  public dataList: Iarray[] = [
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      countryName: 'Germany',
      yearOfBirth: 1998,
      points: 5
    }, {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      countryName: 'Mexico',
      yearOfBirth: 2000,
      points: 4
    }, {
      company: 'Amazon',
      contact: 'Jeff Bezos',
      countryName: 'USA',
      yearOfBirth: 1970,
      points: 2
    }, {
      company: 'Tesla',
      contact: 'Elon Musk',
      countryName: 'USA',
      yearOfBirth: 1980,
      points: 1
    }
  ];
  sortedData: Iarray[];

  constructor() {
    this.sortedData = this.dataList.slice();
  }

  sortData(sort: Sort) {
    const data = this.dataList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'company':
          return compare(a.company, b.company, isAsc);
        case 'contact':
          return compare(a.contact, b.contact, isAsc);
        case 'countryName':
          return compare(a.countryName, b.countryName, isAsc);
        case 'yearOfBirth':
          return compare(a.yearOfBirth, b.yearOfBirth, isAsc);
        case 'points':
          return compare(a.points, b.points, isAsc);
        default:
          return 0;
      }
    });
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}


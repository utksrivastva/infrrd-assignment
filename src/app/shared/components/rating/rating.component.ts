import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input() points: number;

  faStarUnfilled = farStar;
  faStarFilled = fasStar;
  faStarHalfStroke = faStarHalfStroke;

  maxPoints: number = 5;

  starRating: any[] = [];

  isRatingInFraction: boolean = false;
  absoluteValueOfRating: number;
  fractionalValueOfRating: number;

  ngOnChanges() {
    this.starRating = Array(this.maxPoints).fill(0);
    let ratingValue = this.points;
    if(String(ratingValue).length > 1) {
      this.isRatingInFraction = true;
      this.absoluteValueOfRating = Number(String(ratingValue).split(".")[0]);
      this.fractionalValueOfRating = Number(String(ratingValue).split(".")[1]);
    }
    else {
      this.isRatingInFraction = false;
    }
  }

  ngOnInit(): void {
  }

}

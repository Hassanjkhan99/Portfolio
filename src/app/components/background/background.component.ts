import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroSectionComponent} from "../hero-section/hero-section.component";

interface Star {
  top: number;
  left: number;
  isHovered:boolean;
  size:number;
  opacity:number;
  color: string;
  red: number;
  blue: number;
  green: number;
}
@Component({
  selector: 'cw-background',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements AfterViewInit {
  @ViewChildren('stars') starElements: QueryList<ElementRef>;
  @ViewChildren('starsContainer') starContainerElements: QueryList<ElementRef>;

  stars: Star[] = [];

  constructor() {
    this.generateStars(1000); // You can adjust the number of stars as needed
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateStarPositions();
    });
  }

  calculateStarPositions() {
    this.starElements.forEach((starEl, index) => {
      const starRect = starEl.nativeElement.getBoundingClientRect();
      this.stars[index].top = starRect.top;
      this.stars[index].left = starRect.left;
    });
  }

  generateStars(numStars: number) {
    for (let i = 0; i < numStars; i++) {
      this.createStar();
    }
  }

  createStar() {
    const starColor = this.getRandomColor();
    const star: Star = {
      top: this.getRandomPosition(),
      left: this.getRandomPosition(),
      size: this.getRandomSize(),
      opacity: this.getRandomOpacity(),
      color: starColor,
      isHovered: false,
      red: parseInt(starColor.slice(1, 3), 16),
      green: parseInt(starColor.slice(3, 5), 16),
      blue: parseInt(starColor.slice(5, 7), 16),
    };
    this.stars.push(star);
  }
  onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.stars.forEach((star) => {
      const distance = Math.sqrt((mouseX - star.left) ** 2 + (mouseY - star.top) ** 2);
      const maxDistance = 100; // You can adjust the distance for highlighting

      star.isHovered = distance < maxDistance;
      console.log(star.isHovered)
    });
  }

  private getRandomPosition() {
    return Math.random() * Math.max(window.innerWidth, window.innerHeight);
  }

  private getRandomSize() {
    return Math.random() * 10; // Adjust the size range as needed
  }

  private getRandomOpacity() {
    return Math.random() ; // Adjust the opacity range as needed
  }

  private getRandomColor() {
    const colors = ['#ffffff', 'rgb(217 95 228)', '#aabbff', '#ffd21f', '#dfd21f', 'rgb(53 70 142)']; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
  }

  getBoxShadow(star: Star) {
    return `box-shadow: 0 0 20px 7px ${star.color}`
  }

  protected readonly Math = Math;
}

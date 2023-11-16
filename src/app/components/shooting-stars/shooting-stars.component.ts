import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Star {
  top: number;
  left: number;
  size: number;
  opacity: number;
  color: string;
  red: number;
  green: number;
  blue: number;
}

@Component({
  selector: 'cw-shooting-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shooting-stars.component.html',
  styleUrls: ['./shooting-stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShootingStarsComponent implements OnInit {

  shootingStars: Star[] = [];

  constructor() {
    this.generateShootingStars(20); // You can adjust the number of shooting stars as needed
  }

  ngOnInit(): void {}

  generateShootingStars(numStars: number) {
    for (let i = 0; i < numStars; i++) {
      const starColor = this.getRandomColor();
      const star: Star = {
        top: this.getRandomPosition(),
        left: this.getRandomPosition(),
        size: this.getRandomSize(),
        opacity: 1, // Shooting stars are always fully visible
        color: starColor,
        red: parseInt(starColor.slice(1, 3), 16),
        green: parseInt(starColor.slice(3, 5), 16),
        blue: parseInt(starColor.slice(5, 7), 16)
      };
      this.shootingStars.push(star);
    }
  }

  private getRandomPosition() {
    return Math.random() * Math.max(window.innerWidth, window.innerHeight);
  }

  private getRandomSize() {
    return Math.random() * 3 + 3; // Adjust the size range as needed
  }

  private getRandomColor() {
    const colors = ['#ffffff', 'rgb(166,0,178)', '#0032ff', '#ffcd00', '#dfd21f', 'rgb(53 70 142)'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}

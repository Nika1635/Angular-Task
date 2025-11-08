import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wheel',
  imports: [FormsModule],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})
export class WheelComponent {
  public rotation: number = 0
  public error: string = ''
  public num!: number
  
  spin() {
    if (!this.num || this.num < 1 || this.num > 10) {
      this.error = "აღნიშნული სექტორი ვერ მოიძებნა"
      return
    }
    this.error = ''
    const sectorAngle = 36
    this.rotation = 720 - (this.num - 1) * sectorAngle + 50
  }
}

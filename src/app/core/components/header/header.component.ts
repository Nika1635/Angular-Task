import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  currentTimeData: string = ''

  ngOnInit(): void {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000);
  }

  updateTime(){
    const time = new Date()
    this.currentTimeData = time.toLocaleString()
  }

}

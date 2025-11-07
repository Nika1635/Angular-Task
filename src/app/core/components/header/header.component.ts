import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
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

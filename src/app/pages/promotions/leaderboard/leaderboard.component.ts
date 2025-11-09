import { Component } from '@angular/core';
import { LEADERBOARD_DATA, LeaderboardItem, WeekType } from '../../../core/models/leaderboard.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  leaderboardData: LeaderboardItem[] = LEADERBOARD_DATA
  filteredData: LeaderboardItem[] = this.leaderboardData

  weekTypes: (WeekType | 'ALL')[] = ['I', 'II', 'III', 'IV', 'ALL']
  activeWeek: WeekType | 'ALL' = 'ALL'

  filterWeek(week: WeekType | 'ALL') {
    this.activeWeek = week;
    if (week === 'ALL') {
      this.filteredData = this.leaderboardData
    } else {
      this.filteredData = this.leaderboardData.filter(item => item.week === week)
    }
  }
}
export type WeekType = "I" | "II" | "III" | "IV";

export interface LeaderboardItem {
  customerId: number;
  loginName: string;
  place: number;
  week: WeekType;
}


export const LEADERBOARD_DATA: LeaderboardItem[] = [
  { customerId: 1, loginName: 'Alice', place: 1, week: 'I' },
  { customerId: 2, loginName: 'Bob', place: 2, week: 'I' },
  { customerId: 3, loginName: 'Charlie', place: 3, week: 'I' },
  { customerId: 4, loginName: 'David', place: 4, week: 'I' },
  { customerId: 5, loginName: 'Eve', place: 5, week: 'I' },
  { customerId: 6, loginName: 'Frank', place: 6, week: 'I' },
  { customerId: 7, loginName: 'Grace', place: 7, week: 'I' },
  { customerId: 8, loginName: 'Hank', place: 8, week: 'I' },
  { customerId: 9, loginName: 'Ivy', place: 9, week: 'I' },
  { customerId: 10, loginName: 'Jack', place: 10, week: 'I' },

  { customerId: 11, loginName: 'Liam', place: 1, week: 'II' },
  { customerId: 12, loginName: 'Mia', place: 2, week: 'II' },
  { customerId: 13, loginName: 'Noah', place: 3, week: 'II' },
  { customerId: 14, loginName: 'Olivia', place: 4, week: 'II' },
  { customerId: 15, loginName: 'Pete', place: 5, week: 'II' },
  { customerId: 16, loginName: 'Quinn', place: 6, week: 'II' },
  { customerId: 17, loginName: 'Rita', place: 7, week: 'II' },
  { customerId: 18, loginName: 'Sam', place: 8, week: 'II' },
  { customerId: 19, loginName: 'Tina', place: 9, week: 'II' },
  { customerId: 20, loginName: 'Uma', place: 10, week: 'II' },

  { customerId: 21, loginName: 'Victor', place: 1, week: 'III' },
  { customerId: 22, loginName: 'Wendy', place: 2, week: 'III' },
  { customerId: 23, loginName: 'Xander', place: 3, week: 'III' },
  { customerId: 24, loginName: 'Yara', place: 4, week: 'III' },
  { customerId: 25, loginName: 'Zane', place: 5, week: 'III' },
  { customerId: 26, loginName: 'Aaron', place: 6, week: 'III' },
  { customerId: 27, loginName: 'Bella', place: 7, week: 'III' },
  { customerId: 28, loginName: 'Carl', place: 8, week: 'III' },
  { customerId: 29, loginName: 'Diana', place: 9, week: 'III' },
  { customerId: 30, loginName: 'Ethan', place: 10, week: 'III' },

  { customerId: 31, loginName: 'Fiona', place: 1, week: 'IV' },
  { customerId: 32, loginName: 'George', place: 2, week: 'IV' },
  { customerId: 33, loginName: 'Holly', place: 3, week: 'IV' },
  { customerId: 34, loginName: 'Ian', place: 4, week: 'IV' },
  { customerId: 35, loginName: 'Jane', place: 5, week: 'IV' },
  { customerId: 36, loginName: 'Kyle', place: 6, week: 'IV' },
  { customerId: 37, loginName: 'Lara', place: 7, week: 'IV' },
  { customerId: 38, loginName: 'Mike', place: 8, week: 'IV' },
  { customerId: 39, loginName: 'Nora', place: 9, week: 'IV' },
  { customerId: 40, loginName: 'Owen', place: 10, week: 'IV' },
]
import { Component, OnInit } from '@angular/core';
import { LeaderboardItem } from '../../models/Leaderboard.interface';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit {

  post!: LeaderboardItem[];

  constructor(private lbService: LeaderboardService){}

  ngOnInit() {
    console.log("Leaderboard Fetch");
    this.lbService.getLeader().subscribe(posts => {
      this.post = posts
      this.lbService.LeaderData = posts
      console.log(this.post);
    });
  }


}

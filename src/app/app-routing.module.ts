import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/dynamic/login-page/login-page.component';
import { HomePageComponent } from './components/static/home-page/home-page.component';
import { NearbyResourcesPageComponent } from './components/static/nearby-resources-page/nearby-resources-page.component';

import { CalendarPageComponent } from './components/dynamic/calendar-page/calendar-page.component';
import { ChatPageComponent } from './components/dynamic/chat-page/chat-page.component';
import { LeaderboardPageComponent } from './components/dynamic/leaderboard-page/leaderboard-page.component';

import { DormPageComponent } from './components/dynamic/dorm-page/dorm-page.component';
import { FacilitiesPageComponent } from './components/dynamic/facilities-page/facilities-page.component';
import { FacultyPageComponent } from './components/dynamic/faculty-page/faculty-page.component';
import { HamPageComponent } from './components/dynamic/ham-page/ham-page.component';


const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "resources", component: NearbyResourcesPageComponent },
  { path: "calendar", component: CalendarPageComponent },
  { path: "chat", component: ChatPageComponent },
  { path: "leaderboard", component: LeaderboardPageComponent },
  { path: "dorm", component: DormPageComponent },
  { path: "facilities", component: FacilitiesPageComponent },
  { path: "faculty", component: FacultyPageComponent },
  { path: "ham", component: HamPageComponent },

  { path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

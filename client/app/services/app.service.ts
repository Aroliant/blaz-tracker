import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  API_URL = environment.API_URL

  constructor(private http: HttpClient, private router: Router) {
  }

  createApp(data) {
    return this.http.post(this.API_URL + "/apps/create", data)
  }

  updateApp(data){
    return this.http.put(this.API_URL + `/apps/${data.appID}`, data)
  }

  getApps() {
    return this.http.get(this.API_URL + "/apps")
  }

  getApp(appID) {
    return this.http.get(this.API_URL + "/apps/" + appID)
  }

  searchUser(toSearchInUser){
    // return this.http.get(this.API_URL + "/users/search/" + toSearchInUser);
    return this.http.get(this.API_URL + "/users")
  }

  addUserInApp(appID, userID) {
    return this.http.put(this.API_URL + "/apps/" + appID + "/user/add", { "userID": userID });
  }

  searchTeam(toSearchInTeam){
    return this.http.get(this.API_URL + "/teams/search/" + toSearchInTeam);
  }

  addTeamInApp(appID, teamID) {
    return this.http.put(this.API_URL + "/apps/" + appID + "/team/add", { "teamID": teamID });
  }

}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

enum Analytics{
  DATA_POINTS = 'data-points',
  REGISTERED_USERS = 'registered-clients',
  PEOPLE_ANALYTICS = 'people',
  TOP_AGE_GROUP_COUNT = 'people/age-groups',
  VEHICLE_ANALYTICS = 'vehicle',
  VEHICLE_TYPE_COUNT = 'vehicle/type'
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private API_BASE_URL = 'https://api.caltondatx.com/api/v1';
  private API_KEY = 'w3bs1t3@_j5gnxrd1lcxyrktew3x1euy8*';
  private HEADERS = new HttpHeaders({ 'api-key': this.API_KEY });
  constructor(private http: HttpClient) { }

  fetchAPI(api: Analytics){
    return this.http.get(`${this.API_BASE_URL}/website/${api}`, { 'headers' : this.HEADERS });
  }
  getDataPoints = () => this.fetchAPI(Analytics.DATA_POINTS);

  getRegisteredUsers = () => this.fetchAPI(Analytics.REGISTERED_USERS);

  getPeopleAnalytics = () => this.fetchAPI(Analytics.PEOPLE_ANALYTICS);
  getTopAgeGroup = () => this.fetchAPI(Analytics.TOP_AGE_GROUP_COUNT);
  getVehicleAnalytics = () => this.fetchAPI(Analytics.VEHICLE_ANALYTICS);
  getVehicleTypeCount = () => this.fetchAPI(Analytics.VEHICLE_TYPE_COUNT);
}

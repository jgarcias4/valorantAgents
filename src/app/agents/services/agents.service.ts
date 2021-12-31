import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agent, SearchAgentsResponse } from '../interfaces/agents.interface';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  private url: string = 'https://valorant-api.com/v1/agents';

  public results: Agent[] = [];

  constructor(private http: HttpClient) { }

  searchAgents() {
    this.http.get<SearchAgentsResponse>(this.url)
      .subscribe((resp) => {
        this.results = resp.data;
        console.log(resp.data);
      });
  }



}

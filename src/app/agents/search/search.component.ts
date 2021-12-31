import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private agentsService: AgentsService) { }

  // search() {
  //   // const agentId: string = '5f8d3a7f-467b-97f3-062c-13acf203c006';

  //   this.agentsService.searchAgents();

  // }

}

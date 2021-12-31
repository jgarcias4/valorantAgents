import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../services/agents.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  get results() {
    return this.agentService.results;
  }

  constructor(private agentService: AgentsService) { }

  ngOnInit(): void {
    this.agentService.searchAgents();
  }


}

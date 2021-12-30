import { Component } from '@angular/core';

interface Agent {
  agentName: string;
  description: string;
  displayName: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{

  agents: Agent [] = [
    {
      agentName: 'Breach',
      description: 'Habilidades',
      displayName: 'Iniciador'
    },
    {
      agentName: 'Raze',
      description: 'Habilidades',
      displayName: 'Duelista'
    }

  ];

  constructor() { }


}

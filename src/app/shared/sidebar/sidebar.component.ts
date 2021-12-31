import { Component } from '@angular/core';
import { AgentsService } from 'src/app/agents/services/agents.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private agentsService: AgentsService) { }

  // search(query: string){
  //   this.agentsService.searchAgents(query);
  // }

}

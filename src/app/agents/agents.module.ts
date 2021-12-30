import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsPageComponent } from './agents-page/agents-page.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    AgentsPageComponent,
    ResultsComponent
  ],
  exports: [
    AgentsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgentsModule { }

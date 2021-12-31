import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsPageComponent } from './agents-page/agents-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AgentsPageComponent,
    ResultsComponent,
    SearchComponent
  ],
  exports: [
    AgentsPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgentsModule { }

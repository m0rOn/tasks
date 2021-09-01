import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as PlotlyJS from 'plotly.js-dist';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PerformanceWidgetComponent } from './performance-widget/performance-widget.component';
import { PieChartWidgetComponent } from './pie-chart-widget/pie-chart-widget.component';
import { FilterNamePipe } from './performance-widget/pipe/filter-name.pipe';
@NgModule({
  declarations: [
    DashboardComponent,
    PerformanceWidgetComponent,
    PieChartWidgetComponent,
    FilterNamePipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PlotlyModule,
  ]
})
export class DashboardModule { }

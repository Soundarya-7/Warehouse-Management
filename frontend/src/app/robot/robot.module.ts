import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotComponent } from './robot.component';
import {RouterModule} from '@angular/router';
import { RobotLogsComponent } from '../robot-logs/robot-logs.component'


@NgModule({
  declarations: [RobotComponent, RobotLogsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RobotModule { }

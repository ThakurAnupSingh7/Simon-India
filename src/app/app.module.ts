import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { SideNavbarComponent } from './Layout/side-navbar/side-navbar.component';
import { PersionalInformationComponent } from './Employee-Information/persional-information/persional-information.component';
import { OfficialInformationComponent } from './Employee-Information/official-information/official-information.component';
import { LeaveApplicationComponent } from './Leave-Management/leave-application/leave-application.component';
import { LeaveBalanceComponent } from './Leave-Management/leave-balance/leave-balance.component';
import { LeaveDetailsComponent } from './Leave-Management/leave-details/leave-details.component';
import { AvailedLeaveComponent } from './Leave-Management/availed-leave/availed-leave.component';
import { LeavePlanComponent } from './Leave-Management/leave-plan/leave-plan.component';
import { CalenderHolidaysComponent } from './Leave-Management/calender-holidays/calender-holidays.component';
import { InOutLogsComponent } from './Leave-Management/in-out-logs/in-out-logs.component';
import { TimesheetComponent } from './Timesheet-Management/timesheet/timesheet.component';
import { ApprovedTimesheetComponent } from './Timesheet-Management/approved-timesheet/approved-timesheet.component';
import { TimesheetApprovalComponent } from './Timesheet-Management/timesheet-approval/timesheet-approval.component';
import { TimesheetFiltersComponent } from './Timesheet-Management/timesheet-filters/timesheet-filters.component';
import { DeputationDetailsComponent } from './Timesheet-Management/deputation-details/deputation-details.component';
import { ProjectDetailsComponent } from './Project-Management/project-details/project-details.component';
import { DpCodesManagementComponent } from './Project-Management/dp-codes-management/dp-codes-management.component';
import { DprManagementComponent } from './Project-Management/dpr-management/dpr-management.component';
import { DisciplineMappingComponent } from './Project-Management/discipline-mapping/discipline-mapping.component';
import { DepartmentMappingComponent } from './Project-Management/department-mapping/department-mapping.component';
import { EmpDprMappingComponent } from './Project-Management/emp-dpr-mapping/emp-dpr-mapping.component';
import { ProjectReportsComponent } from './Project-Management/project-reports/project-reports.component';
import { LeaveTypeManagementComponent } from './Configurations/leave-type-management/leave-type-management.component';
import { CompanyLeaveCalenderComponent } from './Configurations/company-leave-calender/company-leave-calender.component';
import { LeaveAdjustmentComponent } from './Configurations/leave-adjustment/leave-adjustment.component';
import { ManagerMappingComponent } from './Configurations/manager-mapping/manager-mapping.component';
import { ShiftManagementComponent } from './Configurations/shift-management/shift-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Layout/material.module';


import {MatExpansionModule} from '@angular/material/expansion';
import { ButtonHeaderComponent } from './Layout/button-header/button-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    PersionalInformationComponent,
    OfficialInformationComponent,
    LeaveApplicationComponent,
    LeaveBalanceComponent,
    LeaveDetailsComponent,
    AvailedLeaveComponent,
    LeavePlanComponent,
    CalenderHolidaysComponent,
    InOutLogsComponent,
    TimesheetComponent,
    ApprovedTimesheetComponent,
    TimesheetApprovalComponent,
    TimesheetFiltersComponent,
    DeputationDetailsComponent,
    ProjectDetailsComponent,
    DpCodesManagementComponent,
    DprManagementComponent,
    DisciplineMappingComponent,
    DepartmentMappingComponent,
    EmpDprMappingComponent,
    ProjectReportsComponent,
    LeaveTypeManagementComponent,
    CompanyLeaveCalenderComponent,
    LeaveAdjustmentComponent,
    ManagerMappingComponent,
    ShiftManagementComponent,
    ButtonHeaderComponent,
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

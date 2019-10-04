import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [

  //Employee-Information
{path:'', redirectTo:'Persional-Information',pathMatch:'full', },
{path:'Persional-Information', component:PersionalInformationComponent},
{path:'Official-Information', component:OfficialInformationComponent},



//Leave-Management
{path:'Leave-Application', component:LeaveApplicationComponent},
{path:'Leave-Balance', component:LeaveBalanceComponent},
{path:'Leave-Details', component:LeaveDetailsComponent},
{path:'Availed-Leave', component: AvailedLeaveComponent},
{path:'LeavePlan', component:LeavePlanComponent},
{path:'Calender-Holidays', component:CalenderHolidaysComponent},
{path:'In-Out-Logs', component:InOutLogsComponent},


//Timesheet-Management
{path:'Timesheet', component:TimesheetComponent},
{path:'Approved-Timesheet', component:ApprovedTimesheetComponent},
{path:'Timesheet-Approval', component:TimesheetApprovalComponent},
{path:'Timesheet-Filters', component:TimesheetFiltersComponent},
{path:'Deputation-Details', component:DeputationDetailsComponent},


//Project-Management
{path:'Project-Details', component:ProjectDetailsComponent},
{path:'DpCodes-Management', component:DpCodesManagementComponent},
{path:'Dpr-Management', component:DprManagementComponent},
{path:'Discipline-Mapping', component:DisciplineMappingComponent},
{path:'Department-Mapping', component:DepartmentMappingComponent},
{path:'Emp-Dpr-Mapping', component:EmpDprMappingComponent},
{path:'Project-Reports', component:ProjectReportsComponent},


//Configuration
{path:'Leave-Type-Management', component:LeaveTypeManagementComponent},
{path:'Company-Leave-Calender', component:CompanyLeaveCalenderComponent},
{path:'Leave-Adjustment', component:LeaveAdjustmentComponent},
{path:' Manager-Mapping', component: ManagerMappingComponent},
{path:'Shift-Management', component:ShiftManagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

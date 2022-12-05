import { NgModule} from "@angular/core";
import {Routes , RouterModule } from "@angular/router";
import {StudentListComponent} from "./student-list/student-list.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";
import {StudentViewComponent} from "./student-view/student-view.component";

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'view-student/:id', component: StudentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

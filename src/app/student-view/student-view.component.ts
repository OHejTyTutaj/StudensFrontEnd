import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../student";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  student: Student = new Student();
  id: number;

  constructor(private studentService: StudentService,
              private router: ActivatedRoute,
              private route: Router) {
  }


  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe( data => {
      this.student = data;
      console.log(this.student.emailrId);
    }, error => console.log(error));
  }

  onSubmit() {
    this.goToStudentList();
  }

  goToStudentList() {
    this.route.navigate(['/students']);
  }

}

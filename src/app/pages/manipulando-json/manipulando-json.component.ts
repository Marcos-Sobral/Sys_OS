import { Component, OnInit } from '@angular/core';
import studentsData from '../../students.json';

interface Student{
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent implements OnInit {

  students: Student[] = studentsData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.students);
  }

}

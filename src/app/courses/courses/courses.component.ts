import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'angular', category: 'front-end'},
    {_id: '2', name: 'react', category: 'front-end'},
    {_id: '3', name: 'vue', category: 'front-end'},
    {_id: '4', name: 'node.js', category: 'back-end'},
    {_id: '5', name: 'express', category: 'back-end'},
    {_id: '6', name: 'mongodb', category: 'database'},
    {_id: '7', name: 'python', category: 'programming'},
    {_id: '8', name: 'java', category: 'programming'},
  ];

  displayedColumns = ['name', 'category']

  constructor() {
  }

  ngOnInit(): void {

  }

}

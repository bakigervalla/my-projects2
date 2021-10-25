import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
// import { projects } from '../models/mock-projects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getJSON().subscribe((data) => {
      this.projects = data;
    });
  }

  public getJSON(): Observable<any> {
    const requestOptions = Object.assign({}, { responseType: 'json' });

    return this.http.get('/assets/data.json');
  }
}

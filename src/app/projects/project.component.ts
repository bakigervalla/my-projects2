import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ProjectListComponent } from '../projects/project-list.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  project: Project | undefined;

  @ViewChild(ProjectListComponent) projectViewChild: ProjectListComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.projectViewChild);
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('projectId'));

    // Find the project that correspond with the id provided in route.
    this.project = this.projectViewChild.projects.find(
      (project) => project.id === projectIdFromRoute
    );
  }
}

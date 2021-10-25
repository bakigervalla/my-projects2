import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './projects/project.component';
import { ProjectListComponent } from './projects/project-list.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'projects/:projectId', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

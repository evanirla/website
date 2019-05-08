import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetenciesComponent } from './competencies/competencies.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
}, {
    path: 'competencies',
    component: CompetenciesComponent
}, {
    path: 'education',
    component: EducationComponent
}, {
    path: 'experience',
    component: ExperienceComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

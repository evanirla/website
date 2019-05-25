import { Component, OnInit } from '@angular/core';
import { CompetenciesComponent } from '../competencies/competencies.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

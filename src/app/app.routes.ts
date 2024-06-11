import { Routes } from '@angular/router';
import { HomeComponent } from './component/screen/home/home.component';
import { RoutingUtil } from './util/routing-util';
import { StudyDurationFormComponent } from './component/screen/study-duration-form/study-duration-form.component';

export const routes: Routes = [
  { 
    path: '', redirectTo: RoutingUtil.home, pathMatch: 'full' 
  },
  { 
    path: RoutingUtil.home, title:"Bienvenue", component: HomeComponent 
  },
  { 
    path: RoutingUtil.studyDurationForm, title:"Formulaire", component: StudyDurationFormComponent 
  },

  { 
    path: RoutingUtil.sectorFamiliesFormScreen, title:"Formulaire", component: HomeComponent 
  },
];

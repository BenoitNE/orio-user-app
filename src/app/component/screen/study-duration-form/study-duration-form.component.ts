import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingUtil } from '../../../util/routing-util';

@Component({
  selector: 'app-study-duration-form',
  standalone: true,
  imports: [],
  templateUrl: './study-duration-form.component.html',
  styleUrl: './study-duration-form.component.css'
})
export class StudyDurationFormComponent {
  form: FormGroup | undefined;
  responses: string[] = [];
  selectedItems: string[] = [];
  itemQuantityMax: number = 3;
  title: string = "Quelle durée d'études envisageriez-vous ? Sélectionnez-en au moins une.";
  dialogError: string = "Le nombre d'items sélectionnés est incorrect.";

  mappingItems: { [key: string]: string } = {
    "Courte (Bac, inférieur au Bac ou sans diplôme)": "0",
    "Moyenne (Bac +2, Bac +3)": "1",
    "Longue (Bac +5 et supérieur)": "2"
  };

  forwardScreenPath: string = RoutingUtil.sectorFamiliesFormScreen;

  constructor(private router: Router) {}


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { countries, Country } from 'src/dev-data/countries';
import { Gender, genders } from 'src/dev-data/genders';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  surveyForm!: FormGroup;
  countries: Country[] = countries;
  genders: Gender[] = genders;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: '',
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      termsAndCond: [false, [Validators.requiredTrue]],
    });
  }

  get firstName() {
    return this.surveyForm.get('firstName');
  }

  get lastName() {
    return this.surveyForm.get('lastName');
  }

  get address1() {
    return this.surveyForm.get('address1');
  }

  get address2() {
    return this.surveyForm.get('address2');
  }

  get city() {
    return this.surveyForm.get('city');
  }

  get country() {
    return this.surveyForm.get('country');
  }

  get birthday() {
    return this.surveyForm.get('birthday');
  }

  get gender() {
    return this.surveyForm.get('gender');
  }

  get termsAndCond() {
    return this.surveyForm.get('termsAndCond');
  }

  onSubmit() {
    console.log(this.surveyForm.value);
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}

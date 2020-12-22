import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { pairwise, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  email: string;
  nama: string;
  gender: string;
  umur: number;

  jobtitle: string;
  rform = new FormGroup({
    inputOne: new FormControl(),
    inputUmur: new FormControl(),
    passwordInput: new FormControl(),
    emailChange: new FormControl(),
    JobTitle: new FormControl(),
  });
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {}

  onOneChange(e) {
    this.nama = e.target.value
    // this.rform
    //   .get('inputOne')
    //   .valueChanges.pipe(pairwise())
    //   .subscribe(([prev, next]: [any, any]) => (this.nama = next));
  }

  umurChange(e) {
    console.log(e.target.value)
    this.umur = e.target.value
  }

  passwordChagne(e) {
      this.gender = e.target.value
  }

  OnEmailChange(e) {
    this.email = e.target.value
    // this.rform
    //   .get('emailChange')
    //   .valueChanges.pipe(pairwise())
    //   .subscribe(([prev, next]: [any, any]) => this.email = next);
  }

  JobTitle(e) {
    this.jobtitle = e.target.value
    // this.rform
    //   .get('JobTitle')
    //   .valueChanges.pipe(pairwise())
    //   .subscribe(([prev, next]: [any, any]) => this.jobtitle = next);
  }

  onSubmit(e) {
    this.authService.postData(this.nama, this.email, this.umur, this.gender, this.jobtitle).subscribe((data) => console.log(data))
  }
}

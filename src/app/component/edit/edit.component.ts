import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  data = {
    nama: '',
    umur: '',
    gender: '',
    email: '',
    jobtitle: '',
  };
  rform = new FormGroup({
    inputOne: new FormControl(),
    inputUmur: new FormControl(),
    passwordInput: new FormControl(),
    emailChange: new FormControl(),
    jobtitle: new FormControl(),
  });

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log((this.route.params as any)._value.id);
    this.authService
      .getById((this.route.params as any)._value.id)
      .subscribe((data) => {
        this.data.umur = data.umur;
        this.data.nama = data.nama;
        this.data.gender = data.gender;
        this.data.email = data.email;
        this.data.jobtitle = data.jobtitle;
      });
  }

  EditSubmit() {
    console.log(this.data);
    this.authService
      .editData(this.data, (this.route.params as any)._value.id)
      .subscribe((data) => window.location.href = "/employe");
  }
  jobtitle(e) {
    this.data.jobtitle = e.target.value;
  }

  onEmailChange(e) {
    this.data.email = e.target.value;
  }

  GenderChange(e) {
    this.data.gender = e.target.value;
  }

  umurChange(e) {
    this.data.umur = e.target.value;
  }

  namaChange(e) {
    this.data.nama = e.target.value
  }
}

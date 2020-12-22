import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication.service';
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent implements OnInit {
  data: any[];
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.authService.getData().subscribe((data) => (this.data = data));
  }
  ngOnInit(): void {
    // this.authService.getData()
  }

  // onClick() {
  //   this.authService.postData().subscribe((data) => console.log(data));
  // }

  onHapus(id: string) {
    this.authService.deleteData(id).subscribe((data) => window.location.reload())
  }
}

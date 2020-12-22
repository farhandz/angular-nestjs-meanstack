import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  file: any;
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  uploadFile(e) {
    this.file = e.target.files[0];
  }

  UploadSob() {
    const fd = new FormData();
    fd.append('file', this.file);
    this.authService.uploadFile((this.route.params as any)._value.id, fd).subscribe(data => window.location.href = "/employe")
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

export interface LoginForm {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  login(LoginForm: LoginForm) {
    return this.http
      .post<any>('http://localhost:3000/user/login', { email:LoginForm.email, password: LoginForm.password })
      .pipe(
        map((token) => {
          localStorage.setItem('token', token.access_token);
          return token;
        })
      );
  }
  getData() {
    return this.http
      .get<any>('http://localhost:3333/employee', {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YzBlNmNiMWY0ZjMyNDg0N2Y0ZjUiLCJlbWFpbCI6ImFzYXNAZ21haWwuY29tIiwibmFtYSI6ImFqYnNqbmphYnMiLCJ1bXVyIjoxMTksImdlbmRlciI6InJhaGFzaWEiLCJqb2J0aXRsZSI6ImFianNqYmFqcyIsInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZ0YldGeWFtOTZNRGxBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpBNE5USXhORFV3TENKbGVIQWlPakUyTkRBd05UYzBOVEI5LnpabWVyQXVDdWViM3lIdHRDbFBCX1dZTk10dGdEVTZRZkFWdTU2MXo4M2ciLCJfX3YiOjAsImltYWdlIjoiY2U5NTAyZmZhYjA1Njc5ZGZiODYyYTE1NDE5ZGEzZmUuanBnIiwiaWF0IjoxNjA4NTM1NTM0LCJleHAiOjE2MDk1MzU1MzR9.Jdr_urB1Wts80fjPaYFsuWhIwxL14-xNxX4030vL9xk`,
        },
      })
      .pipe(
        map((dt: any) => {
          return dt;
        })
      );
  }

  postData(name, email, umur, gender, jotitle ) {
    const parse  = parseInt(umur)
    console.log(typeof umur)

    return this.http
      .post(
        'http://localhost:3333/employee',
        {
          nama: name,
          email: email,
          umur: umur,
          gender: gender,
          jobtitle: jotitle,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YzBlNmNiMWY0ZjMyNDg0N2Y0ZjUiLCJlbWFpbCI6ImFzYXNAZ21haWwuY29tIiwibmFtYSI6ImFqYnNqbmphYnMiLCJ1bXVyIjoxMTksImdlbmRlciI6InJhaGFzaWEiLCJqb2J0aXRsZSI6ImFianNqYmFqcyIsInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZ0YldGeWFtOTZNRGxBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpBNE5USXhORFV3TENKbGVIQWlPakUyTkRBd05UYzBOVEI5LnpabWVyQXVDdWViM3lIdHRDbFBCX1dZTk10dGdEVTZRZkFWdTU2MXo4M2ciLCJfX3YiOjAsImltYWdlIjoiY2U5NTAyZmZhYjA1Njc5ZGZiODYyYTE1NDE5ZGEzZmUuanBnIiwiaWF0IjoxNjA4NTM1NTM0LCJleHAiOjE2MDk1MzU1MzR9.Jdr_urB1Wts80fjPaYFsuWhIwxL14-xNxX4030vL9xk`,
          },
        }
      )
      .pipe(
        map((dt: any) => {
          return dt;
        })
      );
  }

  deleteData(id: string) {
    return this.http.delete(`http://localhost:3333/employee/${id}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YzBlNmNiMWY0ZjMyNDg0N2Y0ZjUiLCJlbWFpbCI6ImFzYXNAZ21haWwuY29tIiwibmFtYSI6ImFqYnNqbmphYnMiLCJ1bXVyIjoxMTksImdlbmRlciI6InJhaGFzaWEiLCJqb2J0aXRsZSI6ImFianNqYmFqcyIsInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZ0YldGeWFtOTZNRGxBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpBNE5USXhORFV3TENKbGVIQWlPakUyTkRBd05UYzBOVEI5LnpabWVyQXVDdWViM3lIdHRDbFBCX1dZTk10dGdEVTZRZkFWdTU2MXo4M2ciLCJfX3YiOjAsImltYWdlIjoiY2U5NTAyZmZhYjA1Njc5ZGZiODYyYTE1NDE5ZGEzZmUuanBnIiwiaWF0IjoxNjA4NTM1NTM0LCJleHAiOjE2MDk1MzU1MzR9.Jdr_urB1Wts80fjPaYFsuWhIwxL14-xNxX4030vL9xk`,
      },
    }).pipe(
      map((dt: any) => {
        return dt
      })
    )
  }

  getById(id) {
    return this.http
      .get(`http://localhost:3333/employee/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YzBlNmNiMWY0ZjMyNDg0N2Y0ZjUiLCJlbWFpbCI6ImFzYXNAZ21haWwuY29tIiwibmFtYSI6ImFqYnNqbmphYnMiLCJ1bXVyIjoxMTksImdlbmRlciI6InJhaGFzaWEiLCJqb2J0aXRsZSI6ImFianNqYmFqcyIsInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZ0YldGeWFtOTZNRGxBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpBNE5USXhORFV3TENKbGVIQWlPakUyTkRBd05UYzBOVEI5LnpabWVyQXVDdWViM3lIdHRDbFBCX1dZTk10dGdEVTZRZkFWdTU2MXo4M2ciLCJfX3YiOjAsImltYWdlIjoiY2U5NTAyZmZhYjA1Njc5ZGZiODYyYTE1NDE5ZGEzZmUuanBnIiwiaWF0IjoxNjA4NTM1NTM0LCJleHAiOjE2MDk1MzU1MzR9.Jdr_urB1Wts80fjPaYFsuWhIwxL14-xNxX4030vL9xk`,
        },
      })
      .pipe(
        map((dt: any) => {
          return dt;
        })
      );
  }

  editData(data, id) {
    return this.http
      .put(`http://localhost:3333/employee/${id}`, data, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YzBlNmNiMWY0ZjMyNDg0N2Y0ZjUiLCJlbWFpbCI6ImFzYXNAZ21haWwuY29tIiwibmFtYSI6ImFqYnNqbmphYnMiLCJ1bXVyIjoxMTksImdlbmRlciI6InJhaGFzaWEiLCJqb2J0aXRsZSI6ImFianNqYmFqcyIsInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZ0YldGeWFtOTZNRGxBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpBNE5USXhORFV3TENKbGVIQWlPakUyTkRBd05UYzBOVEI5LnpabWVyQXVDdWViM3lIdHRDbFBCX1dZTk10dGdEVTZRZkFWdTU2MXo4M2ciLCJfX3YiOjAsImltYWdlIjoiY2U5NTAyZmZhYjA1Njc5ZGZiODYyYTE1NDE5ZGEzZmUuanBnIiwiaWF0IjoxNjA4NTM1NTM0LCJleHAiOjE2MDk1MzU1MzR9.Jdr_urB1Wts80fjPaYFsuWhIwxL14-xNxX4030vL9xk`,
        },
      })
      .pipe(
        map((dt: any) => {
          return dt;
        })
      );
  }

  uploadFile(id, upload) {
    return this.http
      .post(`http://localhost:3333/employee/upload/${id}`, upload, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ5YzBlNmNiMWY0ZjMyNDg0N2Y0ZjUiLCJlbWFpbCI6ImFzYXNAZ21haWwuY29tIiwibmFtYSI6ImFqYnNqbmphYnMiLCJ1bXVyIjoxMTksImdlbmRlciI6InJhaGFzaWEiLCJqb2J0aXRsZSI6ImFianNqYmFqcyIsInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZ0YldGeWFtOTZNRGxBWjIxaGFXd3VZMjl0SWl3aWFXRjBJam94TmpBNE5USXhORFV3TENKbGVIQWlPakUyTkRBd05UYzBOVEI5LnpabWVyQXVDdWViM3lIdHRDbFBCX1dZTk10dGdEVTZRZkFWdTU2MXo4M2ciLCJfX3YiOjAsImltYWdlIjoiY2U5NTAyZmZhYjA1Njc5ZGZiODYyYTE1NDE5ZGEzZmUuanBnIiwiaWF0IjoxNjA4NTM1NTM0LCJleHAiOjE2MDk1MzU1MzR9.Jdr_urB1Wts80fjPaYFsuWhIwxL14-xNxX4030vL9xk`,
        },
      })
      .pipe(
        map((dt: any) => {
          return dt;
        })
      );
  }
}

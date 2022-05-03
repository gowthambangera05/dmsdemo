import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordtype: string = 'password';

  showPassword() {
    console.log('Demo');
    this.passwordtype=
    this.passwordtype==='password'?'text':'password';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

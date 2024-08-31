import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from '@firebase/util';

@Component({
  selector: 'app-auth-test',
  templateUrl: '../auth-test/auth-test.component.html',
  styleUrls: ['../auth-test/auth-test.component.css']
})
export class AuthTestComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private auth: Auth) { }

  register() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.message = 'User registered successfully!';
        console.log('User registered:', userCredential.user);
      })
      .catch((error: FirebaseError) => {
        this.message = `Error: ${error.message}`;
        console.error('Registration error:', error);
      });
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.message = 'User logged in successfully!';
        console.log('User logged in:', userCredential.user);
      })
      .catch((error: FirebaseError) => {
        this.message = `Error: ${error.message}`;
        console.error('Login error:', error);
      });
  }
}

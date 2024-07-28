import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

interface User {
  id: number;
  firstName: string;
  email: string;
  phone: string;
  password: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  user: User = { id: 0, firstName: '', email: '', phone: '', password: '' };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser(): void {
    this.userService.addUser(this.user).subscribe(user => {
      this.users.push(user);
      this.resetForm();
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(() => {
      const index = this.users.findIndex(u => u.id === this.user.id);
      this.users[index] = this.user;
      this.resetForm();
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  editUser(user: User): void {
    this.user = { ...user };
  }

  onSubmit(): void {
    if (this.user.id) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  resetForm(): void {
    this.user = { id: 0, firstName: '', email: '', phone: '', password: '' };
  }
}

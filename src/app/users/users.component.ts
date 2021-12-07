import {Component, OnInit} from '@angular/core';
import {AadService} from '../services/aad.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private aadService: AadService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.getAllUsers();
    console.log('ngOnInit', this.users);
  }

  getAllUsers() {
    this.aadService.loadAllUsers().subscribe((data) => {
      // console.log('data');
      // console.log(data);
      this.users = data;
    });
  }
}

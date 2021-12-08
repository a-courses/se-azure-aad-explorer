import {Component, OnInit} from '@angular/core';
import {AadService} from '../services/aad.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  userCount = 0;
  managerCount = 0;
  groupCount = 0;

  constructor(private aadService: AadService) {
  }

  ngOnInit() {
    this.aadService.loadAllUsers().subscribe((data: [{}]) => {
      this.userCount = data.length;
    });

    this.aadService.loadAllManagers().subscribe(data => {
      this.managerCount = data.length;
    });

    this.aadService.loadAllGroups().subscribe((data: [{}]) => {
      this.groupCount = data.length;
    });
  }
}

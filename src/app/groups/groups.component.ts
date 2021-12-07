import {Component, OnInit} from '@angular/core';
import {AadService} from '../services/aad.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.less']
})
export class GroupsComponent implements OnInit {

  groups: any;

  constructor(private aadService: AadService) {
  }

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups() {
    this.aadService.loadAllGroups().subscribe((data) => {
      this.groups = data;
    });
  }

}

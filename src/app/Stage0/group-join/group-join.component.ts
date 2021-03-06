import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {GroupService} from '../../Services/group.service';

@Component({
  selector: 'app-group-join',
  templateUrl: './group-join.component.html',
  styleUrls: ['./group-join.component.css']
})
export class GroupJoinComponent implements OnInit {
  id: string;

  constructor(private router: Router, private userService: UserService, private groupService: GroupService) {
  }

  ngOnInit() {
  }

  join(id: string) {
    if (this.groupService.getGroupByName(id) != null) {
      this.groupService.addUser(this.userService.user, this.groupService.getGroupByName(id));
      this.router.navigateByUrl('/landing');
    }
  }
}

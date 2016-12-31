import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model'
import { routerTransition } from '../../../animations/router.animations';

import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-update-role',
    templateUrl: './update-role.component.html',
    styleUrls: ['./update-role.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class UpdateRoleComponent implements OnInit {
    model:any = {};
    options: Object;
    usernames:String[] = [];
    admins:any[] = [];
    users:any[] = [];

    constructor(private router: Router,
          private userService: UserService,
          private notificationsService: NotificationsService) {
    }

    ngOnInit() {
       this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
       this.userService.getUsers()
                       .subscribe((res) => {
                           console.log(res);
                           res.forEach((user) => {
                               if(user.role == 'User'){
                                   this.usernames.push(user.username);
                                   this.users.push(user);
                               }
                               else{
                                  this.admins.push(user);
                               }
                           })
                           console.log(this.users);    
                       });
                   
    }

    updateRole(){
       let username = this.model.username;
       this.userService.updateUserRole(this.model.username)
           .subscribe((res) => {
               if(res){
                   this.notificationsService.success('','Succesfuly updated '+username+'s role to admin');
                console.log(username)
                   for(let user of this.users){
                       if(username == user.username ){
                           console.log(user);
                           this.admins.push(user);
                           break;
                       }
                   }
                   
               }
               else{
                   this.notificationsService.error('','Unsuccesfuly updated '+this.model.username+'s role to admin.Please try again later!');
               }
           })
     
    }

    removeFromAdmins(user){
       this.admins = this.admins.filter(x=> x.username != user.username);
       this.users.push(user);
       this.usernames.push(user.username);
    }
}
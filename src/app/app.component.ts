import { Component } from '@angular/core';
import { user } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: user[]=[ {
    email: 'a@a.com',
    address: '234324',
    password: 'aserasfd',
  }];
 
  title = 'FormWithTable';

 public getDataFromFormForParent(users: user[])
  {
    this.users=users;
  }

}

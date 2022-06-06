import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../app.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
 users: user[]=[];
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

 @Output() onSaveUserClicked= new EventEmitter<user[]>();

  onSaveNewUser(email:string,address:string,password: string,e: Event)
  {
    e.preventDefault();
   let u: user=
   {
     email:email,
     password:password,
     address: address
   };
   this.users.push(u);

   this.onSaveUserClicked.emit(this.users);

  }
}

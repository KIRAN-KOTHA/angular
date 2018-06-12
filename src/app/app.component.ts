import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toppings:any=[];
  myform:FormGroup;
  disableemail:any= true;
  authors = ["Admin","User"];
  toppingList = ['Extra cheese ajabjdbjadasdasd', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  optionsSelect = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
];
  users :any[] = [
    {userId:"KiranKotha123",name:"Kiran Kumar Kotha",createdBy:"Admin"},
    {userId:"Babu",name:"Babu Ch",createdBy:"User"}
  ];
  cloned_users :any[] = this.users;
  ngOnInit()
  {
    this.generateform();
  }
  generateform()
  {
    this.myform = new FormGroup({
      email: new FormControl({value:'', disabled:false}),
      firstname: new FormControl({value:'', disabled:false}),
      lastname: new FormControl({value:'', disabled:false}),
    });
  }
  submitmyForm(data)
  {
    console.log(data)
  }
  resetForm(ev)
  {
    this.myform.controls['email'].enable();
    this.myform.controls['lastname'].enable();
    this.myform.controls['firstname'].enable();
  }
  disableEmailLastName()
  {
    this.myform.controls['email'].disable();
    this.myform.controls['lastname'].disable();
    this.myform.controls['firstname'].enable();
  }
  disableFirstname(){
    document.getElementById("email").style.display="none";
    document.getElementById("first").style.display="none";
    document.getElementById("email").style.display="none";
  }
  getOnlyCreatedByAuthorUser()
  {
    this.cloned_users = this.users.filter(user => user.createdBy ==this.authors[1]);
  }
  getOnlyCreatedByAuthorAdmin() {
    this.cloned_users = this.users.filter(user => user.createdBy ==this.authors[0])
  }

}

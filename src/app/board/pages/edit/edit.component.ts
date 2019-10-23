import { Card } from './../../models/Cards';
import { BoardService } from './../../services/board.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  public itemForm: FormGroup;
  public userList: User[];
  public currentItem: Card;
  public groupId: number;
  public itemId: number;

  constructor(private fromBuilder: FormBuilder, private bs: BoardService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.userList = this.bs.userList;
    this.groupId = this.bs.findGroup(this.route.snapshot.params.group);
    this.currentItem = {
      id: '' + this.bs.getNextIdGroup(this.groupId),
      name: 'Name',
      description: 'Description',
      dueDate: new Date(),
      assignee: this.bs.userList[0],
    }
    if(!!this.route.snapshot.params.id){
      this.itemId = this.bs.findItem(this.groupId, this.route.snapshot.params.id);
      this.currentItem = this.bs.items[this.groupId].cards[this.itemId];
    }
    console.log(this.currentItem)
    this.itemForm = this.fromBuilder.group({
      name: ['', Validators.required ],
      desc: ['', Validators.required ],
      user: ['', Validators.required ],
      date: ['', Validators.required ]
    });
  }

  save(){
    if(!!this.route.snapshot.params.id){
      this.bs.editItem(this.groupId, this.itemId, this.itemForm.value);
    } else {
      this.bs.createItem(this.groupId, this.itemForm.value);
    }
    this.router.navigate(['/board']);
    console.log(this.bs.items[0].cards[0])
    console.log(this.bs.items[0].cards)
  }

}

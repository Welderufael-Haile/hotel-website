import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';


interface comment{
  id:number;
  name:string;
  email:string;
  body:string;
  postid:Number;
}
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  comments:any[]=[];
  constructor(private commentServise: CommentsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  
  this.commentServise.getComments().subscribe((data) =>{
    console.log("data",data)
    this.comments=data;
  
  },
  (error) =>{
    console.log("error")
  }
)
  }
}
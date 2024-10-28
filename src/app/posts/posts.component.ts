import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service'; // Ensure the path is correct
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Post {
  userid: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  standalone: true,
  imports:[CommonModule],
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {} // Use camelCase

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}

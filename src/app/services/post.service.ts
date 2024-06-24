import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayPost: Post[] = []
  
  create(newPost:Post) {
    this.arrayPost.push(newPost)
    console.log(this.arrayPost);
    
    localStorage.setItem('arrayPost', JSON.stringify(this.arrayPost))
    console.log(localStorage.getItem('arrayPost'));
    
  }
  getAll(): Post[]{
    return this.arrayPost
  }
  getByCategoria(cat: string): Post | undefined{
    return this.arrayPost.find(post => post.categoria === cat)
  }
}

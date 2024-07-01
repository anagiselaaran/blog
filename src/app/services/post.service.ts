import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayPost: Post[] = []
  
  create(newPost:Post) {
    this.arrayPost.push(newPost)
    localStorage.setItem('arrayPost', JSON.stringify(this.arrayPost))
    console.log(localStorage.getItem('arrayPost'));
    
  }
  getAll(): Post[]{
    return this.arrayPost
    }
    
  getOldPosts(): Post[]{
    let data = localStorage.getItem('arrayPost')
    if (data !== null) {
      this.arrayPost.push(...JSON.parse(data))
    }
      return this.arrayPost
  
  }

  getByCategoria(cat: string): Post[]{
    return this.arrayPost.filter(post => post.categoria === cat)
  }
}

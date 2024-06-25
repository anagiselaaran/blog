import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayPost: Post[] = []
  
  create(newPost:Post) {
    this.arrayPost.push(newPost)
    /* guardo el array en el localstorage */
    localStorage.setItem('arrayPost', JSON.stringify(this.arrayPost))
    console.log(localStorage.getItem('arrayPost'));
    
  }
  getAll(): Post[]{
    return this.arrayPost
  }
  /* getAllPosts(){
    const old = localStorage.getItem('arrayPost')
  } */
  getByCategoria(cat: string): Post[]{
    return this.arrayPost.filter(post => post.categoria === cat)
  }
}

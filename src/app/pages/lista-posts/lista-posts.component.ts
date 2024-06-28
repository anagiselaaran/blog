import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';
import { CardPostComponent } from '../../components/card-post/card-post.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [CardPostComponent,RouterLink],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {


  
  arrayPost:Post[]=[]
  postService = inject(PostService)
  categoria: string = ''
  
  
  
  ngOnInit() {
    this.arrayPost = this.postService.getAll()
    }
    
    
    onChangeCategory($event: Event) {
    const select = $event.target as HTMLSelectElement;
    console.log(select.value);
    if (select.value === 'todas') {
      this.arrayPost = this.postService.getAll()
    } else {
      this.arrayPost = this.postService.getByCategoria(select.value)
    }
    }


  onClick() {
      this.arrayPost = this.postService.getOldPosts()
    
  }
  
     
  }
    
    




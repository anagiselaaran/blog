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
  arrPostViejos: Post[] = []
  categoria:string=''


  async ngOnInit() {
    this.arrayPost = this.postService.getAll()
     await JSON.parse(localStorage.getItem('arrayPost')!)
    /* if (storedPost) {
      this.arrPostViejos.push(storedPost)
      //TODO se me guarda arriba DE LO Q YA HAY EN EL LOCAL
      }
      console.log(this.arrayPost);
      this.arrPostViejos = this.postService.getAll() */
    
  }

   onChangeCategory($event: Event) {
     const select = $event.target as HTMLSelectElement;
     console.log(select.value);
     this.categoria = select.value
     console.log(this.categoria);
     
     
    
  }

}

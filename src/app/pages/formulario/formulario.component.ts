import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  postService = inject(PostService)
  router = inject(Router)
  newPost: Post[] = []
  

  postForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    fecha: new FormControl(),
    categoria:new FormControl()
  })

  async onSubmit() {
   
    this.postService.create(this.postForm.value)
    //TODO: SE ME GUARDA ARRIVA
    /* localStorage.setItem('newPost', JSON.stringify(this.postForm.value)) */
    await Swal.fire('Post Creado', 'Creacion Exitosa', 'success')
    this.router.navigateByUrl('/posts')
  }
}

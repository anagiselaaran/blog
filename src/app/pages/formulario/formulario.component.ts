import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    titulo: new FormControl(null,[Validators.required]),
    texto: new FormControl(null,[Validators.required]),
    autor: new FormControl(null,[Validators.required]),
    imagen: new FormControl(null,[Validators.required]),
    fecha: new FormControl(null,[Validators.required]),
    categoria:new FormControl(null,[Validators.required])
  })

  async onSubmit() {
   
    this.postService.create(this.postForm.value)
    await Swal.fire('Post Creado', 'Creacion Exitosa', 'success')
    this.router.navigateByUrl('/posts')
  }
   checkError(controlName:string, errorName:string) {
    return this.postForm.get(controlName)?.hasError(errorName) && this.postForm.get(controlName)?.touched
  }
}

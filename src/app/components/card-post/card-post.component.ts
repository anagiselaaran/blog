import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'card-post',
  standalone: true,
  imports: [],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent {

  @Input() post:Post | null = null

}

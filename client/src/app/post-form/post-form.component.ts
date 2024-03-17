import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  constructor(
    public getDataService: GetDataService,
  ){}

  public publishNewPost(newPost: any){    
    if(newPost.label !== '' && newPost.description !== ''){
      this.getDataService.sendNewPost(newPost);
    } else alert('Fill the form')
  }
}

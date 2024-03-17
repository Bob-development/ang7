import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  constructor(
    public getDataService: GetDataService,
  ){}

  public publishNewBlog(newBlog: any){    
    if(newBlog.title !== ''){
      const blogs = this.getDataService.getBlog();
      
      newBlog.id = blogs[blogs.length - 1].id + 1;
      newBlog.isRead = newBlog.isRead ? true : false;
      
      this.getDataService.sendNewBlog(newBlog);
    } else alert('Fill the form')
  }
}

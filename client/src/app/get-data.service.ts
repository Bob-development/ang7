import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private posts: any;
  private blog: any;


  constructor(
    private httpClient:HttpClient
  ) {
    this.httpClient.get('http://localhost:3000/posts').subscribe((posts) => {
      return this.posts = posts;
    });

    this.httpClient.get('http://localhost:3000/blog').subscribe((blog) => {
      return this.blog = blog;
    });
  }

  public getPosts(){
    return this.posts;
  }

  public getBlog(){
    return this.blog;
  }

  public sendNewPost(newPost: object) {
    return this.httpClient.post('http://localhost:3000/posts', newPost)
    .subscribe((res) => {
      console.log(res);
    });
  }

  public sendNewBlog(newBlog: object) {
    return this.httpClient.post('http://localhost:3000/blog', newBlog)
    .subscribe((res) => {
      console.log(res);
    });
  }
}

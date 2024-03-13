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
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url="http://localhost:5000/blog/blogs"
  constructor(private httpClient : HttpClient) { }

getBlogs(){

  return this.httpClient.get(this.url);


}

addBlogs(blogs:any){

  return this.httpClient.post(this.url,blogs);


}

loadBlogs(id:string){

  return this.httpClient.get(this.url+id);


}

putBlogs(_id:string,blog:any){

  return this.httpClient.put(this.url+_id,blog);


}


DelBlogs(_id:string){

  return this.httpClient.delete(this.url+_id);


}
}

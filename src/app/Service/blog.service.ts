import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient : HttpClient) { }

getBlogs(){

  return this.httpClient.get("http://localhost:8080/blog/blogs");


}

addBlogs(blogs:any){

  return this.httpClient.post("http://localhost:8080/blog/blogs",blogs);


}

loadBlogs(id:string){

  return this.httpClient.get("http://localhost:8080/blog/blogs/"+id);


}

putBlogs(_id:string,blog:any){

  return this.httpClient.put("http://localhost:8080/blog/blogs/"+_id,blog);


}


DelBlogs(_id:string){

  return this.httpClient.delete("http://localhost:8080/blog/blogs/"+_id);


}
}

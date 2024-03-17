import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: "",
    component: FormComponent
  },
  {
    path: "BlogForm",
    component: BlogFormComponent
  },
  {
    path: "PostForm",
    component: PostFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

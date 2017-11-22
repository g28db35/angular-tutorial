import { FormsModule } from '@angular/forms';
import { LoggerService } from './logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService, AuthorService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

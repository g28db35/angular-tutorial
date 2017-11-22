import { CourseService } from './courses.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: `<h2> {{ 'title: ' + title }} </h2>
        <ul>
           <li *ngFor="let course of courses">
                {{ course }}
           </li>
        </ul>
        <div (click)="onDivClick()">
            <button class="btn btn-primary" 
                [class.disable]="isDisabled" 
                (click)="onSave($event)">
                Save</button>
        </div>


        <input [(ngModel)] = 'email' (keyup.enter) = "onKeyUp()" />

        <table>
            <tr>
            <td [attr.colSpan]="colSpanSize">jjjjj</td>
            </tr>
        </table>

        {{ course.mainTitle | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.1-1' }} <br/>
        {{ course.price | currency:'USD':true }} <br/>
        {{ course.releaseDate | date:'shortDate' }}
    `
})
export class CoursesComponent {
    title = 'list of courses';
    courses;
    isDisabled = true;
    colSpanSize = 10;
    email = 'abc@random.com';

    course = {
        mainTitle: 'The complete angular course',
        rating: 14.976,
        students: 30123,
        price: 190,
        releaseDate: new Date(2017, 12, 1)
    }


    constructor(service: CourseService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
     //   $event.stopPropagation();
        console.log('Button was clicked', $event);
    }
    onDivClick() {
        console.log('Div was clicked');
    }

    onKeyUp() {
            console.log(this.email);
    }
}
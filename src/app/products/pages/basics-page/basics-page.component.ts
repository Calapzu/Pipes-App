import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'yamson';
  public nameUpper: string = 'YAMSON';
  public fullName: string = 'YamSon';

  public customDate: Date = new Date();
}

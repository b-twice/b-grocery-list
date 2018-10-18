import { Component } from '@angular/core';
import { AppService } from '@app/app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'groceries';

  constructor(
    readonly appService:AppService
  ) {
  }

}

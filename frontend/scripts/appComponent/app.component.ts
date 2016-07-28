import {Component} from '@angular/core';
import {NavComponent} from '../navComponent/nav.component';
import {FooterComponent} from "../footerComponent/footer.component";
import {MainComponent} from "../mainComponent/main.component";

@Component({
  selector: 'app',
  templateUrl: 'scripts/appComponent/app.component.html',
  directives: [NavComponent, FooterComponent, MainComponent]
})
export class AppComponent { }

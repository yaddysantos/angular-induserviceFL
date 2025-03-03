import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, LayoutComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
  }
  
}

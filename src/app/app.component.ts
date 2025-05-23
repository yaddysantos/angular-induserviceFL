import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
  }
  
}

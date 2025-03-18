import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;

    closeNavbar() {
      if (this.navbarCollapse) {
        this.navbarCollapse.nativeElement.classList.remove('show'); // Oculta el menú
      }
    }
}

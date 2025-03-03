import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-nosotros',
    imports: [CommonModule, TranslateModule],
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
}

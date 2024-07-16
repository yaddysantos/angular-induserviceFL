import { Component } from '@angular/core';
import { ServicesList } from '../../../lib/servicios.model';
import moment from 'moment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year: number | undefined;

  serviceList = [
    ServicesList.LATONERIA,
    ServicesList.PORCELANIZADA,
    ServicesList.FIBRA,
    ServicesList.PINTURA,
    ServicesList.PLASTICO,
  ];

  ngOnInit(): void {
    this.year = moment().year();
  } 
}

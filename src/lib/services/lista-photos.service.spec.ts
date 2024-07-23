import { TestBed } from '@angular/core/testing';

import { ListaPhotosService } from './lista-photos.service';

describe('ListaPhotosService', () => {
  let service: ListaPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

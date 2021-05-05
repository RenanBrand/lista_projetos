import { TestBed } from '@angular/core/testing';

import { ListaProjetosService } from './lista-projetos.service';

describe('ListaProjetosService', () => {
  let service: ListaProjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

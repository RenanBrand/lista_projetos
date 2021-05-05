import { TestBed } from '@angular/core/testing';

import { CadastroProjetosService } from './cadastro-projetos.service';

describe('CadastroProjetosService', () => {
  let service: CadastroProjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroProjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProjetosComponent } from './cadastro-projetos.component';

describe('CadastroProjetosComponent', () => {
  let component: CadastroProjetosComponent;
  let fixture: ComponentFixture<CadastroProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

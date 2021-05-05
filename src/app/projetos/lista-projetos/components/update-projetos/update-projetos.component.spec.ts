import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjetosComponent } from './update-projetos.component';

describe('UpdateProjetosComponent', () => {
  let component: UpdateProjetosComponent;
  let fixture: ComponentFixture<UpdateProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

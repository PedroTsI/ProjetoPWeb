import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ImovelService} from '../../shared/servicos/imovel.service';

import { ListagemImovelComponent } from './listagem-imovel.component';

describe('ListagemImovelComponent', () => {
  let component: ListagemImovelComponent;
  let fixture: ComponentFixture<ListagemImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

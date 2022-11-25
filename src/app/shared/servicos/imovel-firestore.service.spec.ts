import { TestBed } from '@angular/core/testing';

import { ImovelFirestoreService } from './imovel-firestore.service';

describe('ImovelFirestoreService', () => {
  let service: ImovelFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImovelFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

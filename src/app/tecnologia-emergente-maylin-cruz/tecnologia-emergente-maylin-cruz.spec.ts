import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaEmergenteMaylinCruz } from './tecnologia-emergente-maylin-cruz';

describe('TecnologiaEmergenteMaylinCruz', () => {
  let component: TecnologiaEmergenteMaylinCruz;
  let fixture: ComponentFixture<TecnologiaEmergenteMaylinCruz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiaEmergenteMaylinCruz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaEmergenteMaylinCruz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

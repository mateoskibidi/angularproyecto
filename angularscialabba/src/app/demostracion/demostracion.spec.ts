import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demostracion } from './demostracion';

describe('Demostracion', () => {
  let component: Demostracion;
  let fixture: ComponentFixture<Demostracion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demostracion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demostracion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoConectividadPComponent } from './producto-conectividad-p.component';

describe('ProductoConectividadPComponent', () => {
  let component: ProductoConectividadPComponent;
  let fixture: ComponentFixture<ProductoConectividadPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoConectividadPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoConectividadPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

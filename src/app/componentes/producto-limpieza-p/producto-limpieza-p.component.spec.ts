import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoLimpiezaPComponent } from './producto-limpieza-p.component';

describe('ProductoLimpiezaPComponent', () => {
  let component: ProductoLimpiezaPComponent;
  let fixture: ComponentFixture<ProductoLimpiezaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoLimpiezaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoLimpiezaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

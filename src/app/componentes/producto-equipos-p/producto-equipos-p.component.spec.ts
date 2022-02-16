import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEquiposPComponent } from './producto-equipos-p.component';

describe('ProductoEquiposPComponent', () => {
  let component: ProductoEquiposPComponent;
  let fixture: ComponentFixture<ProductoEquiposPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoEquiposPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEquiposPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

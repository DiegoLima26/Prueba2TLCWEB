import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoHerramientasPComponent } from './producto-herramientas-p.component';

describe('ProductoHerramientasPComponent', () => {
  let component: ProductoHerramientasPComponent;
  let fixture: ComponentFixture<ProductoHerramientasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoHerramientasPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoHerramientasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

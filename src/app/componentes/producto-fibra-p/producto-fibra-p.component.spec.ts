import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFibraPComponent } from './producto-fibra-p.component';

describe('ProductoFibraPComponent', () => {
  let component: ProductoFibraPComponent;
  let fixture: ComponentFixture<ProductoFibraPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoFibraPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoFibraPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

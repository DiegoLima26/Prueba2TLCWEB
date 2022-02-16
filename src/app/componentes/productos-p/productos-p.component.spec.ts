import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPComponent } from './productos-p.component';

describe('ProductosPComponent', () => {
  let component: ProductosPComponent;
  let fixture: ComponentFixture<ProductosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

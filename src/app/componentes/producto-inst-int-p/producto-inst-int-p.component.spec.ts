import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoInstIntPComponent } from './producto-inst-int-p.component';

describe('ProductoInstIntPComponent', () => {
  let component: ProductoInstIntPComponent;
  let fixture: ComponentFixture<ProductoInstIntPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoInstIntPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoInstIntPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

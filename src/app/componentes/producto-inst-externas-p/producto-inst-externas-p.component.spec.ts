import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoInstExternasPComponent } from './producto-inst-externas-p.component';

describe('ProductoInstExternasPComponent', () => {
  let component: ProductoInstExternasPComponent;
  let fixture: ComponentFixture<ProductoInstExternasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoInstExternasPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoInstExternasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

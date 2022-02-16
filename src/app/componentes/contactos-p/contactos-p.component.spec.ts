import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosPComponent } from './contactos-p.component';

describe('ContactosPComponent', () => {
  let component: ContactosPComponent;
  let fixture: ComponentFixture<ContactosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

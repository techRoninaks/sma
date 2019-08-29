import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSellerComponent } from './registration-seller.component';

describe('RegistrationSellerComponent', () => {
  let component: RegistrationSellerComponent;
  let fixture: ComponentFixture<RegistrationSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

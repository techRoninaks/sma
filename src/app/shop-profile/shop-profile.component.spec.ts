import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProfileComponent } from './shop-profile.component';

describe('ShopProfileComponent', () => {
  let component: ShopProfileComponent;
  let fixture: ComponentFixture<ShopProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

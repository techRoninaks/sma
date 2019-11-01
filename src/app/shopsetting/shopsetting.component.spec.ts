import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsettingComponent } from './shopsetting.component';

describe('ShopsettingComponent', () => {
  let component: ShopsettingComponent;
  let fixture: ComponentFixture<ShopsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

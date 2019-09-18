import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerlandingComponent } from './sellerlanding.component';

describe('SellerlandingComponent', () => {
  let component: SellerlandingComponent;
  let fixture: ComponentFixture<SellerlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

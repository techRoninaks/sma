import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileBuyerComponent } from './userprofile-buyer.component';

describe('UserprofileBuyerComponent', () => {
  let component: UserprofileBuyerComponent;
  let fixture: ComponentFixture<UserprofileBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

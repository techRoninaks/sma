import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistingComponent } from './categorylisting.component';

describe('CategorylistingComponent', () => {
  let component: CategorylistingComponent;
  let fixture: ComponentFixture<CategorylistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorylistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorylistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

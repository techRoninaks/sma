import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageshopComponent } from './manageshop.component';

describe('ManageshopComponent', () => {
  let component: ManageshopComponent;
  let fixture: ComponentFixture<ManageshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

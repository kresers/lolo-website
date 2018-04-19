import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePrestaComponent } from './service-presta.component';

describe('ServicePrestaComponent', () => {
  let component: ServicePrestaComponent;
  let fixture: ComponentFixture<ServicePrestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePrestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

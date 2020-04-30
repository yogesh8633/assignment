import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEconomyComponent } from './business-economy.component';

describe('BusinessEconomyComponent', () => {
  let component: BusinessEconomyComponent;
  let fixture: ComponentFixture<BusinessEconomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessEconomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

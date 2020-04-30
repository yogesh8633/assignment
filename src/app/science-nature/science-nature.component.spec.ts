import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceNatureComponent } from './science-nature.component';

describe('ScienceNatureComponent', () => {
  let component: ScienceNatureComponent;
  let fixture: ComponentFixture<ScienceNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

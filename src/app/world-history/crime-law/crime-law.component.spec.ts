import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeLawComponent } from './crime-law.component';

describe('CrimeLawComponent', () => {
  let component: CrimeLawComponent;
  let fixture: ComponentFixture<CrimeLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimeLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

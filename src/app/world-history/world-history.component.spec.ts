import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldHistoryComponent } from './world-history.component';

describe('WorldHistoryComponent', () => {
  let component: WorldHistoryComponent;
  let fixture: ComponentFixture<WorldHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

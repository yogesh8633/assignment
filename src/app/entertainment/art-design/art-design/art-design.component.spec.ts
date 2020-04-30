import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDesignComponent } from './art-design.component';

describe('ArtDesignComponent', () => {
  let component: ArtDesignComponent;
  let fixture: ComponentFixture<ArtDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

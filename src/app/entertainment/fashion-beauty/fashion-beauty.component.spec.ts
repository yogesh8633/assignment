import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBeautyComponent } from './fashion-beauty.component';

describe('FashionBeautyComponent', () => {
  let component: FashionBeautyComponent;
  let fixture: ComponentFixture<FashionBeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionBeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

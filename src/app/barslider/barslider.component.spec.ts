import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsliderComponent } from './barslider.component';

describe('BarsliderComponent', () => {
  let component: BarsliderComponent;
  let fixture: ComponentFixture<BarsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

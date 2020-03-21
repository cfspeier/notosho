import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarscannerComponent } from './barscanner.component';

describe('BarscannerComponent', () => {
  let component: BarscannerComponent;
  let fixture: ComponentFixture<BarscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarscannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

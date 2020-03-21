import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarscannerComponent } from './barscanner.component';

import { Router } from '@angular/router';


describe('BarscannerComponent', () => {
  let component: BarscannerComponent;
  let fixture: ComponentFixture<BarscannerComponent>;

  constructor(private router: Router) { }

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

  jumpToSlider () {
          this.router.navigateByUrl('/barslider');
  };


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbarcodesComponent } from './readbarcodes.component';

describe('ReadbarcodesComponent', () => {
  let component: ReadbarcodesComponent;
  let fixture: ComponentFixture<ReadbarcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadbarcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadbarcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

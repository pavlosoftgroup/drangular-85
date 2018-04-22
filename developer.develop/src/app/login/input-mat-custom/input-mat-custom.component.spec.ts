import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMatCustomComponent } from './input-mat-custom.component';

describe('InputMatCustomComponent', () => {
  let component: InputMatCustomComponent;
  let fixture: ComponentFixture<InputMatCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMatCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMatCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpIsNeededComponent } from './help-is-needed.component';

describe('HelpIsNeededComponent', () => {
  let component: HelpIsNeededComponent;
  let fixture: ComponentFixture<HelpIsNeededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpIsNeededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpIsNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

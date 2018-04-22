import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOfGoodsComponent } from './return-of-goods.component';

describe('ReturnOfGoodsComponent', () => {
  let component: ReturnOfGoodsComponent;
  let fixture: ComponentFixture<ReturnOfGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOfGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOfGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

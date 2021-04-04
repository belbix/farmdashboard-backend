import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TransactionComponent} from './transaction.component';

describe('RewardsDialogComponent', () => {

  let component;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
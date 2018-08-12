import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteLikeComponent } from './quote-like.component';

describe('QuoteLikeComponent', () => {
  let component: QuoteLikeComponent;
  let fixture: ComponentFixture<QuoteLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonComponent } from './lemon.component';

describe('LemonComponent', () => {
  let component: LemonComponent;
  let fixture: ComponentFixture<LemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LemonComponent]
    });
    fixture = TestBed.createComponent(LemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

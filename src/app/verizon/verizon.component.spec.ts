import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerizonComponent } from './verizon.component';

describe('VerizonComponent', () => {
  let component: VerizonComponent;
  let fixture: ComponentFixture<VerizonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerizonComponent]
    });
    fixture = TestBed.createComponent(VerizonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

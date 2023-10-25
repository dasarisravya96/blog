import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsblogComponent } from './permissionsblog.component';

describe('PermissionsblogComponent', () => {
  let component: PermissionsblogComponent;
  let fixture: ComponentFixture<PermissionsblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionsblogComponent]
    });
    fixture = TestBed.createComponent(PermissionsblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosturairComponent } from './posturair.component';

describe('PosturairComponent', () => {
  let component: PosturairComponent;
  let fixture: ComponentFixture<PosturairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosturairComponent]
    });
    fixture = TestBed.createComponent(PosturairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

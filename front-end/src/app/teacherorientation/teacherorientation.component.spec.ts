import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherorientationComponent } from './teacherorientation.component';

describe('TeacherorientationComponent', () => {
  let component: TeacherorientationComponent;
  let fixture: ComponentFixture<TeacherorientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherorientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherorientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

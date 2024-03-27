import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAttendanceComponent } from './face-attendance.component';

describe('FaceAttendanceComponent', () => {
  let component: FaceAttendanceComponent;
  let fixture: ComponentFixture<FaceAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceAttendanceComponent]
    });
    fixture = TestBed.createComponent(FaceAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

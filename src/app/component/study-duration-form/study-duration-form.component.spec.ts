import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDurationFormComponent } from './study-duration-form.component';

describe('StudyDurationFormComponent', () => {
  let component: StudyDurationFormComponent;
  let fixture: ComponentFixture<StudyDurationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyDurationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudyDurationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

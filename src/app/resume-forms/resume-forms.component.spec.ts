import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFormsComponent } from './resume-forms.component';

describe('ResumeFormsComponent', () => {
  let component: ResumeFormsComponent;
  let fixture: ComponentFixture<ResumeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

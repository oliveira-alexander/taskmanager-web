import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewPage } from './task-new-page';

describe('TaskNewPage', () => {
  let component: TaskNewPage;
  let fixture: ComponentFixture<TaskNewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskNewPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

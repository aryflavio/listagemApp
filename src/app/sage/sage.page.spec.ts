import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SagePage } from './sage.page';

describe('SagePage', () => {
  let component: SagePage;
  let fixture: ComponentFixture<SagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OmenPage } from './omen.page';

describe('OmenPage', () => {
  let component: OmenPage;
  let fixture: ComponentFixture<OmenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OmenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

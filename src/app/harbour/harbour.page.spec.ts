import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarbourPage } from './harbour.page';

describe('HarbourPage', () => {
  let component: HarbourPage;
  let fixture: ComponentFixture<HarbourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HarbourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

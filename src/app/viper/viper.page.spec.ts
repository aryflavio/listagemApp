import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViperPage } from './viper.page';

describe('ViperPage', () => {
  let component: ViperPage;
  let fixture: ComponentFixture<ViperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

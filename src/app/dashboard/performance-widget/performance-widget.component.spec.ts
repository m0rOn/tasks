import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceWidgetComponent } from './performance-widget.component';

describe('PerformanceWidgetComponent', () => {
  let component: PerformanceWidgetComponent;
  let fixture: ComponentFixture<PerformanceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

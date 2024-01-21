import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRxComponent } from './slider-rx.component';

describe('SliderRxComponent', () => {
  let component: SliderRxComponent;
  let fixture: ComponentFixture<SliderRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderRxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheadlineComponent } from './subheadline.component';

describe('SubheadlineComponent', () => {
  let component: SubheadlineComponent;
  let fixture: ComponentFixture<SubheadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubheadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

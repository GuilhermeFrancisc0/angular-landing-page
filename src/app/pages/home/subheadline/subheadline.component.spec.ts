import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should open Angular website on button click', () => {
    spyOn(window, 'open');

    const buttonDe = fixture.debugElement.query(By.css('app-button'));
    buttonDe.triggerEventHandler('click', null);

    expect(window.open).toHaveBeenCalledWith('https://angular.dev/', '_blank');
  });
});
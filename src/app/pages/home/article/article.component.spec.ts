import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
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

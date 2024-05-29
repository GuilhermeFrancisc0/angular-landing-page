import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../components/button/button.component';
import { NewsletterService } from '../../../services/newsletter/newsletter.service';
import { NewsletterFormComponent } from './newsletter-form.component';

describe('NewsletterFormComponent', () => {
  let component: NewsletterFormComponent;
  let fixture: ComponentFixture<NewsletterFormComponent>;
  let service: jasmine.SpyObj<NewsletterService>;

  beforeEach(async () => {
    service = jasmine.createSpyObj('NewsletterService', ['sendData']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ButtonComponent,
        NewsletterFormComponent,
        HttpClientTestingModule
      ],
      providers: [{ provide: NewsletterService, useValue: service }]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    const form = component.form;
    expect(form).toBeDefined();
    expect(form.get('name')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
  });

  it('should require name and email fields', () => {
    const form = component.form;
    form.get('name')?.setValue('');
    form.get('email')?.setValue('');
    expect(form.valid).toBeFalse();

    form.get('name')?.setValue('Test Name');
    expect(form.valid).toBeFalse();

    form.get('email')?.setValue('test@example.com');
    expect(form.valid).toBeTrue();
  });

  it('should set loading to true when submitting form', () => {
    component.form.get('name')?.setValue('Test Name');
    component.form.get('email')?.setValue('test@example.com');

    component.onSubmit();
    expect(component.loading()).toBeTrue();
  });

  // TODO
  // it('should reset form and set loading to false on successful submission (next)', () => {
    
  // });

  // it('should set loading to false on submission error', () => {

  // });
});

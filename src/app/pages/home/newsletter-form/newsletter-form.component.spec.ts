import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../components/button/button.component';
import { NewsletterService } from '../../../services/newsletter/newsletter.service';
import { NewsletterFormComponent } from './newsletter-form.component';

describe('NewsletterFormComponent', () => {
  let component: NewsletterFormComponent;
  let fixture: ComponentFixture<NewsletterFormComponent>;
  let newsletterService: NewsletterService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ButtonComponent,
        NewsletterFormComponent,
        HttpClientTestingModule
      ],
      providers: [NewsletterService],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterFormComponent);
    component = fixture.componentInstance;
    newsletterService = TestBed.inject(NewsletterService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields and required validators', () => {
    const nameControl = component.form.get('name');
    const emailControl = component.form.get('email');

    expect(nameControl?.value).toBe('');
    expect(nameControl?.valid).toBeFalsy();
    expect(nameControl?.errors?.['required']).toBeTruthy();

    expect(emailControl?.value).toBe('');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.errors?.['required']).toBeTruthy();
  });

  it('should submit the form when valid and set loading to true', () => {
    component.form.setValue({ name: 'John Doe', email: 'johndoe@example.com' });

    component.onSubmit();

    const req = httpMock.expectOne(newsletterService['endpointUrl']);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ name: 'John Doe', email: 'johndoe@example.com' });
    expect(component.loading()).toBeTrue();

    req.flush(null);
  });

  it('should reset the form and set loading to false on successful submission', () => {
    component.form.setValue({ name: 'John Doe', email: 'johndoe@example.com' });

    component.onSubmit();

    const req = httpMock.expectOne(newsletterService['endpointUrl']);
    req.flush(null);

    expect(component.form.pristine).toBeTrue();
    expect(component.loading()).toBeFalse();
  });

  it('should set loading to false on error during submission', () => {
    component.form.setValue({ name: 'John Doe', email: 'johndoe@example.com' });

    component.onSubmit();

    const req = httpMock.expectOne(newsletterService['endpointUrl']);
    expect(req.request.method).toBe('POST');
    req.error(new ProgressEvent('error'));

    expect(component.loading()).toBeFalse();
  });
});
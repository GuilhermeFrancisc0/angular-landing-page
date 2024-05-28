import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NewsletterService } from './newsletter.service';

describe('NewsletterService', () => {
  let service: NewsletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewsletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

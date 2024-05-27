import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonComponent } from '../../../components/button/button.component';
import { NewsletterService } from '../../../services/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  form: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);

    if (this.form.valid) {
      this.service.sendData(this.form.value.name, this.form.value.email).subscribe({
        next: () => {
          this.form.reset();
          this.loading.set(false);
        },
        error: () => this.loading.set(false),
      })
    }
  }
}

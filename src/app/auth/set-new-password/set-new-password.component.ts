import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PasswordStrengthComponent } from '@elementar-ui/components/password-strength';
import { LogoComponent } from '@elementar-ui/components/logo';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-set-new-password',
  imports: [
    MatIcon,
    RouterLink,
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    PasswordStrengthComponent,
    LogoComponent,
    NgOptimizedImage
  ],
  templateUrl: './set-new-password.component.html',
  styleUrl: './set-new-password.component.scss'
})
export class SetNewPasswordComponent {
  private _router = inject(Router);
  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get passwordValue(): string {
    return this.form.get('password')?.value as string;
  }

  resetPassword() {
    this._router.navigateByUrl('/auth/done');
  }
}

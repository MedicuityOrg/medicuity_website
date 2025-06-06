import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
info: String='info@medicuity.com';
// contactForm!: FormGroup;
//   captcha: string = '';
//   captchaInput: string = '';
//   captchaVerified: boolean = false;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.contactForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       organization: ['', Validators.required],
//       message: ['', Validators.required],
//     });

//     this.generateCaptcha();
//   }

//   generateCaptcha() {
//     const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
//     this.captcha = Array.from({ length: 6 }, () =>
//       chars[Math.floor(Math.random() * chars.length)]
//     ).join('');
//     this.captchaInput = '';
//     this.captchaVerified = false;
//   }

//   verifyCaptcha() {
//   const entered = this.captchaInput.trim().toUpperCase();
//   const actual = this.captcha.trim().toUpperCase();  // normalize both

//   if (entered === actual) {
//     this.captchaVerified = true;
//     alert('✅ CAPTCHA Verified!');
//   } else {
//     alert('❌ CAPTCHA Incorrect. Try again.');
//     this.generateCaptcha();
//   }
// }


//   onSubmit() {
//     if (this.contactForm.valid && this.captchaVerified) {
//       console.log('Form Submitted', this.contactForm.value);
//       alert('Form submitted successfully!');
//       this.contactForm.reset();
//       this.generateCaptcha();
//     }
//   }
formData = {
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: '',
  };

  captcha: string = '';
  captchaInput: string = '';
  captchaVerified: boolean = false;

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    this.captcha = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    this.captchaInput = '';
    this.captchaVerified = false;
  }

 captchaMessage: string = '';
captchaMessageClass: string = ''; // For styling (success or error)

verifyCaptcha() {
  if (this.captchaInput.trim().toUpperCase() === this.captcha) {
    this.captchaVerified = true;
    this.captchaMessage = '✅ CAPTCHA Verified!';
    this.captchaMessageClass = 'text-green-600';
  } else {
    this.captchaVerified = false;
    this.captchaMessage = '❌ CAPTCHA Incorrect!';
    this.captchaMessageClass = 'text-red-600';
    this.generateCaptcha();
  }
}

  sendEmail() {
    const subject = encodeURIComponent('Contact Form');
    const body = encodeURIComponent(
      `First Name: ${this.formData.firstName}\n` +
      `Last Name: ${this.formData.lastName}\n` +
      `Email: ${this.formData.email}\n` +
      `Organization: ${this.formData.organization}\n` +
      `Phone: ${this.formData.message}`
    );

    const mailtoLink = `mailto:info@medicuity.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }

  onSubmit() {
  if (!this.captchaVerified) {
     this.captchaMessage = '⚠️ Please verify CAPTCHA before submitting!';
    this.captchaMessageClass = 'text-yellow-600';
    return;
  }

  this.sendEmail();
}
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
currentSlide = 0;
email: string = 'info@medicuity.com';

// formData = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     organization: '',
//     phone: ''
//   };
//   sendEmail() {
//     const serviceID = 'YOUR_SERVICE_ID';
//     const templateID = 'YOUR_TEMPLATE_ID';
//     const userID = 'YOUR_USER_ID';

//     emailjs.send(serviceID, templateID, this.formData, userID)
//       .then((result: EmailJSResponseStatus) => {
//         console.log('Email sent:', result.text);
//         alert('Demo request sent successfully!');
//       }, (error) => {
//         console.error('Failed to send email:', error.text);
//         alert('Failed to send. Try again later.');
//       });
//   }


  slides = [
    {
    svgPaths: ['M13 2L3 14h9l-1 8L21 10h-9l1-8z'],
    title: 'No Historical Data Required',
    description: 'Get started immediately with just your guidelines and a small sample set. Our advanced NLP leverages proven LLMs, not unreliable machine learning from questionable data.',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    svgPaths: ['M3 15a4 4 0 0 1 4-4h1.26A6 6 0 0 1 20 13a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z'
    ],
    title: 'Your Cloud, Your Control',
    description: 'Deploy our solution directly in your Azure or AWS environment. Maintain complete control over your data while leveraging enterprise-grade AI capabilities.',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    svgPaths: ['M4 13H20V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V13Z',
      'M2 9H22V13H2V9Z',
      'M12 5L12 22',
      'M12 5.5C12 3.567 10.433 2 8.5 2C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9',
      'M15.5 9C17.433 9 19 7.433 19 5.5C19 3.567 17.433 2 15.5 2C13.567 2 12 3.567 12 5.5'  ],
    title: 'Free for Small Practices',
    description: 'Individual physicians with fewer than 175 appointments monthly get full access to our coding platform at absolutely no cost. Scale your practice worry-free.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },

  {
    svgPaths: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
    'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    'M23 21v-2a4 4 0 0 0-3-3.87',
    'M16 3.13a4 4 0 1 1 0 7.75'],
    title: 'Secure Remote Coding',
    description: 'Safely utilize contract coders worldwide without network access risks. All PII is automatically hidden and never permanently stored in our platform.',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];


 
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3000ms = 3 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
  //file upload
  selectedFileName: string | null = null;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.processFile(file);
  }
}

onDragOver(event: DragEvent): void {
  event.preventDefault(); // Allow dropping
}

onDrop(event: DragEvent): void {
  event.preventDefault();
  if (event.dataTransfer && event.dataTransfer.files.length > 0) {
    const file = event.dataTransfer.files[0];
    this.processFile(file);
  }
}

processFile(file: File): void {
  this.selectedFileName = file.name;
  console.log('File selected:', file);
}




}

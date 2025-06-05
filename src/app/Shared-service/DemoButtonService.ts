import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DemoButtonService {
  private buttonTextSubject = new BehaviorSubject<string>('Get Demo Access');
  buttonText$ = this.buttonTextSubject.asObservable();

  updateButtonText(newText: string) {
    this.buttonTextSubject.next(newText);
  }
}

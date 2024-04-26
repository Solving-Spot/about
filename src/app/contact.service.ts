import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  submitForm(formData: any) {
    // Replace 'your-server-url' with the actual URL where you want to submit the form data
    return this.http.post('your-server-url', formData);
  }
}

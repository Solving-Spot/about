import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactFormComponent implements OnInit {
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Comment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.FormData.valid) {
      // Send form data to server
      this.http.post('https://example.com/api/contact', this.FormData.value)
        .subscribe(
          (response) => {
            console.log('Form submission successful:', response);
            // Optionally, reset the form after successful submission
            this.FormData.reset();
          },
          (error) => {
            console.error('Form submission error:', error);
            // Handle error response from server
          }
        );
    } else {
      console.error('Form validation failed!');
    }
  }
}

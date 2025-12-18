import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.touched && this.contactForm.get(field)?.hasError(typeError);
  }
}

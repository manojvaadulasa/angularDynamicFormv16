import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './Dynamic Form/dynamic-form.component';
import { registerFormConfig } from './json/register-form.constants';
import { DynamicFormInterface } from './interface/form.interface';

@Component({
  selector: 'df-root',
  standalone: true,
  imports: [CommonModule,DynamicFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dynamic-forms';
  form = registerFormConfig as DynamicFormInterface;
}

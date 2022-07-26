import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formGroup = new FormGroup({});
  @Input() formFields = [];
  @Input() formModel = {};
  @Input() formOptions = {};

  constructor(
    private builder: FormlyFormBuilder,
  ) {}

  ngOnInit() {
    this.builder.buildForm(
      this.formGroup,
      this.formFields,
      this.formModel,
      this.formOptions
    );
  }
}

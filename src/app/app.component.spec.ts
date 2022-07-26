import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { AppComponent } from './app.component';
import { FormComponent } from './formly/form/form.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormlyModule.forRoot(),
        FormlyBootstrapModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        FormComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create app component with a required field and use the same form on other places', () => {
    component.fields = [
      {
        key: 'bar',
        type: 'input',
        templateOptions: {
          required: true, // This is causing the ExpressionChangedAfterItHasBeenCheckedError
          type: 'text',
        },
      },
    ];

    fixture.detectChanges();

    expect(component.form.get('bar')?.value).toBeNull();
  });

  it('should create app component with a field and use the same form on other places', () => {
    component.fields = [
      {
        key: 'bar',
        type: 'input',
        templateOptions: {
          type: 'text',
        },
      },
    ];

    fixture.detectChanges();

    expect(component.form.get('bar')?.value).toBeNull();
  });
});

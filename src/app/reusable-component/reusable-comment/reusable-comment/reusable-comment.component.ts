import { Component, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';



export interface ProfileFormValues {
  maqaa: string;
  email: string;
  yaada: number;
}

@Component({
  selector: 'app-reusable-comment',
  templateUrl: './reusable-comment.component.html',
  styleUrls: ['./reusable-comment.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReusableCommentComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ReusableCommentComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ReusableCommentComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): ProfileFormValues {
    return this.form.value;
  }

  set value(value: ProfileFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get emailControl() {
    return this.form.controls.email;
  }
  get maqaaControl() {
    return this.form.controls.maqaa;
  }
  get yaadaControl() {
    return this.form.controls.yaada;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      maqaa: ['', Validators.required],
      yaada: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { profile: { valid: false, }, };
  }
}

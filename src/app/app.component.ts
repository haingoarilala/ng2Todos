import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   formGroup: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.formGroup=formBuilder.group({
        'name': [null, Validators.required],
        'password':[null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
        'remember':true
    });
  }
submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
   
}

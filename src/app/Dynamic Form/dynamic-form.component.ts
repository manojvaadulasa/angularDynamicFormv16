import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DynamicFormInterface, FormControlInterface, ValidatorInterface } from "../interface/form.interface";

@Component({
  selector:'df-dynamic-form',
  templateUrl:'./dynamic-form.component.html',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class DynamicFormComponent implements OnInit{
  @Input() form !: DynamicFormInterface; // !: is telling the compiler that this value is not null or undefined
  fb = inject(FormBuilder);
  dynamicForm : FormGroup = this.fb.group({},{updateOn:'submit'});
  public ngOnInit():void{
    if(this.form?.formControls){
      let formGroup: any = {};
      this.form.formControls.forEach((control:FormControlInterface)=>{
        let controlValidators: any = []
        if(control.validators){
          control.validators.forEach((val:ValidatorInterface)=>{
            if(val.validationName==='required') controlValidators.push(Validators.required);
            if(val.validationName==='email') controlValidators.push(Validators.email);
            if(val.validationName==='maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
            if(val.validationName==='minlength') controlValidators.push(Validators.minLength(val.minLength as number));
            if(val.validationName==='pattern') controlValidators.push(Validators.pattern(val.pattern as string));
          })
        }
        formGroup[control.name] = [control.value ? control.value : '',controlValidators];
      });
      this.dynamicForm=this.fb.group(formGroup);
    }
  }

  onSubmit():void{
    console.log(this.dynamicForm.getRawValue());
  }

  onReset():void{
    this.dynamicForm.reset();
  }

  getValidationError(control:FormControlInterface):string{
    const myFormControl = this.dynamicForm.get(control.name);
    let errorMessage:string=''
    control.validators.forEach((val)=>{
      if(myFormControl?.hasError(val.validationName as string)){
        errorMessage=val.message as string;
      }
    });
    return errorMessage;
  }
}

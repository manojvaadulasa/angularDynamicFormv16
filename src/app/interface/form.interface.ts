export interface FormControlInterface {
  name: string
  label: string
  value?: string
  placeholder: string
  class: string
  type: string
  options?: Options[]
  radioOptions?:string[]
  validators: ValidatorInterface[]
}

export interface ValidatorInterface {
  validationName?: string
  required?: boolean
  message?: string
  pattern?: string
  minLength?: number
  maxLength?: number
  email?: string
}

export interface Options {
  id: number
  value: string
}

export interface DynamicFormInterface {
  formTitle: string
  saveBtnTitle: string
  resetBtnTitle: string
  formControls: FormControlInterface[]
}

import { DynamicFormInterface } from "../interface/form.interface";

export const registerFormConfig: DynamicFormInterface = {
  formTitle: 'Registration Form',
  saveBtnTitle: 'Register',
  resetBtnTitle: 'Reset',
  formControls: [
    {
      "name":"firstname",
      "label":"Firstname",
      "value":"",
      "placeholder":"Enter the firstname",
      "class":"col-md-6",
      "type":"text",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Firstname is required"
        }
      ]
    },
    {
      "name":"lastname",
      "label":"Lastname",
      "value":"",
      "placeholder":"Enter the lastname",
      "class":"col-md-6",
      "type":"text",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Lastname is required"
        }
      ]
    },
    {
      "name":"email",
      "label":"Email",
      "value":"",
      "placeholder":"Enter the email",
      "class":"col-md-4",
      "type":"email",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Email is required"
        },
        {
          "validationName":"email",
          "email":"email",
          "message":"Email is not valid"
        }
      ]
    },
    {
      "name":"mobile",
      "label":"Mobile",
      "value":"",
      "placeholder":"Enter the mobile",
      "class":"col-md-4",
      "type":"number",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Mobile Number is required"
        },
        {
          "validationName":"maxlength",
          "maxLength":10,
          "message":"Maximum 10 digits is allowed"
        }
      ]
    },
    {
      "name":"weight",
      "label":"Weight",
      "value":"",
      "placeholder":"Enter the weight in Kgs",
      "class":"col-md-4",
      "type":"number",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Weight is required"
        },
        {
          "validationName":"maxlength",
          "maxLength":10,
          "message":"Maximum 10 digits is allowed"
        }
      ]
    },
    {
      "name":"height",
      "label":"Height",
      "value":"",
      "placeholder":"Enter the height in cms",
      "class":"col-md-4",
      "type":"number",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Height is required"
        }
      ]
    },
    {
      "name":"gender",
      "label":"Gender",
      "class":"col-md-4",
      "placeholder":"",
      "type":"radio",
      "radioOptions":[
        "Male",
        "Female"
      ],
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Gender is required"
        }
      ]
    },
    {
      "name":"trainer",
      "label":"Trainer",
      "placeholder":"",
      "class":"col-md-4",
      "type":"radio",
      "radioOptions":[
        "Yes",
        "No"
      ],
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Trainer is required"
        }
      ]
    },
    {
      "name":"package",
      "label":"Package",
      "placeholder":"",
      "class":"col-md-4",
      "type":"select",
      "options":[
        {
          "id":1,
          "value":"Monthly"
        },
        {
          "id":2,
          "value":"Quarterly"
        },
        {
          "id":3,
          "value":"Yearly"
        }
      ],
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Package is required"
        }
      ]
    },
    {
      "name":"enquiryDate",
      "label":"Date of enquiry",
      "placeholder":"",
      "class":"col-md-4",
      "type":"date",
      "validators":[
        {
          "validationName":"required",
          "required":true,
          "message":"Enquiry date is required"
        }
      ]
    }
  ]
}

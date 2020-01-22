//@flow

export function validateEmail(email: string): Boolean {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
}

export function validateUrl(value: string): Boolean {
  const regEx = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  return regEx.test(value);
}

export function securePassword(value: string): Boolean {
  const regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
  return regEx.test(value);
}

export function validator(
  rule: String,
  value: any,
  argument: any = null
): Boolean {
  switch (rule) {
    case 'required':
      return value !== '';
    case 'email':
      return validateEmail(value);
    case 'url':
      return validateUrl(value);
    case 'securePassword':
      return validateUrl(value);
    case 'min':
      return value >= argument;
    case 'max':
      return value <= argument;
    default:
      return true;
  }
}

export function getErrorMessage(rule: String, argument: any = null): String {
  switch (rule) {
    case 'required':
      return 'This field is required';
    case 'email':
      return 'Must be a valid email';
    case 'url':
      return 'Must be a valid url';
    case 'securePassword':
      return 'Password sercurity rule not met.';
    case 'min':
      return 'Value must be greater than: ' + argument;
    case 'max':
      return 'Value must be less than: ' + argument;
    default:
      return 'Invalid field value';
  }
}

export default validator;

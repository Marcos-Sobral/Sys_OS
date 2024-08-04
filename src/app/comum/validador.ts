import { AbstractControl, Validators } from "@angular/forms";

export class GenericValidator {
  constructor() {}

  static isValidCpf() {
    return (control: AbstractControl): Validators => {
      const cpf = control.value;
      if (cpf) {
        let numbers, digits, sum, i, result, equalDigits;
        equalDigits = 1;
        if (cpf.length < 11) {
          return null as any;
        }

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { cpfNotValid: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { cpfNotValid: true };
          }
          return null as any;
        } else {
          return { cpfNotValid: true };
        }
      }
      return null as any;
    };
  }

  static isValidCnpj() {
    return (control: AbstractControl): Validators => {
      const cnpj = control.value;
      if (cnpj) {
        let length = cnpj.length - 2;
        let numbers = cnpj.substring(0, length);
        const digits = cnpj.substring(length);
        let sum = 0;
        let pos = length - 7;
        for (let i = length; i >= 1; i--) {
          sum += numbers.charAt(length - i) * pos--;
          if (pos < 2) pos = 9;
        }
        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result !== Number(digits.charAt(0))) {
          return { cnpjNotValid: true };
        }
        length = length + 1;
        numbers = cnpj.substring(0, length);
        sum = 0;
        pos = length - 7;
        for (let i = length; i >= 1; i--) {
          sum += numbers.charAt(length - i) * pos--;
          if (pos < 2) pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result !== Number(digits.charAt(1))) {
          return { cnpjNotValid: true };
        }
        return null as any;
      }
      return null as any;
    };
  }
}

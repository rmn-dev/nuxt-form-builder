import { validate, ValidationError } from 'class-validator';

export class Form<T> {
  public errors: { [key: string]: string };

  constructor(public value: any) {
    this.errors = {};
  }

  public get isValid(): boolean {
    return Object.keys(this.errors).length === 0;
  }

  public async validateModel() {
    let result = await validate(this.value as Object);
    this.errors = this.setError(result);
  }

  private setError(result: ValidationError[]): { [key: string]: string } {
    const errors: any = {};

    for (const error of result) {
      for (const key in error.constraints) {
        if (Object.prototype.hasOwnProperty.call(error.constraints, key)) {
          errors[error.property] = error.constraints[key];
        }
      }
    }

    return errors;
  }
}

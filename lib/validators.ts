import { IsNotEmpty as _IsNotEmpty, ValidationOptions } from 'class-validator';

export const Required = (options?: ValidationOptions): PropertyDecorator =>
  _IsNotEmpty({ message: 'Required', ...options });

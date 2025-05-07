'use client';

import React from 'react';
import { Field, FieldAttributes } from 'formik';

export interface InputFieldProps extends FieldAttributes<any> {
  label?: string;
  as?: string; // дозволяє вказати "select", "textarea" і т.д.
}

export default function InputField({
  label,
  id,
  as = 'input',
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        as={as} // ← ось тут використовується
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}

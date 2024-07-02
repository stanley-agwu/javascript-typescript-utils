import { forwardRef } from 'react';
import classNames from 'classnames';

import Input, { type InputProps } from '@Input/Input';
import { useInputGroupContext } from './InputGroupContext';
import styles from './InputGroup.module.scss';

export const InputGroupInput = forwardRef<
  HTMLInputElement,
  Omit<Omit<InputProps, 'label'>, 'error'>
>((inputProps, ref) => {
  const { value, disabled, onChange } = useInputGroupContext();
  return (
    <Input
      {...inputProps}
      className={classNames(styles.item, styles.input)}
      label={undefined}
      ref={ref}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
});

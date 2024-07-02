import classNames from 'classnames';

import { type InputGroupProps } from './InputGroupProps';
import { InputGroupContext } from './InputGroupContext';
import { InputGroupItem } from './InputGroupItem';

import styles from './InputGroup.module.scss';
import { InputGroupInput } from './InputGroupInput';

export const InputGroup = (props: InputGroupProps) => {
  const { disabled, error, success, label, id, children } = props;

  return (
    <InputGroupContext.Provider value={props}>
      {label && (
        <label
          className={classNames(styles.label, {
            [styles.disabledLabel]: disabled,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={classNames(
          styles.inputGroup,
          { [styles.disabled]: disabled },
          { [styles.successLabel]: !!success },
          { [styles.error]: !!error },
          props.className
        )}
      >
        {children}
      </div>
      {error && (
        <div
          className={classNames(styles.hint, { [styles.hintError]: !!error })}
        >
          {error}
        </div>
      )}
    </InputGroupContext.Provider>
  );
};

InputGroup.Item = InputGroupItem;
InputGroup.Input = InputGroupInput;

export default InputGroup;

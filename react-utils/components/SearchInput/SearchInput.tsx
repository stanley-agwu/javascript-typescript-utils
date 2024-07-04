import { ChangeEvent, Dispatch, useEffect } from 'react';
import classNames from 'classnames';
import { InputGroup } from '@inputgroup/inputgroup';

import { ReactComponent as CloseIcon } from './close.svg';
import { ReactComponent as SearchIcon } from './search-icon.svg';

import styles from './SearchInput.module.scss';

type OptionType = {
  value: string;
  label: string;
};

interface SearchInputProps {
  results: OptionType[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: (option: OptionType) => void;
  handleOnClear: () => void;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  value?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  name?: string;
}

export const SearchInput = ({
  results,
  onChange,
  handleOnClick,
  handleOnClear,
  setIsOpen,
  isOpen,
  value,
  placeholder,
  className,
  label,
  name,
}: SearchInputProps) => {
  useEffect(() => {
    if (results && Boolean(results.length)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [results, setIsOpen]);

  return (
    <>
      <InputGroup
        onChange={onChange}
        id={name || 'SearchInput'}
        name={name || 'SearchInput'}
        className={classNames(styles.search, className)}
        label={label}
        aria-label={label || 'Search'}
      >
        <InputGroup.item>
          <SearchIcon />
        </InputGroup.item>
        <InputGroup.input
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          name={name}
          value={value}
        />
        {value && (
          <InputGroup.item>
            <CloseIcon
              className={styles.close}
              onClick={handleOnClear}
              aria-label='Close icon'
            />
          </InputGroup.item>
        )}
      </InputGroup>
      {isOpen && (
        <ul className={styles.results} aria-label='Search results'>
          {results?.map((result) => (
            <li
              className={styles.result}
              key={result.value}
              onClick={() => handleOnClick(result)}
            >
              {result.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

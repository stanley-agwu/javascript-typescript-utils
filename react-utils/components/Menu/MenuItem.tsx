import {
  ButtonHTMLAttributes,
  cloneElement,
  ReactElement,
  ReactNode,
} from 'react';
import classNames from 'classnames';

import styles from './MenuItem.module.scss';

export enum MenuItemType {
  regular = 'regular',
  negative = 'negative',
}

export const MenuItem = ({
  itemType,
  children,
  className,
  icon,
  props,
}: {
  itemType: MenuItemType;
  children: ReactNode;
  className?: string;
  icon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={classNames(
      { [styles.negative]: itemType === MenuItemType.negative },
      styles.menuItem,
      className
    )}
  >
    {icon ? cloneElement(icon, { className: styles.icon }) : null}
    {children}
  </button>
);

import {
  Children,
  CloneElement,
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from 'hooks';
import icon from './menuIcon.svg';
import styles from './MenuButton.module.scss';

export const menuItems = ({
  children,
  isMenuOpen,
  className,
  setIsMenuOpen,
}: {
  children: ReactNode;
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}) => {
  const ref = useRef<HTMLDivElement>();
  useOnClickOutside(ref, () => setIsMenuOpen(false));
  return isMenuOpen ? (
    <div
      className={classNames(styles.menuItems, className)}
      ref={ref as MutableRefObject<HTMLDivElement>}
    >
      {Children.map(children, (child) =>
        cloneElement(child as any, {
          className: styles.menuItem,
          onClick(...args: any[]) {
            (child as any)?.onClick?.(...args);
            setIsMenuOpen(false);
          },
        })
      )}
    </div>
  ) : null;
};

export const menuButton = ({
  children,
  buttonComponent,
  onClick,
  noWrapper,
}: PropsWithChildren & {
  buttonComponent?: ReactElement;
  noWrapper?: boolean;
  onClick?: (e: SyntheticEvent) => void;
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickButton = (e: SyntheticEvent) => {
    setIsMenuOpen(!isMenuOpen);
    if (onClick) {
      return onClick(e);
    }
    return true;
  };

  const childrenNode = (
    <>
      {buttonComponent ? (
        clonedElement(buttonComponent, { onClick })
      ) : (
        <button
          className={styles.menuToggle}
          onClick={(e) => {
            e.stopPropagation();
            onClickButton(e);
          }}
          aria-label='menu button'
        >
          <img src={icon} alt='Menu icon' className={styles.menuIcon} />
        </button>
      )}
      {isMenuOpen && (
        <menuItems setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
          {children}
        </menuItems>
      )}
    </>
  );

  return noWrapper ? (
    childrenNode
  ) : (
    <div className={styles.menu}>{childrenNode}</div>
  );
};

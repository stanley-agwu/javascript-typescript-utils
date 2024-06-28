import { type PropsWithChildren, type ReactNode } from 'react';
import classNames from 'classnames';

import styled from '@emotion/styled';
import { SPACE } from 'stylesConfig';
import './Tag.scss';

const NeutralTag = styled.div`
  display: inline-flex;
  padding: ${SPACE}px ${SPACE + SPACE / 2}px ${SPACE}px ${SPACE + SPACE / 2}px;
  border-radius: 5px;
  background-color: var(--c-neutral-20);
  color: var($c-neutral-80);
  font-family: 'Montserrat', Roboto, Arial, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  align-items: center;
  width: fit-content;

  & > .icon {
    display: inline-flex;
    &:first-of-type {
      margin-right: 9.5px;
    }
  }
`;

const NavyTag = styled(NeutralTag)`
  background-color: var(--c-navy-20);
  color: var(--c-navy-80);
`;

const PositiveTag = styled(NeutralTag)`
  background-color: var(--c-positive-20);
  color: var(--c-positive-80);
`;

const OrangeTag = styled(NeutralTag)`
  background-color: var(--c-orange-20);
  color: var(--c-orange-80);
`;

const NegativeTag = styled(NeutralTag)`
  background-color: var(--c-negative-20);
  color: var(--c-negative-80);
`;

export enum ETagVariants {
  neutral = 'neutral',
  navy = 'navy',
  positive = 'positive',
  orange = 'orange',
  negative = 'negative',
}

const variants = {
  [ETagVariants.neutral]: NeutralTag,
  [ETagVariants.navy]: NavyTag,
  [ETagVariants.positive]: PositiveTag,
  [ETagVariants.orange]: OrangeTag,
  [ETagVariants.negative]: NegativeTag,
};

export interface ITagProps extends PropsWithChildren {
  variant?: ETagVariants;
  icon?: Exclude<ReactNode, string>;
  className?: string;
}

export const Tag = ({
  variant = ETagVariants.neutral,
  icon = null,
  children,
  ...props
}: ITagProps) => {
  const TagComponent = variants[variant];
  return (
    <TagComponent
      {...props}
      className={classNames('t-tag', variant, props.className)}
    >
      {icon && <div className='icon'>{icon}</div>}
      {children}
    </TagComponent>
  );
};

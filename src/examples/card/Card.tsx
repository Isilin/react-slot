import { PropsWithChildren } from 'react';
import { defineSlotComponent, getSlots } from '../../lib';

import classNames from 'classnames/bind';
import styles from './Card.module.css';
const cx = classNames.bind(styles);

export const Card = defineSlotComponent(
  ({ children }: PropsWithChildren) => {
    const { body, footer, header } = getSlots(children, Card);

    return (
      <div className={cx('card')}>
        {header && <div className={cx('card-header')}>{header}</div>}
        {header && (body || footer) && <Card.Separator />}
        {body && <div className={cx('card-body')}>{body}</div>}
        {body && footer && <Card.Separator />}
        {footer && <div className={cx('card-footer')}>{footer}</div>}
      </div>
    );
  },
  {
    slots: {
      header: ({ children }: PropsWithChildren) => <>{children}</>,
      body: ({ children }: PropsWithChildren) => <>{children}</>,
      footer: ({ children }: PropsWithChildren) => <>{children}</>,
    },
    extras: {
      Separator: () => <span className={cx('separator')} />,
    },
  },
);

import { findSlotOfType } from '../../utils/slot';
import styles from './Card.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export const Card = ({ children }: { children: React.ReactNode }) => {
  const header = findSlotOfType(children, Card.Header);
  const body = findSlotOfType(children, Card.Body);
  const footer = findSlotOfType(children, Card.Footer);

  return (
    <div className={cx('card')}>
      {header && <div className={cx('card-header')}>{header}</div>}
      {header && (body || footer) && <Card.Separator />}
      {body && <div className={cx('card-body')}>{body}</div>}
      {body && footer && <Card.Separator />}
      {footer && <div className={cx('card-footer')}>{footer}</div>}
    </div>
  );
};

Card.Header = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Card.Body = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Card.Footer = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Card.Separator = () => <span className={cx('separator')} />;

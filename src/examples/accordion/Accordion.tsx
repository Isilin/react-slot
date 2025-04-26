import {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { defineSlotComponent, getSlots } from '../../lib';

import classNames from 'classnames/bind';
import styles from './Accordion.module.css';
const cx = classNames.bind(styles);

type ItemProps = PropsWithChildren<{
  value: string;
  openItem?: string | null;
  setOpenItem?: (value: string | null) => void;
}>;

type TriggerProps = PropsWithChildren;

type ContentProps = PropsWithChildren;

const Item = defineSlotComponent(
  ({ children, value, openItem, setOpenItem }: ItemProps) => {
    const { trigger, content } = getSlots(children, Item);

    const isOpen = useMemo(() => openItem === value, [value, openItem]);
    const toggle = useCallback(
      () => setOpenItem?.(isOpen ? null : value),
      [value, setOpenItem, isOpen],
    );

    return (
      <div className={cx('item')}>
        <div className={cx('trigger')} onClick={toggle}>
          {trigger}
        </div>
        {isOpen && <div className={cx('content')}>{content}</div>}
      </div>
    );
  },
  {
    slots: {
      trigger: ({ children }: TriggerProps) => <>{children}</>,
      content: ({ children }: ContentProps) => <>{children}</>,
    },
  },
);

export const Accordion = defineSlotComponent(
  ({ children }: PropsWithChildren) => {
    const { item } = getSlots(children, Accordion);
    const items = (Array.isArray(item) ? item : item ? [item] : []) as Array<
      ReactElement<ItemProps>
    >;

    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
      <div className={cx('container')}>
        {items.map((i, idx) => (
          <Item
            key={idx}
            value={i.props.value}
            openItem={openItem}
            setOpenItem={setOpenItem}
          >
            {i.props.children}
          </Item>
        ))}
      </div>
    );
  },
  {
    slots: {
      item: Item,
      trigger: Item.Trigger,
      content: Item.Content,
    },
    rules: {
      item: 'multiple',
    },
  },
);

import { PropsWithChildren, ReactElement, useState } from 'react';
import { defineSlotComponent, getSlots } from '../../lib';

import classNames from 'classnames/bind';
import styles from './Tabs.module.css';
const cx = classNames.bind(styles);

type TriggerProps = PropsWithChildren<{
  value: string;
}>;

type ContentProps = PropsWithChildren<{
  value: string;
}>;

export const Tabs = defineSlotComponent(
  ({ children }: PropsWithChildren) => {
    const { trigger, content } = getSlots(children, Tabs);
    const triggers = (
      Array.isArray(trigger) ? trigger : trigger ? [trigger] : []
    ) as Array<ReactElement<TriggerProps>>;
    const contents = (
      Array.isArray(content) ? content : content ? [content] : []
    ) as Array<ReactElement<ContentProps>>;
    const [activeTab, setActiveTab] = useState(triggers[0]?.props.value);

    return (
      <div className={cx('container')}>
        <div className={cx('tabs')}>
          {triggers.map((t, idx) => (
            <button
              key={idx}
              className={cx({ active: activeTab === t.props.value })}
              onClick={() => setActiveTab(t.props.value)}
            >
              {t.props.children}
            </button>
          ))}
        </div>
        <div className={cx('content')}>
          {contents.find((c) => c.props.value === activeTab)}
        </div>
      </div>
    );
  },
  {
    slots: {
      trigger: ({ children }: TriggerProps) => <>{children}</>,
      content: ({ children }: ContentProps) => <>{children}</>,
    },
    rules: {
      trigger: 'multiple',
      content: 'multiple',
    },
  },
);

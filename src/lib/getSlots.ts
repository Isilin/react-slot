import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import type { SlotComponent, SlotMap, SlotResult, SlotRules } from './types';

export function getSlots<
  T extends { slots: SlotMap; rules?: Partial<SlotRules<T['slots']>> },
>(children: ReactNode, slotHost: T): SlotResult<T['slots']> {
  const slotComponents = slotHost.slots;
  const rules: Partial<SlotRules<T['slots']>> = slotHost.rules ?? {};
  const slots: Partial<
    Record<keyof T['slots'], ReactElement | ReactElement[]>
  > = {};
  const others: ReactNode[] = [];

  for (const key in slotComponents) {
    if (rules?.[key as keyof T['slots']] === 'multiple') {
      slots[key as keyof T['slots']] = [];
    }
  }

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      others.push(child);
      return;
    }

    const childType = child.type as SlotComponent;

    const matchKey = Object.entries(slotComponents).find(
      ([, slotComponent]) =>
        childType === slotComponent ||
        childType.displayName === slotComponent.displayName,
    )?.[0] as keyof T['slots'] | undefined;

    if (matchKey) {
      const rule = rules?.[matchKey] ?? 'single';
      if (rule === 'multiple') {
        (slots[matchKey] as ReactElement[]).push(child);
      } else {
        if (slots[matchKey] && process.env.NODE_ENV !== 'production') {
          throw new Error(
            `Slot "${String(matchKey)}" was provided multiple times but is declared as single.`,
          );
        }
        slots[matchKey] = child;
      }
    } else {
      others.push(child);
    }
  });

  return {
    ...(slots as Record<keyof T['slots'], ReactElement | ReactElement[]>),
    others,
  };
}

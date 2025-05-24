import type { ReactElement, ReactNode } from 'react';
import React from 'react';

import type {
  SlotComponent,
  SlotHost,
  SlotMap,
  SlotResult,
  SlotRules,
} from '../types';

export function getSlots<TSlots extends SlotMap>(
  children: ReactNode,
  slotHost: SlotHost<TSlots>,
): SlotResult<TSlots> {
  const slotComponents = slotHost.slots;
  const rules: Partial<SlotRules<TSlots>> = slotHost.rules ?? {};
  const slots: Partial<Record<keyof TSlots, ReactElement | ReactElement[]>> =
    {};
  const others: ReactNode[] = [];

  for (const key in slotComponents) {
    if (rules?.[key as keyof TSlots] === 'multiple') {
      slots[key as keyof TSlots] = [];
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
    )?.[0] as keyof TSlots | undefined;

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
    ...(slots as Record<keyof TSlots, ReactElement | ReactElement[]>),
    others,
  };
}

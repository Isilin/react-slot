import { pascalCase } from 'change-case';
import type { ReactNode } from 'react';

import type {
  ExtraMap,
  NamedComponent,
  SlotEnhancedComponent,
  SlotMap,
  SlotRules,
} from '../types';
import { getDisplayName } from '../utils/getDisplayName';

interface DefineSlotComponentOptions<
  TSlots extends SlotMap,
  TExtras extends ExtraMap,
> {
  slots: TSlots;
  extras?: TExtras;
  rules?: Partial<SlotRules<TSlots>>;
}

export function defineSlotComponent<
  TProps extends {} = { children: ReactNode },
  TSlots extends SlotMap = {},
  TExtras extends ExtraMap = {},
>(
  render: NamedComponent<TProps>,
  options: DefineSlotComponentOptions<TSlots, TExtras>,
): SlotEnhancedComponent<TProps, typeof render, TSlots, TExtras> {
  const { slots, extras, rules } = options;
  const componentName = getDisplayName(render);

  const Comp = ((props: TProps) => render(props)) as SlotEnhancedComponent<
    TProps,
    typeof render,
    TSlots,
    TExtras
  >;
  Comp.slots = slots;

  if (rules) {
    Comp.rules = options.rules;
  }

  Object.entries(slots).forEach(([key, comp]) => {
    const pascal = pascalCase(key, { mergeAmbiguousCharacters: true });
    comp.displayName ||= `${componentName}.${pascal}`;
    (Comp as Record<string, unknown>)[pascal] = comp;
  });

  if (extras) {
    Object.assign(Comp, extras);
  }

  return Comp;
}

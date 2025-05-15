import { pascalCase } from 'change-case';
import type { ComponentType, ReactElement, ReactNode } from 'react';

import type { ExtraMap, SlotMap, SlotRules } from './types';
import { getDisplayName } from './utils';

interface DefineSlotComponentOptions<
  TSlots extends SlotMap,
  TExtras extends ExtraMap,
> {
  slots: TSlots;
  extras?: TExtras;
  rules?: Partial<SlotRules<TSlots>>;
}

type NamedComponent<TProps = Record<string, unknown>> =
  | ((props: TProps) => ReactElement)
  | React.MemoExoticComponent<ComponentType<TProps>>
  | React.ForwardRefExoticComponent<TProps>;

export function defineSlotComponent<
  TProps extends {} = { children: ReactNode },
  TSlots extends SlotMap = {},
  TExtras extends ExtraMap = {},
>(
  render: NamedComponent<TProps>,
  options: DefineSlotComponentOptions<TSlots, TExtras>,
): typeof render & {
  [K in keyof TSlots as Capitalize<string & K>]: TSlots[K];
} & { slots: TSlots; rules?: Partial<SlotRules<TSlots>> } & TExtras {
  const { slots, extras, rules } = options;
  const componentName = getDisplayName(render);

  const Comp = ((props: TProps) => render(props)) as typeof render & {
    [K in keyof TSlots as Capitalize<string & K>]: TSlots[K];
  } & { slots: TSlots; rules?: Partial<SlotRules<TSlots>> } & TExtras;
  Comp.slots = slots;

  if (rules) {
    Comp.rules = options.rules;
  }

  for (const [key, comp] of Object.entries(slots)) {
    const pascal = pascalCase(key);
    comp.displayName ||= `${componentName}.${pascal}`;
    (Comp as Record<string, unknown>)[pascal] = comp;
  }

  if (extras) {
    Object.assign(Comp, extras);
  }

  return Comp;
}

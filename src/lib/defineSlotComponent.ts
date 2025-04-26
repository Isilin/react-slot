import { ReactElement, ReactNode } from 'react';
import { ExtraMap, SlotMap, SlotRules } from './types';
import { getDisplayName } from './utils';
import { pascalCase } from 'change-case';

interface DefineSlotComponentOptions<
  TSlots extends SlotMap,
  TExtras extends ExtraMap,
> {
  slots: TSlots;
  extras?: TExtras;
  rules?: Partial<SlotRules<TSlots>>;
}

type NamedComponent<TProps = any> =
  | ((props: TProps) => ReactElement)
  | React.MemoExoticComponent<any>
  | React.ForwardRefExoticComponent<any>;

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

  const Comp = ((props: TProps) => render(props)) as any;
  Comp.slots = slots;

  if (rules) {
    Comp.rules = options.rules;
  }

  for (const [key, comp] of Object.entries(slots)) {
    const pascal = pascalCase(key);
    comp.displayName ||= `${componentName}.${pascal}`;
    Comp[pascal] = comp;
  }

  if (extras) {
    Object.assign(Comp, extras);
  }

  return Comp;
}

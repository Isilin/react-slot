import type {
  ComponentType,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  ReactElement,
  ReactNode,
} from 'react';

export type SlotComponent<P = {}> = ComponentType<P> & { displayName?: string };
export type SlotMap = Record<string, SlotComponent>;
export type ExtraMap = Record<string, unknown>;

export interface SlotHost<TSlots extends SlotMap> {
  slots: TSlots;
  rules?: Partial<SlotRules<TSlots>>;
}

export type SlotRules<T extends SlotMap> = {
  [K in keyof T]: 'single' | 'multiple';
};

export type SlotResult<T extends SlotMap> = {
  [K in keyof T]?: ReactElement | ReactElement[];
} & { others: ReactNode[] };

export type NamedComponent<TProps = unknown> =
  | ((props: TProps) => ReactElement | null)
  | MemoExoticComponent<(props: TProps) => ReactElement | null>
  | ForwardRefExoticComponent<TProps>;

export type SlotEnhancedComponent<
  TProps extends object,
  TComponent extends NamedComponent<TProps>,
  TSlots extends SlotMap,
  TExtras extends ExtraMap = {},
> = TComponent & {
  [K in keyof TSlots as Capitalize<string & K>]: TSlots[K];
} & {
  slots: TSlots;
  rules?: Partial<SlotRules<TSlots>>;
} & TExtras;

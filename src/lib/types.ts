import { ComponentType, ReactElement, ReactNode } from 'react';

export type SlotComponent = ComponentType<any> & { displayName?: string };
export type SlotMap = Record<string, SlotComponent>;
export type ExtraMap = Record<string, unknown>;

export type SlotRules<T extends SlotMap> = {
  [K in keyof T]: 'single' | 'multiple';
};

export type SlotResult<T extends SlotMap> = {
  [K in keyof T]?: ReactElement | ReactElement[];
} & { others: ReactNode[] };

import React, { ReactNode } from 'react';

export const findSlotOfType = <T = unknown>(
  children: ReactNode,
  type: React.ComponentType<T>,
): React.ReactElement<T> | undefined => {
  return React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === type,
  ) as React.ReactElement<T> | undefined;
};

export function findAllSlotsOfType<T = unknown>(
  children: React.ReactNode,
  type: React.ComponentType<T>,
): React.ReactElement<T>[] {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === type,
  ) as React.ReactElement<T>[];
}

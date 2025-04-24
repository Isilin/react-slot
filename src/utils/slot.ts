import React, { ComponentType, Fragment, isValidElement, ReactNode } from 'react';

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
};

export function findOtherSlots = (
  children: ReactNode,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  ...excludedTypes: ComponentType<any>[]
): ReactNode[] => {
  const result: ReactNode[] = [];
  const processChild = (child: ReactNode) => {
    if (!isValidElement(child)) {
      result.push(child);
    }
    else if (child.type === Fragment) {
      React.children.forEach(child.props.children, processChild);
    }
    else if (excludedTypes.includes(child.type as ComponentType<unknown>)) {
      return;
    }
    else {
      result.push(child);
    }
  };
  React.Children.forEach(children, processChild);
  return result;
};

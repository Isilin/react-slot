import type { ComponentType } from 'react';

export function getDisplayName(component: unknown): string {
  if (typeof component === 'function') {
    return (
      (component as ComponentType).displayName || component.name || 'Component'
    );
  }
  if (
    typeof component === 'object' &&
    component !== null &&
    'displayName' in component
  ) {
    return (component as { displayName?: string }).displayName || 'Component';
  }
  return 'Component';
}

export function getDisplayName(component: unknown): string {
  if (typeof component === 'function') {
    return component.name || 'Component';
  }
  if (
    typeof component === 'object' &&
    component !== null &&
    'displayName' in component
  ) {
    return (component as any).displayName || 'Component';
  }
  return 'Component';
}

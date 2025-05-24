interface DisplayNamed {
  displayName?: string;
  name?: string;
  type?: unknown;
}

function extractDisplayName(
  from: DisplayNamed | undefined,
): string | undefined {
  if (!from) return undefined;

  if (typeof from.displayName === 'string') return from.displayName;
  if (typeof from.name === 'string') return from.name;

  if (typeof from.type === 'function') {
    const type = from.type as DisplayNamed;
    return extractDisplayName(type);
  }

  if (typeof from.type === 'object' && from.type !== null) {
    return extractDisplayName(from.type as DisplayNamed);
  }

  return undefined;
}

export function getDisplayName(component: unknown): string {
  const maybe = component as DisplayNamed;
  return extractDisplayName(maybe) ?? 'Component';
}

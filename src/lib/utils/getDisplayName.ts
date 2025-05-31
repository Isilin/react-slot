interface DisplayNamed {
  displayName?: string;
  name?: string;
  type?: unknown;
}

function extractDisplayName(from: unknown): string | undefined {
  if (
    typeof from !== 'function' &&
    (typeof from !== 'object' || from === null)
  ) {
    return undefined;
  }

  const maybe = from as DisplayNamed;

  if (typeof maybe.displayName === 'string') return maybe.displayName;
  if (typeof maybe.name === 'string') return maybe.name;

  const nested = (maybe as { type?: unknown }).type;

  return extractDisplayName(nested);
}

export function getDisplayName(component: unknown): string {
  const maybe = component as DisplayNamed;
  return extractDisplayName(maybe) ?? 'Component';
}

import { forwardRef, memo } from 'react';
import { describe, expect, it } from 'vitest';

import { getDisplayName } from './getDisplayName';

describe('getDisplayName', () => {
  it('returns displayName from function component', () => {
    const Comp = () => <></>;
    Comp.displayName = 'CustomName';
    expect(getDisplayName(Comp)).toBe('CustomName');
  });

  it('returns function name if no displayName is present', () => {
    function NamedComponent() {
      return <></>;
    }
    expect(getDisplayName(NamedComponent)).toBe('NamedComponent');
  });

  it('returns displayName from a memo component', () => {
    const Base = () => <></>;
    const Memo = memo(Base);
    Memo.displayName = 'MemoComponent';
    expect(getDisplayName(Memo)).toBe('MemoComponent');
  });

  it('falls back to wrapped component name inside memo', () => {
    const Named = () => <></>;
    const Memo = memo(Named);
    expect(getDisplayName(Memo)).toBe('Named');
  });

  it('returns displayName from a forwardRef component', () => {
    const Forward = forwardRef<HTMLDivElement>(() => <></>);
    Forward.displayName = 'ForwardComponent';
    expect(getDisplayName(Forward)).toBe('ForwardComponent');
  });

  it('falls back to wrapped function name inside forwardRef', () => {
    const Inner = forwardRef(function MyInner() {
      return <></>;
    });
    expect(getDisplayName(Inner)).toBe('Component');
  });

  it('returns name from type function if no displayName', () => {
    function InnerComponent() {
      return <></>;
    }
    const wrapped = { type: InnerComponent };
    expect(getDisplayName(wrapped)).toBe('InnerComponent');
  });

  it('returns undefined for empty object with no name/displayName/type', () => {
    expect(getDisplayName({})).toBe('Component');
  });

  it('returns "Component" for null, undefined, or unknown types', () => {
    expect(getDisplayName(undefined)).toBe('Component');
    expect(getDisplayName(null)).toBe('Component');
    expect(getDisplayName('')).toBe('Component');
    expect(getDisplayName(42)).toBe('Component');
  });

  it('handles deeply nested .type chains', () => {
    const Comp = () => null;
    const level3 = { type: { type: { type: Comp } } };
    Comp.displayName = 'DeepSlot';
    expect(getDisplayName(level3)).toBe('DeepSlot');
  });
});

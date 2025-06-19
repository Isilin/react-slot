import { render, screen } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { forwardRef, memo } from 'react';
import { describe, expect, it } from 'vitest';

import { defineSlotComponent } from './defineSlotComponent';

describe('defineSlotComponent', () => {
  it('assigns slots to the component', () => {
    const Slot = () => <></>;
    const Comp = defineSlotComponent(() => <></>, {
      slots: { slot: Slot },
    });

    expect(Comp.slots).toHaveProperty('slot', Slot);
  });

  // it('generates PascalCase slot accessors', () => {
  //   const Slot = () => <></>;
  //   const Comp = defineSlotComponent(() => <></>, {
  //     slots: { my_slot: Slot },
  //   });

  //   expect(Comp.MySlot).toBe(Slot);
  //   expect(Slot.displayName).toMatch(/\.MySlot$/);
  // });

  it('preserves custom displayName on slot component', () => {
    const Slot = () => <></>;
    Slot.displayName = 'MyCustomName';
    const Comp = defineSlotComponent(() => <></>, {
      slots: { special: Slot },
    });

    expect(Comp.Special).toBe(Slot);
    expect(Slot.displayName).toBe('MyCustomName');
  });

  it('attaches rules if provided', () => {
    const Slot = () => <></>;
    const Comp = defineSlotComponent(() => <></>, {
      slots: { test: Slot },
      rules: { test: 'multiple' },
    });

    expect(Comp.rules?.test).toBe('multiple');
  });

  it('attaches extras to component', () => {
    const Slot = () => null;
    const Comp = defineSlotComponent(() => <></>, {
      slots: { test: Slot },
      extras: {
        version: '1.0',
        meta: { stable: true },
      },
    });

    expect(Comp.version).toBe('1.0');
    expect(Comp.meta.stable).toBe(true);
  });

  it('preserves forward reference', () => {
    const SlotA = () => <span>Slot A</span>;

    const Base = forwardRef<HTMLDivElement, { label: string }>((props, ref) => {
      return (
        <div ref={ref}>
          <p>{props.label}</p>
        </div>
      );
    });

    const Comp = defineSlotComponent(Base, {
      slots: {
        slotA: SlotA,
      },
    });

    render(<Comp label="Hello" />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(typeof Comp.SlotA).toBe('function');
  });

  it('returns a component that renders correctly with memo()', () => {
    const Base = memo(({ children }: PropsWithChildren) => (
      <div>Base content {children}</div>
    ));

    const Enhanced = defineSlotComponent(Base, {
      slots: {
        header: () => <header>Header</header>,
        footer: () => <footer>Footer</footer>,
      },
    });

    render(
      <Enhanced>
        <Enhanced.Header />
        <p>Hello!</p>
        <Enhanced.Footer />
      </Enhanced>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Hello!')).toBeInTheDocument();
    expect(screen.getByText('Base content')).toBeInTheDocument();
  });
});

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
});

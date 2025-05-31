import React from 'react';
import { describe, expect, it } from 'vitest';

import { getSlots } from './getSlots';

describe('getSlots', () => {
  const Header = () => <header>Header</header>;
  const Footer = () => <footer>Footer</footer>;

  Header.displayName = 'Header';
  Footer.displayName = 'Footer';

  it('extracts single slot correctly', () => {
    const children = [<Header key="h" />];
    const result = getSlots(children, {
      slots: { header: Header },
    });

    expect((result.header as any)?.type).toBe(Header);
    expect(result.others).toHaveLength(0);
  });

  it('extracts multiple slots when rule is "multiple"', () => {
    const children = [<Footer key="f1" />, <Footer key="f2" />];
    const result = getSlots(children, {
      slots: { footer: Footer },
      rules: { footer: 'multiple' },
    });

    expect(Array.isArray(result.footer)).toBe(true);
    expect(result.footer as React.ReactElement[]).toHaveLength(2);
    expect(result.others).toHaveLength(0);
  });

  it('throws if multiple slots passed but rule is "single"', () => {
    const children = [<Footer key="f1" />, <Footer key="f2" />];

    expect(() =>
      getSlots(children, {
        slots: { footer: Footer },
        rules: { footer: 'single' },
      }),
    ).toThrow(/provided multiple times but is declared as single/);
  });

  it('places non-slot children in "others"', () => {
    const children = [
      <Header key="h" />,
      <span key="txt">hello</span>,
      'world',
      <Footer key="f" />,
    ];

    const result = getSlots(children, {
      slots: { header: Header, footer: Footer },
    });

    expect(result.header).toBeDefined();
    expect(result.footer).toBeDefined();
    expect(result.others).toEqual([<span key="txt">hello</span>, 'world']);
  });

  it('matches slot by displayName if reference mismatch', () => {
    const OtherFooter = () => null;
    OtherFooter.displayName = 'Footer';

    const children = [<OtherFooter key="f" />];

    const result = getSlots(children, {
      slots: { footer: Footer }, // Footer !== OtherFooter, but same displayName
    });

    expect(result.footer).toBeDefined();
  });
});

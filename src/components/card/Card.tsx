import { findSlotOfType } from '../../utils/slot';

export const Card = ({ children }: { children: React.ReactNode }) => {
  const header = findSlotOfType(children, Card.Header);
  const body = findSlotOfType(children, Card.Body);
  const footer = findSlotOfType(children, Card.Footer);

  return (
    <div className="rounded-x2 shadow p-4 bg-black">
      {header && <div className="mb-2">{header}</div>}
      {body && <div className="mb-2">{body}</div>}
      {footer && (
        <div className="mt-2 text-sm text-muted-foreground">{footer}</div>
      )}
    </div>
  );
};

Card.Header = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Card.Body = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Card.Footer = ({ children }: { children: React.ReactNode }) => <>{children}</>;

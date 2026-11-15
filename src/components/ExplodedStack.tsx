import { Button, Checkbox, Input, Switch } from 'thira-ui';

const swatches = [
  ['--thira-accent', 'accent'],
  ['--thira-surface', 'surface'],
  ['--thira-text', 'text'],
  ['--thira-danger', 'danger'],
  ['--thira-border-strong', 'border'],
  ['--thira-text-muted', 'muted'],
] as const;

/**
 * Three layers of how an interface is built: tokens → primitives → components.
 * Static HTML; the CSS pulls the layers apart as you scroll.
 */
export function ExplodedStack() {
  return (
    <div className="stack" inert>
      <div className="layer layer-tokens">
        <div className="swatches">
          {swatches.map(([token, name]) => (
            <div key={token} className="swatch">
              <span style={{ background: `var(${token})` }} />
              <code>{name}</code>
            </div>
          ))}
        </div>
      </div>

      <div className="layer layer-primitives">
        <div className="wire wire-title" />
        <div className="wire wire-field" />
        <div className="wire-row">
          <div className="wire wire-toggle" />
          <div className="wire wire-line" />
        </div>
        <div className="wire-row end">
          <div className="wire wire-btn" />
          <div className="wire wire-btn solid" />
        </div>
      </div>

      <div className="layer layer-components">
        <p className="layer-heading">Create workspace</p>
        <Input label="Name" defaultValue="Acme Studio" />
        <Switch label="Invite by email" defaultChecked />
        <Checkbox label="Share usage analytics" />
        <div className="layer-actions">
          <Button variant="ghost">
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
}

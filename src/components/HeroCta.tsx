import { Button } from 'thira-ui';

/** Rendered to static HTML at build time — no client JS. */
export function HeroCta() {
  return (
    <div className="cta">
      <Button size="lg" render={<a href="#work" />}>
        See my work
      </Button>
      <Button size="lg" variant="outline" render={<a href="#writing" />}>
        Read my writing
      </Button>
    </div>
  );
}

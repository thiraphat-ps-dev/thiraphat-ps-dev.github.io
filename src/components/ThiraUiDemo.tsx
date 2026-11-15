import { Button, Card, Checkbox, Input, Switch, Tabs } from 'thira-ui';

/**
 * Real thira-ui components, rendered to static HTML at build time.
 * Generic sample content only.
 */
export function ThiraUiDemo() {
  return (
    <Card variant="elevated" className="demo-card">
      <Card.Header>
        <Card.Title>Workspace settings</Card.Title>
        <Card.Description>Built entirely with thira-ui.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Tabs defaultValue="general">
          <Tabs.List aria-label="Settings sections">
            <Tabs.Tab value="general">General</Tabs.Tab>
            <Tabs.Tab value="members">Members</Tabs.Tab>
            <Tabs.Tab value="billing">Billing</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="general">
            <div className="demo-stack">
              <Input label="Workspace name" defaultValue="Acme Studio" />
              <Switch label="Email notifications" defaultChecked />
              <Checkbox label="Share usage analytics" />
            </div>
          </Tabs.Panel>
        </Tabs>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost">Cancel</Button>
        <Button>Save changes</Button>
      </Card.Footer>
    </Card>
  );
}

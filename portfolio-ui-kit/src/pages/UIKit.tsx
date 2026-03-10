import React from 'react';
import { Button, Input, Card, Alert } from '../components/ui';

const UIKit: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">UI Kit</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
        <div className="space-y-4 max-w-md">
          <Input id="normal" label="Normal" placeholder="Type here" />
          <Input id="error" label="Error" placeholder="Type here" error="Something went wrong" />
          <Input id="help" label="With help text" placeholder="Type here" helpText="This is the help text" />
          <Input id="disabled" label="Disabled" placeholder="Cannot type" disabled />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Elevated" variant="elevated">
            Card content
          </Card>
          <Card title="Outlined" variant="outlined">
            Card content
          </Card>
          <Card title="Filled" variant="filled">
            Card content
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="space-y-4 max-w-md">
          <Alert variant="info" title="Info" dismissible>
            This is an info alert
          </Alert>
          <Alert variant="success" title="Success" dismissible>
            This is a success alert
          </Alert>
          <Alert variant="warning" title="Warning" dismissible>
            This is a warning alert
          </Alert>
          <Alert variant="error" title="Error" dismissible>
            This is an error alert
          </Alert>
        </div>
      </section>
    </div>
  );
};

export default UIKit;

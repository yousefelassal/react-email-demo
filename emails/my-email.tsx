import * as React from 'react';
import { Body, Text, Button, Html, Hr } from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";
import { render } from '@react-email/render';

export default function MyTemplate(props) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Text className="text-3xl">Some title</Text>
          <Hr />
          <Button href="https://example.com">Click me</Button>
        </Body>
      </Tailwind>
    </Html>
  );
}

const html = render(<MyTemplate />, {
    pretty: true,
});

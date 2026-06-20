import { createFileRoute } from '@tanstack/react-router'
import { allComponents } from 'content-collections'
import { MDXContent } from "@content-collections/mdx/react";
import { Alert, Spinner, Table } from '@blenx-dev/ui/components';
export const Route = createFileRoute('/docs/components/button')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log({allComponents})
  return <div>Hello "/docs/components/button"!


{allComponents.map((component) => (
          <li key={component._meta.path}>
            <h2>{component.content}</h2>
    <MDXContent code={component.mdx}
    components={{
      Alert,
      Spinner,
      Table,
    }}/>
          </li>
        ))}

  </div>
}

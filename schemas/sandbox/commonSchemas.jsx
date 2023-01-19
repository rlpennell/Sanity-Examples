import React from 'react';
import { EarthAmericasIcon } from '@sanity/icons';
import { Box, Button, Popover } from '@sanity/ui';
import { CodePreview } from './components/CodePreview';

export const commonSchemas = {
  name: 'commonSchemas',
  title: 'Common Schemas',
  description: 'Common schemas used in the community',
  icon: EarthAmericasIcon,
  type: 'document',
  fields: [
    {
      name: 'hiddenBasedOnSibling',
      title: 'Hide Field Based off of Sibling',
      description: (
        <CodePreview
          string={`
        {
          name: 'hiddenBasedOnSibling',
          title: 'Hide Field Based off of Sibling',
          type: 'object',
          fields: [
            {
              name: 'field1',
              type: 'boolean',
            },
            {
              name: 'field2',
              type: 'string',
              hidden: ({ parent }) => !parent?.field1,
              validation: Rule =>
                Rule.custom((value, { parent }) =>
                  parent?.field1 && !value ? 'This field is required' : true
                ),
            },
          ],
        },
      `}
        />
      ),
      type: 'object',
      fields: [
        {
          name: 'field1',
          type: 'boolean',
        },
        {
          name: 'field2',
          type: 'string',
          hidden: ({ parent }) => !parent?.field1,
          validation: Rule =>
            Rule.custom((value, { parent }) =>
              parent?.field1 && !value ? 'This field is required' : true
            ),
        },
      ],
    },
  ],
};

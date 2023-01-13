import { componentDependencies } from '../schemas/sandbox/componentDependencies';
import {
  HelpCircleIcon,
  ComponentIcon,
  PlugIcon,
  CodeIcon,
} from '@sanity/icons';

export const singletonPlugin = types => ({
  name: 'singletonPlugin',
  document: {
    newDocumentOptions: prev =>
      prev.filter(template => !types.includes(template.templateId)),
    actions: (prev, { schemaType }) =>
      types.includes(schemaType)
        ? prev.filter(({ action }) => !['delete', 'duplicate'].includes(action))
        : prev,
  },
});

export const structure = (S, context) =>
  S.list()
    .title('Sanity Love Content')
    .items([
      S.listItem()
        .title('Sandbox')
        .icon(HelpCircleIcon)
        .child(S.document().id('sandbox').schemaType('sandbox')),
      S.listItem()
        .title('Inputs')
        .icon(ComponentIcon)
        .child(
          S.list()
            .title('Inputs')
            .items([
              S.listItem()
                .title('Custom Inputs')
                .icon(ComponentIcon)
                .child(S.document().id('inputs').schemaType('inputs')),
              S.listItem()
                .title('Component Dependencies')
                .icon(PlugIcon)
                .child(
                  S.list()
                    .title('Component Dependencies')
                    .items([
                      ...S.documentTypeListItems().filter(item =>
                        componentDependencies
                          .map(component => component.name)
                          .includes(item.getId())
                      ),
                    ])
                ),
            ])
        ),
      S.listItem().title('Primitives').icon(CodeIcon),
    ]);

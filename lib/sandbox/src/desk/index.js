import {componentDependencies} from '../../schemas/componentDependencies'
import {HelpCircleIcon, IceCreamIcon, PlugIcon} from '@sanity/icons'

export const structure = (S, context) =>
  S.list()
    .title('Sanity Love Content')
    .items([
      S.listItem()
        .title('Sandbox')
        .icon(HelpCircleIcon)
        .child(S.document().id('sandbox').schemaType('sandbox')),
      S.divider(),
      S.listItem()
        .title('Inputs')
        .icon(IceCreamIcon)
        .child(S.document().id('inputs').schemaType('inputs')),
      S.divider(),
      S.listItem()
        .title('Component Dependencies')
        .icon(PlugIcon)
        .child(
          S.list()
            .title('Component Dependencies')
            .items([
              ...S.documentTypeListItems().filter((item) =>
                componentDependencies.map((component) => component.name).includes(item.getId())
              ),
            ])
        ),
      S.documentTypeListItem('sandbox').id('test'),
    ])

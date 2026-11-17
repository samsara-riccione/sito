import type {StructureResolver} from 'sanity/structure'

export const struttura: StructureResolver = (S) =>
  S.list()
    .title('Contenuti del sito')
    .items([
      S.listItem()
        .title('Avvisi')
        .schemaType('avviso')
        .child(S.documentTypeList('avviso').title('Avvisi in cima al sito')),
      S.listItem()
        .title('Eventi e party')
        .schemaType('evento')
        .child(
          S.documentTypeList('evento')
            .title('Eventi e party')
            .defaultOrdering([{field: 'inizio', direction: 'asc'}]),
        ),
      S.divider(),
      S.listItem()
        .title('Menu: categorie')
        .schemaType('categoriaMenu')
        .child(
          S.documentTypeList('categoriaMenu')
            .title('Categorie del menu')
            .defaultOrdering([{field: 'ordine', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Menu: piatti')
        .schemaType('piatto')
        .child(S.documentTypeList('piatto').title('Piatti')),
    ])

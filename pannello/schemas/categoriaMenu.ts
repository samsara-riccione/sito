import {defineField, defineType} from 'sanity'

export const categoriaMenu = defineType({
  name: 'categoriaMenu',
  title: 'Categoria del menu',
  type: 'document',
  fields: [
    defineField({name: 'nome', title: 'Nome', type: 'string', description: 'Esempio: Antipasti, Primi, Piadine, Cocktail.', validation: (r) => r.required()}),
    defineField({name: 'ordine', title: 'Ordine nel menu', type: 'number', description: '1 in alto, numeri più grandi più in basso.', initialValue: 10}),
  ],
  orderings: [{title: 'Ordine', name: 'ordine', by: [{field: 'ordine', direction: 'asc'}]}],
  preview: {select: {title: 'nome', ordine: 'ordine'}, prepare: ({title, ordine}) => ({title, subtitle: `Posizione ${ordine ?? '-'}`})},
})

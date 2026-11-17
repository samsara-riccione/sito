import {defineField, defineType} from 'sanity'

const ALLERGENI = [
  'Glutine', 'Crostacei', 'Uova', 'Pesce', 'Arachidi', 'Soia', 'Latte',
  'Frutta a guscio', 'Sedano', 'Senape', 'Sesamo', 'Solfiti', 'Lupini', 'Molluschi',
]

export const piatto = defineType({
  name: 'piatto',
  title: 'Piatto o bevanda',
  type: 'document',
  fields: [
    defineField({name: 'nome', title: 'Nome', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'categoriaMenu'}],
      validation: (r) => r.required(),
    }),
    defineField({name: 'descrizione', title: 'Descrizione', type: 'text', rows: 2}),
    defineField({name: 'prezzo', title: 'Prezzo (€)', type: 'number', validation: (r) => r.required().min(0)}),
    defineField({
      name: 'allergeni',
      title: 'Allergeni',
      type: 'array',
      of: [{type: 'string'}],
      options: {list: ALLERGENI.map((a) => ({title: a, value: a})), layout: 'grid'},
    }),
    defineField({name: 'disponibile', title: 'Disponibile', type: 'boolean', initialValue: true, description: 'Spegnilo se il piatto finisce: sparisce dal menu senza cancellarlo.'}),
    defineField({name: 'ordine', title: 'Ordine nella categoria', type: 'number', initialValue: 10}),
  ],
  orderings: [{title: 'Ordine', name: 'ordine', by: [{field: 'ordine', direction: 'asc'}]}],
  preview: {
    select: {title: 'nome', prezzo: 'prezzo', cat: 'categoria.nome', disponibile: 'disponibile'},
    prepare: ({title, prezzo, cat, disponibile}) => ({
      title,
      subtitle: [cat, prezzo != null ? `${prezzo} €` : '', disponibile === false ? 'NON DISPONIBILE' : ''].filter(Boolean).join(' · '),
    }),
  },
})

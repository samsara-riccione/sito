import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  description: 'Gli sponsor nella fascia in fondo al sito.',
  fields: [
    defineField({name: 'nome', title: 'Nome', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'logo',
      title: 'Logo (versione bianca)',
      type: 'image',
      description:
        'Usa solo il file ufficiale del partner, nella versione bianca a un colore, in SVG o PNG trasparente. Non cambiare colori o proporzioni.',
      options: {accept: 'image/svg+xml,image/png'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'link', title: 'Sito del partner (facoltativo)', type: 'url'}),
    defineField({
      name: 'ordine',
      title: 'Ordine nella fascia',
      type: 'number',
      description: '1 per primo, numeri più grandi più avanti.',
      initialValue: 10,
    }),
    defineField({
      name: 'attivo',
      title: 'Mostra sul sito',
      type: 'boolean',
      initialValue: true,
      description: 'Spegnilo a fine accordo: il partner sparisce senza cancellarlo.',
    }),
    defineField({
      name: 'note',
      title: 'Note interne (non visibili sul sito)',
      type: 'text',
      rows: 2,
      description: 'Es. scadenza accordo, referente, ok ricevuto per il sito.',
    }),
  ],
  orderings: [{title: 'Ordine', name: 'ordine', by: [{field: 'ordine', direction: 'asc'}]}],
  preview: {
    select: {title: 'nome', media: 'logo', attivo: 'attivo', ordine: 'ordine'},
    prepare: ({title, media, attivo, ordine}) => ({
      title,
      media,
      subtitle: `${attivo ? 'Sul sito' : 'Spento'} · posizione ${ordine ?? '-'}`,
    }),
  },
})

import {defineField, defineType} from 'sanity'

export const evento = defineType({
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({name: 'titolo', title: 'Nome dell\'evento', type: 'string', validation: (r) => r.required().max(60)}),
    defineField({
      name: 'slug',
      title: 'Indirizzo della pagina',
      type: 'slug',
      description: 'Si crea da solo dal nome: clicca "Genera".',
      options: {source: 'titolo', maxLength: 60},
      validation: (r) => r.required(),
    }),
    defineField({name: 'inizio', title: 'Inizio', type: 'datetime', validation: (r) => r.required()}),
    defineField({name: 'fine', title: 'Fine', type: 'datetime'}),
    defineField({
      name: 'stato',
      title: 'Stato',
      type: 'string',
      initialValue: 'programmato',
      options: {
        layout: 'radio',
        list: [
          {title: 'In programma', value: 'programmato'},
          {title: 'Sold out', value: 'soldout'},
          {title: 'Rinviato', value: 'rinviato'},
          {title: 'Annullato', value: 'annullato'},
        ],
      },
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione breve',
      type: 'text',
      rows: 3,
      description: 'Due o tre frasi. Ricorda: il beach party è di giorno e al tramonto.',
      validation: (r) => r.max(280),
    }),
    defineField({
      name: 'lineup',
      title: 'Line-up',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Un nome per riga: dj, vocalist, ospiti.',
    }),
    defineField({
      name: 'immagine',
      title: 'Immagine',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Descrizione per chi non vede l\'immagine', type: 'string'})],
    }),
    defineField({name: 'prezzoDa', title: 'Prezzo a partire da (€)', type: 'number', validation: (r) => r.min(0)}),
    defineField({name: 'linkBiglietti', title: 'Link per biglietti o tavoli', type: 'url'}),
    defineField({
      name: 'inEvidenza',
      title: 'In evidenza in homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [{title: 'Data', name: 'data', by: [{field: 'inizio', direction: 'asc'}]}],
  preview: {
    select: {title: 'titolo', inizio: 'inizio', stato: 'stato', media: 'immagine'},
    prepare: ({title, inizio, stato, media}) => ({
      title,
      media,
      subtitle: [
        inizio ? new Date(inizio).toLocaleDateString('it-IT', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}) : 'Senza data',
        stato && stato !== 'programmato' ? stato.toUpperCase() : '',
      ].filter(Boolean).join(' · '),
    }),
  },
})

import {defineField, defineType} from 'sanity'

export const tappaTour = defineType({
  name: 'tappaTour',
  title: 'Tappa del tour',
  type: 'document',
  description: 'Le locandine delle date di Samsara on Tour nei club.',
  fields: [
    defineField({
      name: 'data',
      title: 'Data della serata',
      type: 'date',
      description: 'Il giorno dopo la serata la locandina sparisce da sola dal sito.',
      options: {dateFormat: 'DD/MM/YYYY'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'citta', title: 'Città', type: 'string', description: 'Es. Teramo, Busto Arsizio (VA).', validation: (r) => r.required().max(40)}),
    defineField({name: 'locale', title: 'Nome del club', type: 'string', description: 'Es. Madre Natura.', validation: (r) => r.required().max(40)}),
    defineField({
      name: 'locandina',
      title: 'Locandina',
      type: 'image',
      description: 'La locandina ufficiale in verticale (JPG, PNG o WebP), così come esce dalla grafica.',
      options: {accept: 'image/jpeg,image/png,image/webp'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'linkBiglietti',
      title: 'Link per biglietti o tavoli (facoltativo)',
      type: 'url',
      description: 'Es. la pagina Ticketnation della serata. Se c\'è, la locandina diventa cliccabile.',
      validation: (r) => r.uri({scheme: ['https']}),
    }),
    defineField({
      name: 'attivo',
      title: 'Mostra sul sito',
      type: 'boolean',
      initialValue: true,
      description: 'Spegnilo se la data salta: la locandina sparisce senza cancellarla.',
    }),
  ],
  orderings: [{title: 'Data', name: 'data', by: [{field: 'data', direction: 'asc'}]}],
  preview: {
    select: {citta: 'citta', locale: 'locale', data: 'data', media: 'locandina', attivo: 'attivo'},
    prepare: ({citta, locale, data, media, attivo}) => ({
      title: [citta, locale].filter(Boolean).join(' · '),
      media,
      subtitle: [
        data ? new Date(data + 'T12:00:00').toLocaleDateString('it-IT', {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}) : 'Senza data',
        attivo === false ? 'SPENTA' : '',
      ].filter(Boolean).join(' · '),
    }),
  },
})

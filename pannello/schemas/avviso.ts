import {defineField, defineType} from 'sanity'

export const avviso = defineType({
  name: 'avviso',
  title: 'Avviso',
  type: 'document',
  description: 'Una barra sottile in cima al sito. Esempio: "Oggi chiusi per maltempo".',
  fields: [
    defineField({
      name: 'testo',
      title: 'Testo',
      type: 'string',
      description: 'Una frase corta, al massimo 90 caratteri. Niente maiuscole urlate.',
      validation: (r) => r.required().max(90),
    }),
    defineField({
      name: 'attivo',
      title: 'Mostra sul sito',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'dal',
      title: 'Visibile dal',
      type: 'datetime',
      description: 'Lascia vuoto per mostrarlo subito.',
    }),
    defineField({
      name: 'al',
      title: 'Visibile fino al',
      type: 'datetime',
      description: 'Lascia vuoto per tenerlo finché non lo spegni.',
    }),
    defineField({
      name: 'linkTesto',
      title: 'Testo del link (facoltativo)',
      type: 'string',
      description: 'Esempio: "Prenota". Lascia vuoto se non serve un link.',
      validation: (r) => r.max(24),
    }),
    defineField({
      name: 'link',
      title: 'Link (facoltativo)',
      type: 'url',
      validation: (r) => r.uri({scheme: ['https', 'mailto', 'tel']}),
    }),
  ],
  preview: {
    select: {title: 'testo', attivo: 'attivo', al: 'al'},
    prepare: ({title, attivo, al}) => ({
      title,
      subtitle: attivo ? (al ? `Attivo fino al ${new Date(al).toLocaleDateString('it-IT')}` : 'Attivo') : 'Spento',
    }),
  },
})

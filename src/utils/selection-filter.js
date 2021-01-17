export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((it) => it.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((it) => it.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((it) => it.genre === 'children'),
      },
      {
        title: 'Crime',
        data: series.filter((it) => it.genre === 'crime'),
      },
      {
        title: 'Feel Good',
        data: series.filter((it) => it.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((it) => it.genre === 'drama'),
      },
      {
        title: 'Children',
        data: films.filter((it) => it.genre === 'children'),
      },
      {
        title: 'Suspense',
        data: films.filter((it) => it.genre === 'suspense'),
      },
      {
        title: 'Thriller',
        data: films.filter((it) => it.genre === 'thriller'),
      },
      {
        title: 'Comedies',
        data: films.filter((it) => it.genre === 'comedies'),
      },
      {
        title: 'Romance',
        data: films.filter((it) => it.genre === 'romance'),
      },
    ],
  }
}

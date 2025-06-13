//funciones para ordenar cursos por vistas de forma ascendente y descendente

const sortByViewsAscending = (courses) => {
  return courses.sort((a, b) => a.views - b.views);
};

const sortByViewsDescending = (courses) => {
  return courses.sort((a, b) => b.views - a.views);
};

module.exports = {
  sortByViewsAscending: sortByViewsAscending,
  sortByViewsDescending: sortByViewsDescending,
};

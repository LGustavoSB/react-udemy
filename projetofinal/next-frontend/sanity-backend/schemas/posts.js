

function formatDate(date = new Date()) {
    const year = date.toLocaleString('default', {year: 'numeric'});
    const month = date.toLocaleString('default', {
      month: '2-digit',
    });
    const day = date.toLocaleString('default', {day: '2-digit'});
  
    return [year, month, day].join('-');
  }

  const date = formatDate(new Date())

const posts = {
    name: 'posts',
    title: 'Posts',
    type: 'document',
    fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'image', title: 'Image', type: 'image'},
        {name: 'text', title: 'Text', type: 'text'},
        {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
        {name: 'author', title: 'Author', type: 'string'},
        {name: 'date', title:'Date', type: 'date', initialValue: date}
    ]
}

export default posts
const jogos = {
    name: 'jogos',
    title: 'Jogos',
    type: 'document',
    fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'image', title: 'Image', type: 'image'},
        {name: 'text', title: 'Text', type: 'text'},
        {name: 'value', title: 'Value', type: 'string'},
        {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}}
    ]
}

export default jogos
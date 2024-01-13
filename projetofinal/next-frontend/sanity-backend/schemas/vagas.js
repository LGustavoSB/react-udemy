const vagas = {
    name: 'vagas',
    title: 'Vagas',
    type: 'document',
    fields: [
        {name: 'vaga', title: 'Vaga', type: 'string'},
        {name: 'tags', title: 'Tags', type: 'array', 
            of: [
                {title: 'tag', type: 'object', fields: [
                    {name: 'title', title: 'Tag', type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
}

export default vagas
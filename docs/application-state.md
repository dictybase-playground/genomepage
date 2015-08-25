## The state shape of the genomepage application
The genomepage application has 
* List of tabs. 
* Each tabs has a list of panels.
* Each panel has bunch of key value information. 

So, based on above information, the state could look like this ...

```js
    {
        categories: ['summary', 'protein', 'goa', 'reference'],
        entries: {
            summary: {
                display: 'Gene Summary',
                groups: ['info', 'genomic', 'product', 'sequence', 'goa', 'reference', 'link'] 
                items: {
                    display: 'General Information',
                    info: [
                        { key: 'Gene Name', value: {type: 'simple', data: 'sadA'}},
                        { key: 'Name Description', value: {type: 'simple', data: 'sadA = Substrate ADhesion'}},
                        { key: 'Gene ID', value: { type: 'simple', data: 'DDB_G0288511'}},
                        { key: 'Alternative Protein Names', value: { type: 'simple', data: []}},
                        { key: 'Community Annotations', value: { type: 'link', data: { url: 'http://', text: ''}}}
                    ],
                    genomic: [
                        { key: 'Location', value: { 
                                            type: 'simple', 
                                            data: 'Chromosome 1 coordinates 4554019 to 4556699, Crick strand' 
                                        }},
                        { key: 'Genomic Map', value: { type: 'link-image', data: 'http://' } },
                        { key: 'Notes', value: { 
                                            type: 'simple', 
                                            data: 'The sequences from the Sequencing Center and GenBank record X15430 are identical.' 
                                        }}
                    ],
                    product: [
                        { key: 'Protein Coding Gene', value: { 
                                                       url: 'http://', 
                                                       text: '(Curator reviewd)',
                                                       reviewed: true, 
                                                       text: 'Derived from gene prediction'
                                                    }},
                        { key: 'Protein Length', value: '1,508aa'},
                        { key: 'Protein Molecular Weight', value: '173,964 Da'},
                        { key: 'More Protein Data', value: { url: 'http://', text: 'Protein sequence, domains and much more'}}
                        { key: 'Sequence', value: { 
                                                options: ['Protein', 'DNA coding sequence', 'Genomic DNA'],
                                                targets: [
                                                    {'url': 'http://', text: 'Get Fasta'},
                                                    {'url': 'http://', text: 'BLAST'}
                                                ]
                                            }}
                    ],
                    sequence: [
                        { key: 'GenBank Genomic Fragment', value: {url: 'http://', text: 'M14628'}},
                        { key: 'ESTs', value: {
                                            
                                        }}
                    ]
                }
            },
            protein: {
                display: 'Protein Information',
                groups: ['info', 'link', 'sequence'],
                items: {
                    info: [
                        {...},
                        {...}
                    ],
                    link: [
                        {...},
                        {...}
                    ]
                }
            }
        }
    }
```

__Some idea borrowed from json graph of falcor js__

```js
{
    tabs: [
        {
            display: 'Gene Summary',
            sections: [
                { $type: 'ref', value: ['sectionsByName', 'info']},
                { $type: 'ref', value: ['sectionsByName', 'genomic']},
                { $type: 'ref', value: ['sectionsByName', 'product']},
                { $type: 'ref', value: ['sectionsByName', 'goa']},
                { $type: 'ref', value: ['sectionsByName', 'reference']},
                { $type: 'ref', value: ['sectionsByName', 'link']}
            ]
        }, 
        {
            display: 'Protein Information',
            sections: [
                { $type: 'ref', value: ['sectionsByName', 'pinfo']},
                { $type: 'ref', value: ['sectionsByName', 'plink']}
            ]
        }
    ],
    sectionsByName: {
        info: {
           display: 'General Information',
           items: [
                { key: 'Gene Name', value: {type: 'simple', data: 'sadA'}},
                { key: 'Name Description', value: {type: 'simple', data: 'sadA = Substrate ADhesion'}},
                { key: 'Gene ID', value: { type: 'simple', data: 'DDB_G0288511'}},
                { key: 'Alternative Protein Names', value: { type: 'simple', data: []}},
                { key: 'Community Annotations', value: { type: 'link', data: { url: 'http://', text: ''}}}
           ]
        },
        genomic: {
           display: 'Genomic Information',
           items: [
                { key: 'Location', value: { 
                                    type: 'simple', 
                                    data: 'Chromosome 1 coordinates 4554019 to 4556699, Crick strand' 
                                }},
                { key: 'Genomic Map', value: { type: 'link-image', data: 'http://' } },
                { key: 'Notes', value: { 
                                    type: 'simple', 
                                    data: 'The sequences from the Sequencing Center and GenBank record X15430 are identical.' 
                                }}
            ]
        },
        product: {
            display: 'Gene Product Information',
            items: [
                { key: 'Protein Coding Gene', value: { 
                                               url: 'http://', 
                                               text: '(Curator reviewd)',
                                               reviewed: true, 
                                               text: 'Derived from gene prediction'
                                            }},
                { key: 'Protein Length', value: '1,508aa'},
                { key: 'Protein Molecular Weight', value: '173,964 Da'},
                { key: 'More Protein Data', value: { url: 'http://', text: 'Protein sequence, domains and much more'}}
                { key: 'Sequence', value: { 
                                        options: ['Protein', 'DNA coding sequence', 'Genomic DNA'],
                                        targets: [
                                            {'url': 'http://', text: 'Get Fasta'},
                                            {'url': 'http://', text: 'BLAST'}
                                        ]
                                    }}
            ]
        },
        sequence: {
            display: 'Associated Sequences',
            items: [
                { key: 'GenBank Genomic Fragment', value: {url: 'http://', text: 'M14628'}},
                { key: 'ESTs', value: {
                                    
                                }}
            ]
        }

    }
}

```



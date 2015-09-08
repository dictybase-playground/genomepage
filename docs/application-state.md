## The state shape of the genomepage application
The genomepage application has 
* List of tabs. 
* Each tabs has a list of sections.
* Each sections has bunch of key value information. 

So, based on above information, the state could look like this ...

__Some idea borrowed from json graph of [falcor js](http://netflix.github.io/falcor)__

```js
    {
        tabs: [
            {
                display: 'Gene Summary',
                sections: [
                    { $type: 'ref', value: ['sectionsByName', 1]},
                    { $type: 'ref', value: ['sectionsByName', 2]},
                    { $type: 'ref', value: ['sectionsByName', 3]},
                    { $type: 'ref', value: ['sectionsByName', 4]},
                    { $type: 'ref', value: ['sectionsByName', 5]},
                    { $type: 'ref', value: ['sectionsByName', 6]}
                ]
            }, 
            {
                display: 'Protein Information',
                sections: [
                    { $type: 'ref', value: ['sectionsByName', 7]},
                    { $type: 'ref', value: ['sectionsByName', 8]}
                ]
            }
        ],
        sectionsByName: {
            1: {
                display: 'General Information',
                subsections: {
                    $type: 'atom',
                    value: [
                        { key: 'Gene Name', item: {type: 'simple', data: 'sadA'}},
                        { key: 'Name Description', item: {type: 'simple', data: 'sadA = Substrate ADhesion'}},
                        { key: 'Gene ID', item: { type: 'simple', data: 'DDB_G0288511'}},
                        { key: 'Alternative Protein Names', item: { type: 'simple', data: []}},
                        { 
                            key: 'Community Annotations', 
                            item: { 
                                type: 'link', 
                                data: { url: 'http://', text: ''}
                            }
                        }
                   ]
                }
            },
            2: {
                display: 'Genomic Information',
                subsections: {
                    $type: 'atom',
                    value: [
                        { 
                            key: 'Location', 
                            item: { 
                                type: 'simple', 
                                data: 'Chromosome 1 coordinates 4554019 to 4556699, Crick strand' 
                            }
                        },
                        { 
                            key: 'Genomic Map', 
                            item: { 
                                type: 'linkImage', 
                                data: { url: 'http://', image: 'http://' } 
                            }
                        },
                        { 
                            key: 'Notes', 
                            item: { 
                                type: 'simple', 
                                data: 'The sequences from the Sequencing Center and GenBank record X15430 are identical.' 
                            }
                        }
                    ]
                }
            },
            3: {
                display: 'Gene Product Information',
                subsections: {
                    $type: 'atom',
                    value: [
                        { 
                            key: 'Protein Coding Gene', 
                            item: { 
                                type: 'linkProps',
                                data: { 
                                    url: 'http://', 
                                    text: 'DD091444',
                                    props: ['Curator reviewed', 'Derived from gene prediction']

                                }
                            }
                        },
                        { 
                            key: 'Protein Length', 
                            item: {
                                type: 'simple',
                                data: '2116aa'
                            }
                        },
                        { 
                            key: 'Protein Molecular Weight', 
                            item: {
                                type: 'simple',
                                data: '173.964'
                            }
                        },
                        {   
                            key: 'More Protein Data', 
                            item: { 
                                type: 'link',
                                data: {
                                    url: 'http://', 
                                    text: 'Protein sequence, domains and much more'
                                }
                            }
                        },
                        { 
                            key: 'Sequence', 
                            item: { 
                                type: 'select',
                                data: {
                                    options: [
                                                { name: 'Protein', url: 'http://' },
                                                { name: 'DNA coding sequence' }, 
                                                { name: 'Genomic DNA', url: 'http://' }
                                            ],
                                    targets: ['Get Fasta', 'BLAST']
                                }
                            }
                        }
                    ]
                 }
            },
            4: {
                display: 'Associated Sequences',
                subsections: {
                    $type: 'atom',
                    value: [
                        { 
                            key: 'GenBank Genomic Fragment', 
                            item: {
                                type: 'link',
                                data: {
                                    url: 'http://', 
                                    text: 'M14628',
                                }
                            }
                        },
                        { 
                            key: 'ESTs', 
                            item: {
                                type: 'linkList',
                                data: [
                                    { url: 'http://', text: 'DDB0044582'},
                                    { url: 'http://', text: 'DDB0025925'},
                                    { url: 'http://', text: 'DDB0153011'},
                                    { url: 'http://', text: 'DDB0025367'},
                                    { url: 'http://', text: 'DDB0025367'},
                                    { url: 'http://', text: 'more'}
                                ]
                            }
                        }
                    ]
                }
            },
            5: {
                display: 'Latest References',
                subsections: {
                    $type: 'atom',
                    value: [
                        {
                            item: {
                                type: 'linkListImage',
                                data: [
                                    {url: 'http://', image: 'http://', text: ''},
                                    {url: 'http://', image: 'http://', text: ''},
                                    {url: 'http://', image: 'http://', text: ''}
                                ]
                            }
                        }
                    ]
                }
            },
            6: {
                display: 'General Information',
                subsections: {
                    $type: 'atom',
                    value: [
                        {
                            key: 'Gene Product',
                            item: {
                                type: 'list',
                                data: ['calmodulin-binding protein', 'nucleomorphin']
                            }
                        },
                        {
                            key: 'Protein ID',
                            item: {
                                type: 'simple',
                                data: 'DDB0025367'
                            }
                        }, 
                        { 
                            key: 'Protein Length', 
                            item: {
                                type: 'simple',
                                data: '2116aa'
                            }
                        },
                        { 
                            key: 'Protein Molecular Weight', 
                            item: {
                                type: 'simple',
                                data: '173.964'
                            }
                        },
                        {
                            key: 'Amino Acid Composition',
                            item: {
                                type: 'link',
                                data: {
                                    url: 'http://',
                                    text: 'View amino acid composition'
                                }
                            }
                        }
                    ]
                }
            },
            7: {
                display: 'Links',
                subsections: {
                    $type: 'atom',
                    value: [
                        {
                            key: 'External Links',
                            item: {
                                type: 'linkList',
                                data: [
                                    {url: 'http://', text: ''},
                                    {url: 'http://', text: ''}
                                ]
                            }
                        }
                    ]
                }
            },
            8: {
                display: 'Protein Sequence',
                subsections: {
                    $type: 'atom',
                    value: [
                        {
                            key: 'Protein Sequence',
                            item: {
                                type: 'simple',
                                data: 'MGLLDGNPANETSLVLLLFADFSSML'
                            }
                        }
                    ]
                }
            }
        }
    }
}
```

The shape of the data is modeled as [JSON Graph](http://netflix.github.io/falcor/documentation/jsongraph.html)
where each section of a tab are linked to an object under `sectionByName` key. Each section contain its subsections
where each of them is of type [atom](http://netflix.github.io/falcor/documentation/jsongraph.html#new-primitive-value-types).
The `atom` type defined by `falcor` allow to retrieve the entire subsection instead of the default behaviour of fetching
it in piece by piece. This is because the entire subsection is needed for every section and the subsections are not
expected to be grow rapidly.

Here are few ways to fetch data from the JSON object.


Get the display name of tabs

```js
    var model = new falcor.Model({cache: {JSON Graph ....}});
    model.get([
                'tabs',
                0,
                'display'
            ])
            .then(function(data) {
                console.log(data);
            });
    model.get([
                'tabs',
                {from:0, to:1},
                'display'
            ])
            .then(function(data) {
                console.log(data);
            });
```

Get the first two tabs,sections and their subsections

```js
            model.get([
                        'tabs', 
                        {from: 0, to: 1}, 
                        ['display', 'sections'], 
                        {from: 0, to: 1 },
                        ['display','subsections']
                    ])
                    .then(function(data){
                        console.log(data);
                    });
```

## Subsections
Each subsection is consist of two keys `key` and `item`. The `item` has two keys, `type` 
and `data`.
```js
    item: {
        type: <defines the shape of data>
        data: <to be used for display>
    }
```
Here are the list and definitions of different [types](item-types.md) that the `item` key could hold.



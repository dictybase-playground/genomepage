## The state shape of the genomepage application
The genomepage application has 
* List of tabs. 
* Each tabs has a list of panels.
* Each panel has bunch of key value information. 

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
            items: [
                { key: 'Gene Name', value: {type: 'simple', data: 'sadA'}},
                { key: 'Name Description', value: {type: 'simple', data: 'sadA = Substrate ADhesion'}},
                { key: 'Gene ID', value: { type: 'simple', data: 'DDB_G0288511'}},
                { key: 'Alternative Protein Names', value: { type: 'simple', data: []}},
                { 
                    key: 'Community Annotations', 
                    value: { 
                        type: 'link', 
                        data: { url: 'http://', image: 'http://, 'text: ''}
                    }
                }
           ]
        },
        2: {
            display: 'Genomic Information',
            items: [
                { 
                    key: 'Location', 
                    value: { 
                        type: 'simple', 
                        data: 'Chromosome 1 coordinates 4554019 to 4556699, Crick strand' 
                    }
                },
                { 
                    key: 'Genomic Map', 
                    value: { 
                        type: 'linkImage', 
                        data: { url: 'http://', image: 'http://' } 
                    }
                },
                { 
                    key: 'Notes', 
                    value: { 
                        type: 'simple', 
                        data: 'The sequences from the Sequencing Center and GenBank record X15430 are identical.' 
                    }
                }
            ]
        },
        3: {
            display: 'Gene Product Information',
            items: [
                { 
                    key: 'Protein Coding Gene', 
                    value: { 
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
                    value: {
                        type: 'simple',
                        data: '2116aa'
                    }
                },
                { 
                    key: 'Protein Molecular Weight', 
                    value: {
                        type: 'simple',
                        data: '173.964'
                    }
                },
                {   
                    key: 'More Protein Data', 
                    value: { 
                        type: 'link',
                        data: {
                            url: 'http://', 
                            text: 'Protein sequence, domains and much more'
                        }
                    }
                },
                { 
                    key: 'Sequence', 
                    value: { 
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
        },
        4: {
            display: 'Associated Sequences',
            items: [
                { 
                    key: 'GenBank Genomic Fragment', 
                    value: {
                        type: 'link',
                        data: {
                            url: 'http://', 
                            text: 'M14628',
                        }
                    }
                },
                { 
                    key: 'ESTs', 
                    value: {
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
        },
        5: {
            display: 'Latest References',
            items: [
                {
                    value: {
                        type: 'linkListImage',
                        data: [
                            {url: 'http://', image: 'http://', text: ''}
                            {url: 'http://', image: 'http://', text: ''}
                            {url: 'http://', image: 'http://', text: ''}
                        ]
                    }
                }
            ]
        },
        6: {
            display: 'General Information',
            items: [
                {
                    key: 'Gene Product',
                    value: {
                        type: 'list',
                        data: ['calmodulin-binding protein', 'nucleomorphin']
                    }
                },
                {
                    key: 'Protein ID',
                    value: {
                        type: 'simple',
                        data: 'DDB0025367'
                    }
                }, 
                { 
                    key: 'Protein Length', 
                    value: {
                        type: 'simple',
                        data: '2116aa'
                    }
                },
                { 
                    key: 'Protein Molecular Weight', 
                    value: {
                        type: 'simple',
                        data: '173.964'
                    }
                },
                {
                    key: 'Amino Acid Composition',
                    value: {
                        type: 'link',
                        data: {
                            url: 'http://',
                            text: 'View amino acid composition'
                        }
                    }
                }
            ]
        },
        7: {
            display: 'Links',
            items: [
                {
                    key: 'External Links',
                    value: {
                        type: 'linkList',
                        data: [
                            {url: 'http://', text: ''},
                            {url: 'http://', text: ''}
                        ]
                    }
                }
            ]
        },
        8: {
            display: 'Protein Sequence',
            items: [
                {
                    key: 'Protein Sequence',
                    value: {
                        type: 'simple',
                        data: 'MGLLDGNPANETSLVLLLFADFSSML'
                    }
                }
            ]
        }
    }
}
```



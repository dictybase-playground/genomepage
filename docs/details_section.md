
```js
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
```

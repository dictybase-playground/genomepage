## The state shape of the genomepage application
The genomepage application has 
* List of tabs. 
* Each tabs has a list of sections.
* Each sections has bunch of key value information. 

To model the shape of the data, ideas are borrowed from 
json graph of [falcor js](http://netflix.github.io/falcor).
First here is the relationship between the data for genomepage ...

```

                    - section
                    - section
                  -- section
                 /
               tab    section
    geneid - - tab -- section
               tab    section
                  \
                   -- section
                    - section
                    - section
```

In case of a virtual json graph it could modeled like this

```js
    {
        genesById: {
            'DDB_G0286355': {
                name: 'mhcA',
                tabs: [
                    {$type: 'ref', value: ['tabsById', 1]},
                    {$type: 'ref', value: ['tabsById', 2]}
                ]
            },
            'DDB_G0288511': {
                name: 'sadA',
                tabs: [
                    {$type: 'ref', value: ['tabsById', 3]},
                    {$type: 'ref', value: ['tabsById', 4]}
                ]
            }
        },
        ....
        tabsById: {
            1: {
                display: 'Gene Summary',
                sections: [
                    { $type: 'ref', value: ['sectionsById', 1]},
                    { $type: 'ref', value: ['sectionsById', 2]},
                    { $type: 'ref', value: ['sectionsById', 3]},
                    { $type: 'ref', value: ['sectionsById', 4]},
                    { $type: 'ref', value: ['sectionsById', 5]},
                    { $type: 'ref', value: ['sectionsById', 6]}
                ]
            }, 
            2: {
                display: 'Protein Information',
                sections: [
                    { $type: 'ref', value: ['sectionsById', 7]},
                    { $type: 'ref', value: ['sectionsById', 8]}
                ]
            },
            .....
        sectionsById: {
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
                                data: { url: 'http://', image: 'http://', text: ''}
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
            ......
        }
```

All the genes, their tabs and sections could be modeled in this virtual structures. The graph could be looked up
`gene id`, tab id and even individual sections as needed.

The shape of the data is modeled as [JSON
Graph](http://netflix.github.io/falcor/documentation/jsongraph.html). In this
graph, each gene is under `genesById` and each of them linked to correspending
tabs which in turn linked to its sections.Each section contain its subsections
where each of them is of type
[atom](http://netflix.github.io/falcor/documentation/jsongraph.html#new-primitive-value-types).
The `atom` type defined by `falcor` allow to retrieve the entire subsection
instead of the default behaviour of fetching it in piece by piece. This is
because the entire subsection is needed for every section and the subsections
are not expected to be grow rapidly.

Here are few ways to fetch data from the JSON object.


Get the first tab and all the sections of a given gene

```js
    var model = new falcor.Model({cache: {JSON Graph ....}});
    model.get([
                'genesById',
                'DDB_G0286355',
                'tabs', 
                0,
                ['display', 'sections'], 
                {from: 0, to: 10 },
                ['display', 'subsections']
                ]).then(function(data) {
                        console.log(data);
                    },
                    function(error){
                        console.log(error);
            });
```

Now once you have the all the tab ids then you could any other tab and it sections

```js
            model.get([
                        'tabsById', 
                        2,
                        ['display', 'sections'], 
                        {from: 0, to: 1 },
                        ['display','subsections']
                    ])
                    .then(function(data){
                        console.log(data);
                    });
```

Now you could also fetch a single section as needed

```js
    model.getValue([
        'sectionsById',
        2,
        ['display', 'subsections']
    ]).then(function(data) {
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
Here is a detailed example of the various [subsections](details_section.md) and
here are the list and definitions of different [types](item-types.md) that the `item` key could hold.



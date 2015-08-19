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
                    info: [
                        { display: 'Gene Name', value: 'sadA'},
                        { display: 'Name Description', value: 'sadA = Substrate ADhesion'},
                        { display: 'Gene ID', value: 'DDB_G0288511'}
                    ],
                    genomic: [
                        {display... },
                        {display... }
                    ],
                    product: [
                        {...},
                        {...}
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

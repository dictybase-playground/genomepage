## Item key
The `item` key will hold the following object

```js
item: {
    type: ...,
    data: ....
}
```

The different types and example shapes of the data objects are described below.

### simple

```js
    data: 'sadA'
```

### link

```js
    data: {url: 'http://...', text: 'abcd'}
```

### linkImage
```js
    data: {url: 'http://', image: 'http://', text: 'efdk' }
```

### linkProps
```js
    data: {
            url: 'http://', 
            text: 'DD091444', 
            props: ['Curator reviewed', 'Derived from gene predictions']
        }
```

### select
```js
    data: {
            options: [
                        { name: 'Protein', url: 'http://' },
                        { name: 'DNA coding sequence' }, 
                        { name: 'Genomic DNA', url: 'http://' }
                    ],
            targets: ['Get Fasta', 'BLAST']
    }

```

### list
```js
    data: ['calmodulin-binding protein', 'nucleomorphin']
```

### linklist
```js
    data: [
        { url: 'http://', text: 'DDB0044582'},
        { url: 'http://', text: 'DDB0025925'},
        { url: 'http://', text: 'DDB0153011'},
        { url: 'http://', text: 'DDB0025367'},
        { url: 'http://', text: 'DDB0025367'},
    ]
```

### linkListImage
```js
    data: [
        {url: 'http://', image: 'http://', text: ''},
        {url: 'http://', image: 'http://', text: ''},
        {url: 'http://', image: 'http://', text: ''}
    ]
```

# Sungear

## Introduction

Sungear visulization.

## Install

```bash
# if you want the standalone web app
$ pip install sungear[web]

# if you only want to use the python fuctions
$ pip install sungear

```

## Example

### See It In Action

https://sungear.herokuapp.com/

### Standalone Web App

```bash
$ python -m sungear
```

Then open browser to http://localhost:5000 to use.

### Python Functions

```python
import sungear

item_lists = {
    'name1': ['item1', 'item2', ...],
    'name2': ['item1', 'item2', ...],
}

result = sungear.sungear(item_lists)
```

This contains coordinates of nodes and vertices.

## Development Notes

```bash
# clone with submodules
$ git clone --recurse-submodules https://github.com/zachary822/sungear.git
# build web assets
$ python setup.py webpack
```

## License

[MIT](./LICENSE)

## Reference

1. Christopher S. Poultney, Rodrigo A. Gutiérrez, Manpreet S. Katari, Miriam L. Gifford, W. Bradford Paley, Gloria M. Coruzzi, Dennis E. Shasha, Sungear: interactive visualization and functional analysis of genomic datasets, Bioinformatics, Volume 23, Issue 2, 15 January 2007, Pages 259–261, https://doi.org/10.1093/bioinformatics/btl496

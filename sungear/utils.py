from collections import OrderedDict
from typing import Dict, Set


def get_lists(value: str):
    name_to_item: Dict[str, Set[str]] = OrderedDict()

    list_name = 'default_list'
    for line in value.splitlines():
        line = line.strip()
        if line.startswith('>'):
            list_name = line.lstrip('>').strip()
        else:
            name_to_item.setdefault(list_name, set()).add(line)

    return name_to_item


def filter_lists(lists: Dict[str, Set[str]], to_filter):
    if not to_filter:
        raise ValueError("Filter list empty")

    to_filter = set(to_filter)

    for k, v in lists.items():
        v &= to_filter

        if v:
            yield k, v

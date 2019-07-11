"""
Simple Flask server that serves Sungear functionality as a web app
"""
from collections import OrderedDict
from json import JSONDecodeError

import numpy as np
import pandas as pd
from flask import Flask, abort, json, jsonify, request, send_from_directory

from . import SungearException, sungear
from .utils import filter_lists, get_lists

app = Flask(__name__)


class PandasJSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, (pd.Index, pd.Series, np.ndarray)):
            return o.tolist()

        return super().default(o)


app.json_encoder = PandasJSONEncoder


@app.route('/api', methods=['POST'])
def sungear_query():
    body = request.json

    if body is None:
        abort(400)
    try:
        if not body['value']:
            abort(400)

        try:
            item_lists = json.loads(body['value'])
        except JSONDecodeError:
            item_lists = get_lists(body['value'])

        # filter here
        try:
            if body['filter_list']:
                item_lists = OrderedDict(filter_lists(item_lists, body['filter_list']))
        except KeyError:
            pass

        res, fin = sungear(item_lists)

        return jsonify(res)
    except (KeyError, ValueError, SungearException) as e:
        abort(400)


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('static', path)


@app.route('/', defaults={'path': ''})
@app.errorhandler(404)
def root(path):
    return app.send_static_file('index.html')

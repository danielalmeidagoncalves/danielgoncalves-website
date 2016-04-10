import simplejson
from flask import Flask, Blueprint, render_template, g, request, jsonify
from app.utils.nocache import nocache
import couchdb
from logging.handlers import RotatingFileHandler
from zenlog import log
from app.utils.CouchdbUtils import CouchdbUtils
shares = Blueprint('shares', __name__)
app = Flask(__name__)


@shares.route('/posts')
@nocache
def getPosts():
    return render_template('shares.html')


@shares.route('/shares')
def getAllShares():
    db = CouchdbUtils().get_db()
    map_fun = '''function(doc) {
        emit(doc.type, doc);
    }'''
    results = db.query(map_fun)
    docs = []
    for body in results:
        docs.append(body.value)
    log.info(simplejson.dumps(docs))
    return simplejson.dumps(docs)

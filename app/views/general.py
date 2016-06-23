import simplejson
from flask import Flask, Blueprint, render_template, g, request, jsonify
import couchdb
from app.utils.nocache import nocache
from app.utils.CouchdbUtils import CouchdbUtils
from zenlog import log
general = Blueprint('general', __name__)


@general.route('/')
@nocache
def index():
    db = CouchdbUtils().get_db()
    map_fun = '''function(doc) {
        if(doc.type=="post"){
            emit(doc.type, doc);
        }
    }'''
    results = db.query(map_fun)
    docs = []
    for body in results:
        docs.append(body.value)
    log.info("length:"+len(docs).__str__())
    return render_template('index.html', documents=docs)


@general.route('/google3a491a2ba06afd19.html')
@nocache
def google_verify():
    return render_template('google3a491a2ba06afd19.html')


# Sample HTTP error handling
@general.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

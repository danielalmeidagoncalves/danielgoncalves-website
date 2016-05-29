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


@shares.route('/post/<slug>')
@nocache
def getPostBySlug(slug):
    db = CouchdbUtils().get_db()
    map_fun = '''function(doc) {
        if(doc.type=="post" && doc.slug=="'''+slug+'''"){
            emit(doc.type, doc);
        }
    }'''
    results = db.query(map_fun)
    docs = []
    for body in results:
        docs.append(body.value)
    if len(results) == 0:
        return render_template('404.html')
    return render_template('share.html')


@shares.route('/shares')
@nocache
def getAllShares():
    db = CouchdbUtils().get_db()
    map_fun = '''function(doc) {
        if(doc.type=="post"){
            emit(doc.type, doc);
        }
    }'''
    results = db.query(map_fun, descending=True)
    docs = []
    for body in results:
        docs.append(body.value)
    return simplejson.dumps(docs)


@shares.route('/last_shares')
@nocache
def getLastShares():
    db = CouchdbUtils().get_db()
    map_fun = '''function(doc) {
        if(doc.type=="post"){
            emit(doc.type, doc);
        }
    }'''
    # I promise I will not post more than 8 times per day
    results = db.query(map_fun, limit=8, descending=True)
    docs = []
    for body in results:
        docs.append(body.value)
    return simplejson.dumps(docs)


@shares.route('/post/<slug>/content')
@nocache
def getContentShareBySlug(slug):
    db = CouchdbUtils().get_db()
    map_fun = '''function(doc) {
        if(doc.slug=="'''+slug+'''"){
            emit(doc.type, doc);
        }
    }'''
    results = db.query(map_fun, limit=1)
    docs = []
    for body in results:
        docs.append(body.value)
    return simplejson.dumps(docs)

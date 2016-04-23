import simplejson
from flask import Flask, Blueprint, render_template, g, request
from app.utils.nocache import nocache
import couchdb
from logging.handlers import RotatingFileHandler
from zenlog import log
app = Flask(__name__)
app.config.from_object('config')


class CouchdbUtils:
    def __init__(self):
        log.info('couchutils created')

    def get_db(view):
        db = getattr(g, '_database', None)
        if db is None:
            log.error("going for the first time")
            couch = couchdb.Server(app.config['COUCHDB_SERVER'])
            couch.resource.credentials = (app.config['COUCHDB_USER'], app.config['COUCHDB_PASSWORD'])
            db = g._database = couch[app.config['COUCHDB_DATABASE']]
        else:
            log.info('nothing to do here, flys away')
        return db

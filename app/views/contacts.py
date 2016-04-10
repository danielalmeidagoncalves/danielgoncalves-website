import simplejson
from flask import Flask, Blueprint, render_template, g, request, jsonify
from app.utils.nocache import nocache
import couchdb
from logging.handlers import RotatingFileHandler
from zenlog import log
from app.utils.CouchdbUtils import CouchdbUtils
contacts = Blueprint('contacts', __name__)
app = Flask(__name__)


@contacts.route('/message', methods=['POST'])
def newMessage():
    data = request.data
    db = CouchdbUtils().get_db()
    dataDict = simplejson.loads(data)
    dataDict.update({"type": "message"})
    message = jsonify(dataDict)
    doc_id, doc_rev = db.save(dataDict)
    if doc_rev is None:
        res = {"status": "error"}
    else:
        res = {"status": "success"}
    return jsonify(results=res), 201

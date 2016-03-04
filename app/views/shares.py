import simplejson
from flask import Flask, Blueprint, render_template
from app.utils.nocache import nocache
import flaskext.couchdb
shares = Blueprint('shares', __name__)
app = Flask(__name__)


@shares.route('/posts')
@nocache
def getPosts():
    app.config.update(
        DEBUG=True,
        COUCHDB_SERVER='http://localhost:5984/',
        COUCHDB_DATABASE='danielgoncalves'
    )
    manager = flaskext.couchdb.CouchDBManager()
    manager.setup(app)
    manager.sync(app)
    return render_template('index.html')

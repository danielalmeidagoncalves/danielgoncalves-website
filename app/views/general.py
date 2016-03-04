import simplejson
from flask import Flask, Blueprint, render_template
from app.utils.nocache import nocache
import flaskext.couchdb
general = Blueprint('general', __name__)


@general.route('/')
@nocache
def index():
    return render_template('index.html')


# Sample HTTP error handling
@general.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

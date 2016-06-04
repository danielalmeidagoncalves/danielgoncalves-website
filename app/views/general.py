import simplejson
from flask import Flask, Blueprint, render_template
from app.utils.nocache import nocache
import flaskext.couchdb
general = Blueprint('general', __name__)


@general.route('/')
@nocache
def index():
    return render_template('index.html')


@general.route('/google3a491a2ba06afd19.html')
@nocache
def google_verify():
    return render_template('google3a491a2ba06afd19.html')


# Sample HTTP error handling
@general.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

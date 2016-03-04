from flask import Flask, render_template
from app.utils.nocache import nocache
from .views.general import general
from .views.shares import shares
app = Flask(__name__)
debug = True
app.register_blueprint(general)
app.register_blueprint(shares)
if __name__ == '__main__':
    app.debug = debug
    app.run()

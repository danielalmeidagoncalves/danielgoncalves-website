from flask import Flask, render_template
from app.utils.nocache import nocache

app = Flask(__name__)
debug = True


@app.route('/')
@nocache
def index():
    return render_template('index.html')


# Sample HTTP error handling
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.debug = debug
    app.run()

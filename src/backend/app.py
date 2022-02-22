from flask import Flask
from datetime import date

app = Flask(__name__)

@app.route('/')
def helloworld():
   return 'Hello World'
@app.route('/hello')
def gettime():
   return date(2002, 12, 4).ctime()
if __name__ == '__main__':
   app.run()
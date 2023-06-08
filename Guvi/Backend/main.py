from flask_cors import *
from flask import *
import json
import mysql.connector
app = Flask(__name__)
cros = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/register', methods=['POST'], strict_slashes=False)
def register():
    a = request.json
    mydb = mysql.connector.connect(host="localhost", user="root",  password="",  database="guvi")
    mycursor = mydb.cursor()
    e="select id from _user_"
    mycursor.execute(e)
    b=mycursor.fetchall()
    id=len(b)+1
    
    e=" insert into _user_ (id,Name,email,password) values('%s','%s','%s','%s')" %(id,a["Name"],a["Email"],a["Password"])
    mycursor.execute(e)
    mydb.commit()
    return("ok")
@app.route('/Check', methods=['POST'], strict_slashes=False)
def check():
    a = request.json
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="guvi")
    mycursor = mydb.cursor()
    e="select id, Name from _user_ where email='%s'and password='%s'" %(a["Email"],a["Password"])
    mycursor.execute(e)
    r=mycursor.fetchall()
    if r == []:
        return "No user found"
    c = {"id": r[0][0], "Name": r[0][1]}
    return c
@app.route('/details', methods=['POST'], strict_slashes=False)
def details():
    a = request.json
    mydb = mysql.connector.connect(host="localhost", user="root",  password="",  database="guvi")
    mycursor = mydb.cursor()
    e=" insert into _userprofile_ (userid,age,gender,dob,mobile,city) values('%s','%s','%s','%s','%s','%s')" %(a["id"],a["Age"],a["Gender"],a["dob"],a["phone"],a["City"])
    print(e)
    mycursor.execute(e)
    mydb.commit()
    return("ok")
@app.route('/getdetails', methods=['POST'], strict_slashes=False)
def getdetails():
    a = request.json
    mydb = mysql.connector.connect(host="localhost", user="root",  password="",  database="guvi")
    mycursor = mydb.cursor()
    e="select * from _userprofile_ where userid='%s'" % (a["id"])
    mycursor.execute(e)
    t=mycursor.fetchall()
    return t

if __name__ == "__main__":
    app.run('0.0.0.0', debug=True)

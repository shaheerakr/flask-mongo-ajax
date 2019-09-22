#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Jul  6 20:24:03 2019

@author: shaheer
"""

from flask import Flask,render_template,request,jsonify
from pymongo import MongoClient
import json
import datetime

try:
    client = MongoClient('mongodb://localhost:27017/')
    print('conection info: ')
    print(client.server_info())
except Exception as e:
    print('conection unsuccessfull: '+e)

db = client['developers']
table = db['dev-table']


app = Flask(__name__, static_url_path='', static_folder='web/static', template_folder='web/templates')

@app.route('/',methods = ['GET','POST'])
def home():
    return render_template('index.html')

@app.route('/submit',methods = ['POST','GET'])
def submit():
    #dev = request.get_json()
    if request.method == 'POST':
        result = request.form
        name = request.form['name']
        email = request.form['email']
        designation = request.form['designation']
        languages = request.form['language']
        salary = request.form['salary']
        linkedin = request.form['linkedin']
        gitHub = request.form['github']
        photo = request.form['photo']
        '''
        table.insert_one({
                'name': name,
                'email': email,
                'designation': designation,
                'languages': languages,
                'salary': salary,
                'linkedin': linkedin,
                'gitHub': gitHub,
                'photo': photo,
                'date': datetime.datetime.now()
                })
        '''
        return json.dumps({'status':'okay','result':result})
 
if __name__ == '__main__':
    app.run(debug= True, port= 5000)
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


app = Flask(__name__)

@app.route('/',methods = ['GET','POST'])
def home():
    return render_template('index.html')

@app.route('/submit',methods = ['POST','GET'])
def submit():
    if request.method == 'POST':
        result = request.form
        name = request.form.get('Name')
        email = request.form.get('Email')
        designation = request.form.get('Designation')
        languages = request.form.get('Languages')
        salary = request.form.get('Salary')
        linkedin = request.form.get('linkedin')
        gitHub = request.form.get('GitHub')
        photo = request.form.get('Photo')
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
        return render_template('result.html',result = result)
 
if __name__ == '__main__':
    app.run(debug= True, port= 5000)
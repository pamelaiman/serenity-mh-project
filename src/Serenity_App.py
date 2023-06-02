from flask import Flask, jsonify, request
from flask_cors import CORS
from SQL_Connector import sql_connector

app = Flask(__name__)
CORS(app)

connector = sql_connector()
register_account=connector["register_account"]
logging_in=connector["logging_in"]
get_account=connector["get_account"]
adding_book=connector["adding_book"]

@app.route('/register', methods=['POST', 'OPTIONS'])
def register():
    if request.method == 'OPTIONS':
        response = jsonify()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', '*')
        response.headers.add('Access-Control-Allow-Methods', '*')
        return response

    data = request.get_json()
    email = data['email']
    password = data['password']

    response = register_account(email, password)
    if response == 'Registration successful':
        return jsonify(message='Registration successful')
    elif response == 'Email already exists.':
        return jsonify(message='Email already exists. Please choose a different email.')
    else:
        return jsonify(message=response)

@app.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        response = jsonify()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', '*')
        response.headers.add('Access-Control-Allow-Methods', '*')
        return response

    data = request.get_json()
    email = data['email']
    password = data['password']

    try:
        response = logging_in(email, password)
        if response == 'Login successful':
            return jsonify(message='Login successful', account_data={})
        else:
            return jsonify(message='Login failed. Please try again.')
        
    except Exception:
        return jsonify(message='Database connection error. Please try again later.')

@app.route('/account', methods=['GET', 'POST'])
def account():
    if request.method == 'GET':
        email = request.args.get('email')
        account_data = get_account(email)

        if account_data is not None:
            return jsonify(account_data)
        else:
            return jsonify(message='User profile not found.')
    
    elif request.method == 'POST':
        data = request.get_json()
        email = data['email']
        title = data['title']
        pages = data['pages']

        response = adding_book(email, title, pages)

        if response == 'Book added to account':
            return jsonify(message='Book added to account')
        else:
            return jsonify(message='Failed to add book to account')


if __name__ == '__main__':
    app.run(port=5000)

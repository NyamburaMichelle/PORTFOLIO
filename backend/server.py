from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Route to handle form submission
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    # Load existing data from db.json
    with open('db.json', 'r') as file:
        db = json.load(file)

    # Append new data
    db['users'].append(data)

    # Save updated data to db.json
    with open('db.json', 'w') as file:
        json.dump(db, file, indent=4)

    return jsonify({'message': 'User registered successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True)

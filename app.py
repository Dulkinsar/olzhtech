from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='.')

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/api/heartbeat')
def heartbeat():
    return {"status": "OlzhTech secure node operational"}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)

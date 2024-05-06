from flask import Flask, render_template, send_from_directory
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/csv_data')
def csv_data():
    df = pd.read_csv('static/utenti.csv')
    return df.to_csv(index=False)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)

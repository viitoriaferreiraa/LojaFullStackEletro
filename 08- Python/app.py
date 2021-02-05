from flask import Flask, render_template, request

app = Flask (__name__)
@app.route('/')

def  main ():
    return render_template ('app.html')

@app.route('/send', methods=['POST'])

def send (sum=sum):
    if request.method == 'POST':
        num1 = request.form['num1']
        num2 = request.form['num2']
        operation = request.form['operation']

    if operation == 'adicao': 
        sum = float (num1) + float (num2)
        return render_template ('app.html', sum=sum)

    elif operation == 'subtracao':
        sum = float (num1) - float (num2)
        return render_template ('app.html', sum=sum)

    elif operation == 'multiplicacao':
        sum = float (num1) * float (num2) 
        return render_template ('app.html', sum=sum)

    elif operation == 'divisao':
        sum = float (num1) / float (num2)
        return render_template ('app.html', sum=sum)

    else: 
        return render_template ('app.html', sum=sum)

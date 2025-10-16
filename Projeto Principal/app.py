from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/modulos')
def modulos():
    return render_template('modulos.html')

@app.route('/progresso')
def progresso():
    return render_template('progresso.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')




@app.route('/modulo1')
def modulo1():
    return render_template('pages/modulo1/modulo1.html')

@app.route('/modulo1/oquee')
def oquee_scrum():
    return render_template('pages/modulo1/oQueÉScrum.html')

@app.route('/modulo1/porqueusar')
def porque_scrum():
    return render_template('pages/modulo1/PorqueUsarScrum.html')

@app.route('/modulo1/manifestoagil')
def manifesto_agil():
    return render_template('pages/modulo1/manifestoAgil.html')



@app.route('/modulo2')
def modulo2():
    return render_template('pages/modulo2/modulo2.html')



@app.route('/modulo3')
def modulo3():
    return render_template('pages/modulo3/modulo3.html')



@app.route('/modulo4')
def modulo4():
    return render_template('pages/modulo4/modulo4.html')



@app.route('/modulo5')
def modulo5():
    return render_template('pages/modulo5/modulo5.html')



@app.route('/modulo6')
def modulo6():
    return render_template('pages/modulo6/modulo6.html')



@app.route('/modulo7')
def modulo7():
    return render_template('pages/modulo7/modulo7.html')




if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template
import json

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

@app.route('/o-que-e-agile')
def o_que_e_agile():
    return render_template('pages/modulo2/oQueEAgile.html')

@app.route('/agile-na-pratica')
def agile_na_pratica():
    return render_template('pages/modulo2/agileNaPratica.html')

@app.route('/agile-vs-tradicional')
def agile_vs_tradicional():
    return render_template('pages/modulo2/agileVsMetodosTradicionais.html')

@app.route('/vantagens-do-agile')
def vantagens_do_agile():
    return render_template('pages/modulo2/vantagensDoAgile.html')


@app.route('/modulo3')
def modulo3():
    return render_template('pages/modulo3/modulo3.html')

@app.route('/modulo3/papeis_scrum')
def papeis_scrum():
    return render_template('pages/modulo3/PapeisScrum.html')

@app.route('/modulo3/product_owner')
def product_owner():
    return render_template('pages/modulo3/ProductOwner.html')

@app.route('/modulo3/scrum_master')
def scrum_master():
    return render_template('pages/modulo3/ScrumMaster.html')

@app.route('/modulo3/devteam')
def devteam():
    return render_template('pages/modulo3/DevTeam.html')



@app.route('/modulo4')
def modulo4():
    return render_template('pages/modulo4/modulo4.html')

@app.route('/sprint')
def sprint():
    return render_template('pages/modulo4/Sprint.html')

@app.route('/sprint_planning')
def sprint_planning():
    return render_template('pages/modulo4/SprintPlanning.html')

@app.route('/daily_scrum')
def daily_scrum():
    return render_template('pages/modulo4/DailyScrum.html')

@app.route('/sprint_review')
def sprint_review():
    return render_template('pages/modulo4/SprintReview.html')

@app.route('/sprint_retrospective')
def sprint_retrospective():
    return render_template('pages/modulo4/SprintRetrospective.html')



@app.route('/modulo5')
def modulo5():
    return render_template('pages/modulo5/modulo5.html')

@app.route('/artefatos')
def artefatos():
    return render_template('pages/modulo5/ArtefatosDoScrum.html')

@app.route('/product_backlog')
def product_backlog():
    return render_template('pages/modulo5/ProductBacklog.html')

@app.route('/sprint_backlog')
def sprint_backlog():
    return render_template('pages/modulo5/SprintBacklog.html')

@app.route('/incremento')
def incremento():
    return render_template('pages/modulo5/Incremento.html')



@app.route('/modulo6')
def modulo6():
    return render_template('pages/modulo6/modulo6.html')



@app.route('/modulo7')
def modulo7():
    return render_template('pages/modulo7/modulo7.html')

@app.route('/o-que-e-scrum-board')
def o_que_e_scrum_board():
    return render_template('pages/modulo7/1-OQueEScrumBoard.html')

@app.route('/quadro-fisico-vs-digital')
def quadro_fisico_vs_digital():
    return render_template('pages/modulo7/2-QuadroFisicoQuadroDigital.html')

@app.route('/colunas-tipicas-scrum-board')
def colunas_tipicas_scrum_board():
    return render_template('pages/modulo7/3-ColunasTipicasScrumBoard.html')

@app.route('/ferramentas-digitais-suporte')
def ferramentas_digitais_suporte():
    return render_template('pages/modulo7/4-FerramentasDigitaisDeSuporte.html')

@app.route('/boas-praticas-scrum-board')
def boas_praticas_scrum_board():
    return render_template('pages/modulo7/5-BoasPraticasScrumBoard.html')

@app.route('/modulo8')
def modulo8():
    return render_template('pages/modulo8/modulo8.html')

@app.route('/modulo8/soft-skills')
def soft_skills():
    return render_template('pages/modulo8/SoftSkills.html')

@app.route('/modulo8/comunicacao-eficiente')
def comunicacao_eficiente():
    return render_template('pages/modulo8/ComunicaçãoEficiente.html')

@app.route('/modulo8/transparencia')
def transparencia():
    return render_template('pages/modulo8/Transparencia.html')

@app.route('/modulo8/inspecao-continua')
def inspecao_continua():
    return render_template('pages/modulo8/InspeçãoContínua.html')

@app.route('/modulo8/adaptacao-boas-praticas')
def adaptacao_boas_praticas():
    return render_template('pages/modulo8/adaptação.html')

@app.route('/modulo9')
def modulo9():
    return render_template('pages/modulo9/modulo9.html')

@app.route('/introducao-treinamento')
def introducao():
    return render_template('pages/modulo9/1-IntroduçãoAoTreinamentoScrum.html')

@app.route('/time-scrum')
def time_scrum():
    return render_template('pages/modulo9/2-OTimeScrum.html')

@app.route('/criandobacklog')
def criando_bl():
    return render_template('pages/modulo9/3-CriandoOProdutoBacklog.html')

@app.route('/planejamento-da-sprint')
def planejamento_sprint():
    return render_template('pages/modulo9/4-PlanejamentoDaSprint.html')

@app.route('/scrum-board')
def scrum_board():
    return render_template('pages/modulo9/5-ScrumBoard.html')

@app.route('/daily-na-pratica')
def daily():
    return render_template('pages/modulo9/6-DailyScrum.html')

@app.route('/rewiew-e-retrospective-pratica')
def pratica_cerimonias():
    return render_template('pages/modulo9/7-Sprint Review e Retrospective.html')

@app.route('/conclusao')
def conclusao():
    return render_template('pages/modulo9/8-ConclusaoDoTreinamentoScrum.html')

@app.route('/exercicios/modulo1')
def exercicios_modulo1():
    with open('data/questoes_modulo1.json', encoding='utf-8') as f:
        questoes = json.load(f)
    return render_template('exercicios/exercicios_modulo1.html', questoes=questoes)

@app.route('/exercicios/modulo3')
def exercicios_modulo3():
    with open('data/questoes_modulo3.json', encoding='utf-8') as f:
        questoes = json.load(f)
    return render_template('exercicios/exercicios_modulo3.html', questoes=questoes)




if __name__ == '__main__':
    app.run(debug=True)

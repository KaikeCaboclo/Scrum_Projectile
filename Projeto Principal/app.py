from flask import Flask, render_template, jsonify, request, send_file
from datetime import datetime
import json, io
from reportlab.lib.pagesizes import letter, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.lib.colors import HexColor



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
@app.route('/notas')
def notas():
    return render_template('notas.html')




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

@app.route('/modulo6/capacidade')
def capacidade():
    return render_template('pages/modulo6/capacidadePlanejamento.html')

@app.route('/modulo6/poker')
def poker():
    return render_template('pages/modulo6/planningPoker.html')

@app.route('/modulo6/t-shirt')
def t_shirt():
    return render_template('pages/modulo6/tshirtSizes.html')

@app.route('/modulo6/velocidade')
def velocidade():
    return render_template('pages/modulo6/velocidade.html')

@app.route('/modulo6/outras')
def outras():
    return render_template('pages/modulo6/outrastecnicas.html')


@app.route('/modulo7')
def modulo7():
    return render_template('pages/modulo7/modulo7.html')

@app.route('/o-que-e-scrum-board')
def o_que_e_scrum_board():
    return render_template('pages/modulo7/OQueEScrumBoard.html')

@app.route('/anatomia-Scrum-Board')
def anatomiaScrumBoard():
    return render_template('pages/modulo7/AnatomiaBoard.html')

@app.route('/fisico-Vs-Digital')
def fisicoVsDigital():
    return render_template('pages/modulo7/presencialvsdigital.html')

@app.route('/scrum-Board-Vivo')
def scrumBoardVivo():
    return render_template('pages/modulo7/ScrumBoardvivo.html')

@app.route('/armadilhas')
def armadilhas():
    return render_template('pages/modulo7/armadilhas.html')


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
    return render_template('exercicios/exercicios_modulo1.html')

@app.route('/exercicios/modulo2')
def exercicios_modulo2():
    return render_template('exercicios/exercicios_modulo2.html')


@app.route('/exercicios/modulo3')
def exercicios_modulo3():
    return render_template('exercicios/exercicios_modulo3.html')

@app.route('/exercicios/modulo4')
def exercicios_modulo4():
    return render_template('exercicios/exercicios_modulo4.html')

@app.route('/exercicios/modulo5')
def exercicios_modulo5():
    return render_template('exercicios/exercicios_modulo5.html')

@app.route('/exercicios/modulo6')
def exercicios_modulo6():
    return render_template('exercicios/exercicios_modulo6.html')


@app.route('/exercicios/modulo7')
def exercicios_modulo7():
    return render_template('exercicios/exercicios_modulo7.html')

@app.route('/exercicios/modulo8')
def exercicios_modulo8():
    return render_template('exercicios/exercicios_modulo8.html')



# NOVA ROTA: Verificar elegibilidade para certificado
@app.route('/api/verificar-certificado', methods=['POST'])
def verificar_certificado():
    """Verifica se o usuário pode acessar o certificado"""
    data = request.json
    notas = data.get('notas', {})
    
    # Verifica se todas as 8 notas (módulos com exercícios) estão acima de 70
    modulos_com_nota = ['modulo1', 'modulo2', 'modulo3', 'modulo4', 
                        'modulo5', 'modulo6', 'modulo7', 'modulo8']
    
    elegivel = True
    for modulo in modulos_com_nota:
        nota = notas.get(f'progresso_{modulo}')
        if nota is None or float(nota) < 70:
            elegivel = False
            break
    
    return jsonify({'elegivel': elegivel})

# NOVA ROTA: Página do certificado
@app.route('/certificado')
def certificado():
    return render_template('certificado.html')

# NOVA ROTA: Gerar PDF do certificado
@app.route('/api/gerar-certificado', methods=['POST'])
def gerar_certificado():
    """Gera o PDF do certificado"""
    data = request.json
    nome_aluno = data.get('nome', 'Aluno')
    data_conclusao = datetime.now().strftime('%d/%m/%Y')
    
    # Criar buffer para o PDF
    buffer = io.BytesIO()
    
    # Criar o PDF em paisagem
    c = canvas.Canvas(buffer, pagesize=landscape(letter))
    width, height = landscape(letter)
    
    # Cor de fundo azul gradiente
    c.setFillColor(HexColor('#1e3a8a'))
    c.rect(0, 0, width, height, fill=1, stroke=0)
    
    # Borda decorativa
    c.setStrokeColor(HexColor('#ffffff'))
    c.setLineWidth(8)
    c.rect(30, 30, width-60, height-60, fill=0, stroke=1)
    
    c.setStrokeColor(HexColor('#3b82f6'))
    c.setLineWidth(3)
    c.rect(40, 40, width-80, height-80, fill=0, stroke=1)
    
    # Título
    c.setFillColor(HexColor('#ffffff'))
    c.setFont("Helvetica-Bold", 48)
    c.drawCentredString(width/2, height-120, "CERTIFICADO")
    
    c.setFont("Helvetica", 24)
    c.drawCentredString(width/2, height-160, "DE CONCLUSÃO")
    
    # Texto principal
    c.setFont("Helvetica", 18)
    c.drawCentredString(width/2, height-230, "Certificamos que")
    
    # Nome do aluno
    c.setFont("Helvetica-Bold", 32)
    c.setFillColor(HexColor('#3b82f6'))
    c.drawCentredString(width/2, height-280, nome_aluno.upper())
    
    # Descrição do curso
    c.setFillColor(HexColor('#ffffff'))
    c.setFont("Helvetica", 16)
    texto1 = "concluiu com êxito o curso de"
    c.drawCentredString(width/2, height-330, texto1)
    
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(width/2, height-365, "METODOLOGIA SCRUM")
    
    c.setFont("Helvetica", 14)
    texto2 = "com carga horária de 40 horas, demonstrando proficiência"
    c.drawCentredString(width/2, height-395, texto2)
    texto3 = "em todos os módulos do programa SCRUM ACADEMY."
    c.drawCentredString(width/2, height-415, texto3)
    
    # Data
    c.setFont("Helvetica-Oblique", 12)
    c.drawCentredString(width/2, 100, f"Concluído em: {data_conclusao}")
    
    # Assinaturas (simuladas)
    c.setFont("Helvetica", 10)
    c.line(150, 140, 300, 140)
    c.drawCentredString(225, 125, "SCRUM ACADEMY")
    c.drawCentredString(225, 110, "Coordenação do Curso")
    
    # Finalizar o PDF
    c.showPage()
    c.save()
    
    # Retornar o PDF
    buffer.seek(0)
    return send_file(
        buffer,
        mimetype='application/pdf',
        as_attachment=True,
        download_name=f'Certificado_SCRUM_{nome_aluno.replace(" ", "_")}.pdf'
    )


if __name__ == '__main__':
    app.run(debug=True)

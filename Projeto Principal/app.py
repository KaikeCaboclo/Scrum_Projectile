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

@app.route('/modulo9/simulacao')
def simulacao():
    return render_template('pages/modulo9/simulacao.html')

@app.route('/modulo9/dicas')
def dicas():
    return render_template('pages/modulo9/DicasESujestoes.html')


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


@app.route('/exameFinal')
def exameFinal():
    return render_template('/exameFinal.html')



# NOVA ROTA: Verificar elegibilidade para certificado
@app.route('/api/verificar-certificado', methods=['POST'])
def verificar_certificado():
    """Verifica se o usuário pode acessar o certificado"""
    data = request.json
    progresso_curso = data.get('progressoCurso', 0)
    nota_exame_final = data.get('notaExameFinal', 0)
    
    # Verifica se o curso está 100% completo E o exame final >= 70%
    elegivel = progresso_curso == 100 and nota_exame_final >= 70
    
    return jsonify({
        'elegivel': elegivel,
        'requisitos': {
            'progressoCurso': progresso_curso,
            'notaExameFinal': nota_exame_final
        }
    })

# NOVA ROTA: Página do certificado
@app.route('/certificado')
def certificado():
    return render_template('certificado.html')

# NOVA ROTA: Gerar PDF do certificado
@app.route('/api/gerar-certificado', methods=['POST'])
def gerar_certificado():
    """Gera o PDF do certificado com design melhorado"""
    data = request.json
    nome_aluno = data.get('nome', 'Aluno')
    data_conclusao = datetime.now().strftime('%d/%m/%Y')
    
    # Criar buffer para o PDF
    buffer = io.BytesIO()
    
    # Criar o PDF em paisagem
    c = canvas.Canvas(buffer, pagesize=landscape(letter))
    width, height = landscape(letter)
    
    # ========== FUNDO GRADIENTE AZUL ==========
    # Criar gradiente usando retângulos sobrepostos
    num_retangulos = 50
    for i in range(num_retangulos):
        # Gradiente de azul escuro para azul claro
        r = int(30 + (59 - 30) * (i / num_retangulos))
        g = int(58 + (130 - 58) * (i / num_retangulos))
        b = int(138 + (246 - 138) * (i / num_retangulos))
        
        cor = HexColor('#%02x%02x%02x' % (r, g, b))
        c.setFillColor(cor)
        c.rect(0, height - (height / num_retangulos) * (i + 1), width, height / num_retangulos, fill=1, stroke=0)
    
    # ========== BORDAS DECORATIVAS ==========
    # Borda externa branca
    c.setStrokeColor(HexColor('#ffffff'))
    c.setLineWidth(10)
    c.roundRect(25, 25, width-50, height-50, 15, fill=0, stroke=1)
    
    # Borda interna azul clara
    c.setStrokeColor(HexColor('#60a5fa'))
    c.setLineWidth(3)
    c.roundRect(35, 35, width-70, height-70, 10, fill=0, stroke=1)
    
    # Detalhes decorativos nos cantos
    c.setStrokeColor(HexColor('#fbbf24'))
    c.setLineWidth(2)
    # Canto superior esquerdo
    c.line(45, height-45, 120, height-45)
    c.line(45, height-45, 45, height-120)
    # Canto superior direito
    c.line(width-45, height-45, width-120, height-45)
    c.line(width-45, height-45, width-45, height-120)
    # Canto inferior esquerdo
    c.line(45, 45, 120, 45)
    c.line(45, 45, 45, 120)
    # Canto inferior direito
    c.line(width-45, 45, width-120, 45)
    c.line(width-45, 45, width-45, 120)
    
    # ========== SELO DE QUALIDADE ==========
    # Círculo dourado no canto superior direito
    c.setFillColor(HexColor('#f59e0b'))
    c.circle(width-100, height-100, 40, fill=1, stroke=0)
    c.setFillColor(HexColor('#fbbf24'))
    c.circle(width-100, height-100, 35, fill=1, stroke=0)
    
    # Texto do selo
    c.setFillColor(HexColor('#78350f'))
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(width-100, height-105, "★")
    c.setFont("Helvetica-Bold", 7)
    c.drawCentredString(width-100, height-95, "SCRUM")
    c.drawCentredString(width-100, height-88, "ACADEMY")
    
    # ========== TÍTULO DO CERTIFICADO ==========
    c.setFillColor(HexColor('#ffffff'))
    c.setFont("Helvetica-Bold", 56)
    c.drawCentredString(width/2, height-110, "CERTIFICADO")
    
    # Linha decorativa sob o título
    c.setStrokeColor(HexColor('#fbbf24'))
    c.setLineWidth(3)
    c.line(width/2 - 150, height-125, width/2 + 150, height-125)
    
    c.setFont("Helvetica", 22)
    c.setFillColor(HexColor('#dbeafe'))
    c.drawCentredString(width/2, height-150, "de Conclusão")
    
    # ========== CORPO DO CERTIFICADO ==========
    c.setFont("Helvetica", 16)
    c.setFillColor(HexColor('#ffffff'))
    c.drawCentredString(width/2, height-200, "Certificamos que")
    
    # Nome do aluno com destaque
    # Fundo semi-transparente para o nome
    c.setFillColor(HexColor('#1e40af'))
    c.roundRect(width/2 - 300, height-255, 600, 50, 10, fill=1, stroke=0)
    
    c.setFont("Helvetica-Bold", 36)
    c.setFillColor(HexColor('#fbbf24'))
    c.drawCentredString(width/2, height-240, nome_aluno.upper())
    
    # Texto descritivo
    c.setFillColor(HexColor('#ffffff'))
    c.setFont("Helvetica", 15)
    c.drawCentredString(width/2, height-290, "concluiu com êxito o curso de")
    
    # Nome do curso com destaque
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(HexColor('#dbeafe'))
    c.drawCentredString(width/2, height-325, "METODOLOGIA SCRUM")
    
    # Linha decorativa
    c.setStrokeColor(HexColor('#60a5fa'))
    c.setLineWidth(2)
    c.line(width/2 - 200, height-335, width/2 + 200, height-335)
    
    # Informações do curso
    c.setFont("Helvetica", 13)
    c.setFillColor(HexColor('#e0e7ff'))
    c.drawCentredString(width/2, height-360, "com carga horária de 40 horas, demonstrando proficiência")
    c.drawCentredString(width/2, height-380, "em todos os módulos do programa SCRUM ACADEMY,")
    c.drawCentredString(width/2, height-400, "incluindo fundamentos ágeis, papéis, eventos, artefatos e boas práticas.")
    
    # ========== DATA E ID ==========
    c.setFont("Helvetica-Oblique", 11)
    c.setFillColor(HexColor('#cbd5e1'))
    c.drawCentredString(width/2, 130, f"Concluído em: {data_conclusao}")
    
    import random
    cert_id = f"SA-2025-{random.randint(1000, 9999)}"
    c.drawCentredString(width/2, 115, f"ID do Certificado: {cert_id}")
    
    # ========== ASSINATURAS ==========
    c.setFont("Helvetica", 9)
    c.setFillColor(HexColor('#ffffff'))
    c.setStrokeColor(HexColor('#dbeafe'))
    c.setLineWidth(1.5)
    
    # Assinatura esquerda
    c.line(120, 80, 280, 80)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(200, 65, "SCRUM ACADEMY")
    c.setFont("Helvetica", 8)
    c.drawCentredString(200, 53, "Coordenação do Curso")
    
    # Assinatura direita
    c.line(width-280, 80, width-120, 80)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(width-200, 65, "Certificação Digital")
    c.setFont("Helvetica", 8)
    c.drawCentredString(width-200, 53, "Validação Oficial")
    
    # ========== RODAPÉ ==========
    c.setFont("Helvetica", 7)
    c.setFillColor(HexColor('#94a3b8'))
    c.drawCentredString(width/2, 25, "Este certificado comprova a conclusão bem-sucedida do curso de Metodologia Scrum")
    c.drawCentredString(width/2, 15, "Para validar este certificado, visite: www.scrumacademy.com/validar")
    
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

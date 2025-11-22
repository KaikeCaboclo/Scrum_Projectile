
<hr>
<h1 align="center">SCRUM ACADEMY</h1>
<br>
<p align="center">
  <a href="#pre-requisitos">Pré-requisitos</a> •
  <a href="#instalacao">Instalação</a> •
  <a href="#verificacao">Verificação</a> •
  <a href="#solucao">Problemas</a> •
  <a href="#funcionalidade">Funcionalidades</a> •
  <a href="#como-usar">Como Usar</a> •
  <a href="#parar">Parar</a>
</p>

---

<h2 id="pre-requisitos">📋 <strong>Pré-requisitos</strong></h2>
<p>
Para utilizar o sistema SCRUM Academy, é necessário ter instalado:
</p>

<ul>
  <li><strong>Python 3.8+</strong></li>
  <li><strong>Git</strong></li>
  <li>Navegador web moderno</li>
  <li>Conexão com internet (para dependências)</li>
</ul>

<br/>

---

<h2 id="instalacao">🛠️ <strong>Instalação Passo a Passo</strong></h2>

1. **🗂️ Clonar o Repositório**
```
git clone [URL_DO_SEU_REPOSITORIO]
cd "Scrum_Projectile/Projeto Principal"
```

2. **🐍 Configurar Ambiente Virtual**
```
python -m venv venv
```
```
# Ativar ambiente virtual

# No Windows:
venv\Scripts\activate

# No macOS/Linux:
source venv/bin/activate
```

3. **📦 Instalar Dependências**
```
# Instalar pacotes necessários
pip install -r requirements.txt
```

4. **✅ Verificar Instalação**
```
# Verificar se todas as dependências foram instaladas
pip list
```

  Você deve ver:
```
blinker==1.9.0
charset-normalizer==3.4.4
click==8.3.0
colorama==0.4.6
Flask==3.1.2
itsdangerous==2.2.0
Jinja2==3.1.6
MarkupSafe==3.0.3
pillow==12.0.0
reportlab==4.4.4
Werkzeug==3.1.3
```

5. **🚀 Executar a Aplicação**
```
# No diretório raiz do projeto
python app.py
```

6. **🌐 Acessar a Aplicação**
Abra seu navegador e visite:
```
http://localhost:5000
```

---

<h2 id="verificacao">🧪 <strong>Verificação</strong></h2>

<p>Certifique-se de que as funcionalidades principais estão funcionando:</p> 
<ul> 
  <li>✅ Navegação entre os 9 módulos</li> 
  <li>✅ Sistema de exercícios</li> 
  <li>✅ Acompanhamento de progresso</li> 
  <li>✅ Exame final</li> 
  <li>✅ Geração de certificado PDF</li> 
</ul>

---

<h2 id="problemas">🐛 <strong>Solução de Problemas Comuns</strong></h2>

**❌ Erro: "ModuleNotFoundError"**
Solução possivel:
```
# Reinstalar dependências
pip install --force-reinstall -r requirements.txt
```

**❌ Erro: "Address already in use"**
Solução possivel:
```
# Parar processo na porta 5000 ou usar porta diferente
python app.py --port 5001
```

**❌ Erro: Ambiente virtual não ativa**
Solução possivel:
```
# Verificar se o ambiente virtual está ativo
# (deve aparecer (venv) no início do terminal)
# Se não aparecer, reative:
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
```

**❌ CSS/JavaScript não carrega**
Solução possivel:
- Verifique se os arquivos estão na pasta static/
- Limpe cache do navegador (Ctrl+F5)

---

<h2 id="funcionalidade">📊 <strong>Funcionalidades do Sistema</strong></h2>
<table>
  <tr>
    <th>Módulo</th>
    <th>Conteúdo</th>
    <th>Exercícios</th>
  </tr>
  <tr><td>Módulo 1</td><td>Fundamentos do Scrum</td><td>✅</td></tr>
  <tr><td>Módulo 2</td><td>Agile vs Tradicional</td><td>✅</td></tr>
  <tr><td>Módulo 3</td><td>Papéis do Scrum</td><td>✅</td></tr>
  <tr><td>Módulo 4</td><td>Eventos do Scrum</td><td>✅</td></tr>
  <tr><td>Módulo 5</td><td>Artefatos</td><td>✅</td></tr>
  <tr><td>Módulo 6</td><td>Técnicas de Planejamento</td><td>✅</td></tr>
  <tr><td>Módulo 7</td><td>Scrum Board</td><td>✅</td></tr>
  <tr><td>Módulo 8</td><td>Soft Skills</td><td>✅</td></tr>
  <tr><td>Módulo 9</td><td>Simulação e Dicas</td><td>✅</td></tr>
</table>

<h3>Recursos Extras:</h3>
<ul>
  <li>📈 Sistema de progresso</li>
  <li>📝 Exame final</li>
  <li>🏆 Certificado</li>
  <li>💾 Armazenamento local</li>
</ul>

<hr>

<h2 id="como-usar">🎓 <strong>Como Usar o Sistema</strong></h2>
<ol>
  <li>Navegue pelos 9 módulos</li>
  <li>Complete os exercícios</li>
  <li>Acompanhe seu progresso</li>
  <li>Realize o exame final</li>
  <li>Gere o certificado</li>
</ol>

<hr>

<h2 id="parar">🛑 <strong>Parar a Aplicação</strong></h2>
No terminal, pressione:

```
Ctrl + C
```

Para desativar o ambiente virtual:

```
deactivate
```

---

**🎉 Parabéns! Sua instalação do SCRUM ACADEMY está completa!**

Agora você pode explorar todos os módulos, exercícios e funcionalidades do sistema de aprendizado Scrum.

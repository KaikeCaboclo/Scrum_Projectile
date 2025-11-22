
<hr>
<h1 align="center">SCRUM ACADEMY</h1>
<br>
<p align="center">
  <a href="#-pré-requisitos">Pré-requisitos</a> •
  <a href="#-instalação-passo-a-passo">Instalação</a> •
  <a href="#-verificação">Verificação</a> •
  <a href="#-solução-de-problemas-comuns">Problemas</a> •
  <a href="#-funcionalidades-do-sistema">Funcionalidades</a> •
  <a href="#-como-usar-o-sistema">Como Usar</a> •
  <a href="#-parar-a-aplicação">Parar</a>
</p>

<br>

---

<h2 id="pre-requisitos">📋 <strong>Pré-requisitos</strong></h2>
- Python 3.8+ instalado
- Git instalado
- Navegador web moderno
- Conexão com internet (para download de dependências)

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
**Testar Funcionalidades Principais:**
✅ Navegação entre os 9 módulos
✅ Sistema de exercícios
✅ Acompanhamento de progresso
✅ Exame final
✅ Geração de certificado PDF

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

<h2 id="funcionalidades">📊 <strong>Funcionalidades do Sistema</strong></h2>
|Módulo|Conteúdo|Exercícios|
|---|---|---|
|Módulo 1|Fundamentos do Scrum|✅|
|Módulo 2|Agile vs Tradicional|✅|
|Módulo 3|Papéis do Scrum|✅|
|Módulo 4|Eventos do Scrum|✅|
|Módulo 5|Artefatos|✅|
|Módulo 6|Técnicas de Planejamento|✅|
|Módulo 7|Scrum Board|✅|
|Módulo 8|Soft Skills|✅|
|Módulo 9|Simulação e Dicas|✅|

**Recursos Extras:**

- 📈 Sistema de progresso
- 📝 Exame final
- 🏆 Geração de certificado
- 💾 Armazenamento local


<h2 id="como-usar">🎓 <strong>Como Usar o Sistema</strong></h2>
1. Navegue pelos Módulos: 9 módulos completos sobre Scrum
2. Complete Exercícios: Exercícios ao final de cada módulo
3. Acompanhe Progresso: Sistema de tracking de progresso
4. Faça o Exame Final: Teste seus conhecimentos
5. Gere Certificado: Obtenha certificado ao cumprir requisitos

---

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

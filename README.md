# CardioIA - Sistema Híbrido de Triagem Cardiológica

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)

Este projeto é uma aplicação full-stack desenvolvida para a avaliação de Inteligência Artificial da FIAP. O objetivo é simular um portal de triagem médica que utiliza algoritmos clássicos de Machine Learning e Deep Learning para classificar riscos cardiológicos a partir de relatos textuais e exames de Eletrocardiograma (ECG).

##  Arquitetura e Funcionalidades

O projeto foi dividido em diferentes módulos de IA, conectados por um Dashboard web interativo:

1. **Módulo de NLP & Machine Learning Clássico:**
   * Extração de sintomas a partir de textos brutos relatados por pacientes.
   * Utilização de **TF-IDF** e **Regressão Logística** (Scikit-Learn) para classificar o paciente como "Alto Risco" ou "Baixo Risco".
2. **Módulo de Deep Learning (Ir Além 2):**
   * Rede Neural **Perceptron Multicamadas (MLP)** construída com Keras/TensorFlow.
   * Analisa dados estruturados de ECG (BPM, Intervalo PR, Duração QRS) para detectar anomalias no ritmo cardíaco.
3. **Portal Médico Front-End (Ir Além 1):**
   * Dashboard desenvolvido em **React + Vite**.
   * Sistema de rotas protegidas (`react-router-dom`) utilizando **Context API** para simular o login do médico.
   * UI/UX com design *Obsidian Dark Mode* para conforto visual em plantões noturnos.

##  Como executar o projeto na sua máquina

### 1. Requisitos
* Node.js instalado (para rodar o Front-End).
* Python 3.10+ instalado (para rodar os modelos de IA).

### 2. Rodando o Front-End (Dashboard React)
Abra um terminal, navegue até a pasta do portal e execute:

```bash
cd tales-cardioia-portal
npm install
npm run dev
```

Acesse http://localhost:5173/ no seu navegador.

3. Rodando o Back-End (Modelos de IA em Python)
Abra um novo terminal na pasta raiz do projeto, instale as dependências e execute os scripts de análise:

```Bash
# Instalar bibliotecas de IA
pip install tensorflow pandas scikit-learn

# Executar a Rede Neural de ECG
python rede_neural_ecg.py
```

### Autor
Tales Domienikan - Graduação em Inteligência Artificial - FIAP (RM567483)

Projeto acadêmico desenvolvido para fins de avaliação.


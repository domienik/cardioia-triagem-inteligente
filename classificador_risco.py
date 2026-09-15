import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# 1. Carregar os dados
df = pd.read_csv('frases_risco.csv')

# 2. Separar as frases (X) e os rótulos de risco (y)
X = df['frase']
y = df['situacao']

# 3. Aplicar o TF-IDF (Transformar texto em números/vetores)
vetorizador = TfidfVectorizer()
X_vetorizado = vetorizador.fit_transform(X)

# 4. Dividir os dados em Treino e Teste (80% treino, 20% teste)
X_treino, X_teste, y_treino, y_teste = train_test_split(X_vetorizado, y, test_size=0.33, random_state=14)

# 5. Treinar o modelo de Regressão Logística
modelo = LogisticRegression()
modelo.fit(X_treino, y_treino)

# 6. Fazer previsões com os dados de teste
previsoes = modelo.predict(X_teste)

# 7. Avaliar os resultados
acuracia = accuracy_score(y_teste, previsoes)

print("-" * 50)
print("🧠 AVALIAÇÃO DO MODELO CARDIOIA (TF-IDF)")
print("-" * 50)
print(f"Acurácia do Modelo: {acuracia * 100:.2f}%\n")
print("Relatório Detalhado:")
print(classification_report(y_teste, previsoes))

# Teste bônus com uma frase nova:
frase_nova = ["estou com uma dor esmagadora no peito"]
frase_nova_vetorizada = vetorizador.transform(frase_nova)
previsao_nova = modelo.predict(frase_nova_vetorizada)
print(f"🚨 Teste Prático -> Frase: '{frase_nova[0]}'")
print(f"Resultado da Triagem: {previsao_nova[0].upper()}")
print("-" * 50)
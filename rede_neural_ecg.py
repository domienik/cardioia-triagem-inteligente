import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

print("⏳ Iniciando o Motor de Deep Learning CardioIA...")

# 1. Carregar os dados
df = pd.read_csv('dados_ecg.csv')

# 2. Separar as features (X) e o diagnóstico (y)
X = df[['batimentos', 'intervalo_pr', 'duracao_qrs']]
y = df['diagnostico']

# 3. Dividir os dados em Treino (70%) e Teste (30%)
X_treino, X_teste, y_treino, y_teste = train_test_split(X, y, test_size=0.3, random_state=42)

# 4. Padronização dos dados (Crucial para Redes Neurais aprenderem rápido)
scaler = StandardScaler()
X_treino_escalonado = scaler.fit_transform(X_treino)
X_teste_escalonado = scaler.transform(X_teste)

# 5. Construindo a Arquitetura da Rede Neural (MLP)
modelo = Sequential()
# Camada de entrada e primeira camada oculta com 8 neurônios (função de ativação relu)
modelo.add(Dense(8, input_dim=3, activation='relu'))
# Segunda camada oculta com 4 neurônios
modelo.add(Dense(4, activation='relu'))
# Camada de saída com 1 neurônio (função sigmoid para retornar 0 ou 1)
modelo.add(Dense(1, activation='sigmoid'))

# 6. Compilando o modelo
modelo.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# 7. Treinando a Rede Neural
print("🧠 Treinando a Rede Neural (Épocas)...")
historico = modelo.fit(X_treino_escalonado, y_treino, epochs=50, batch_size=4, verbose=0)

# 8. Avaliando o resultado
perda, acuracia = modelo.evaluate(X_teste_escalonado, y_teste, verbose=0)

print("-" * 50)
print("✅ AVALIAÇÃO DA REDE NEURAL (ECG)")
print("-" * 50)
print(f"Acurácia do Modelo: {acuracia * 100:.2f}%\n")

# 9. Teste Prático com um novo paciente
# Simulação: Paciente com 135 bpm, PR de 0.26 e QRS de 0.15 (Valores anormais)
paciente_novo = [[135, 0.26, 0.15]]
paciente_escalonado = scaler.transform(paciente_novo)
previsao = modelo.predict(paciente_escalonado, verbose=0)

# Como a saída é uma probabilidade (0 a 1), definimos o ponto de corte em 0.5
resultado_final = "ANOMALIA DETECTADA" if previsao[0][0] > 0.5 else "ECG NORMAL"

print(f"🚨 Teste Prático -> Previsão de risco: {previsao[0][0]*100:.1f}%")
print(f"Resultado do Laudo: {resultado_final}")
print("-" * 50)
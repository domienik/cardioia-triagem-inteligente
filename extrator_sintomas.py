import csv
import unicodedata

# Função para remover acentos e deixar o texto em letras minúsculas
# Isso garante que "coração" na frase seja lido como "coracao" igual ao CSV
def normalizar_texto(texto):
    texto_normalizado = unicodedata.normalize('NFD', texto).encode('ascii', 'ignore').decode('utf-8')
    return texto_normalizado.lower()

# 1. Carregar o Mapa de Conhecimento (CSV)
mapa_conhecimento = []
with open('mapa_conhecimento.csv', mode='r', encoding='utf-8') as arquivo_csv:
    leitor = csv.DictReader(arquivo_csv)
    for linha in leitor:
        mapa_conhecimento.append({
            'sintoma_1': linha['Sintoma 1'].strip().lower(),
            'sintoma_2': linha['Sintoma 2'].strip().lower(),
            'doenca': linha['Doenca Associada'].strip()
        })

# 2. Ler as frases dos pacientes (TXT) e processar o diagnóstico
print("-" * 50)
print("🩺 SISTEMA DE TRIAGEM CARDIOIA INICIADO")
print("-" * 50)

with open('sintomas_pacientes.txt', mode='r', encoding='utf-8') as arquivo_txt:
    frases_pacientes = arquivo_txt.readlines()

for index, frase in enumerate(frases_pacientes, start=1):
    frase_original = frase.strip()
    frase_processada = normalizar_texto(frase_original)
    
    diagnostico_sugerido = "Avaliação médica manual necessária"
    
    # 3. Cruzar dados: verifica se as palavras-chave do CSV estão na frase do paciente
    for item in mapa_conhecimento:
        if item['sintoma_1'] in frase_processada or item['sintoma_2'] in frase_processada:
            diagnostico_sugerido = item['doenca']
            break # Para a busca assim que encontra o primeiro diagnóstico compatível
            
    print(f"\n🗣️ Paciente {index}: '{frase_original}'")
    print(f"🤖 Diagnóstico Assistido por IA: {diagnostico_sugerido}")

print("\n" + "-" * 50)
print("✅ TRIAGEM CONCLUÍDA")
print("-" * 50)
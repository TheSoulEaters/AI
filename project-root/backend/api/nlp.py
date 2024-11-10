import sys
import json
import random

# Fungsi untuk mendeteksi emosi
def detect_emotion(text):
    emotions = ['happy', 'sad', 'angry', 'neutral']
    return random.choice(emotions)

# Fungsi untuk merespon pengguna
def generate_response(text):
    if 'hello' in text.lower():
        return "Hello there! How can I help you today?"
    return "I didn't understand that."

# Mengambil teks dari argumen
input_text = sys.argv[1]

# Mendapatkan emosi dan respon
emotion = detect_emotion(input_text)
response = generate_response(input_text)

# Mengirim hasil sebagai JSON
result = {
    'emotion': emotion,
    'response': response
}
print(json.dumps(result))

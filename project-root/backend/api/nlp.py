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

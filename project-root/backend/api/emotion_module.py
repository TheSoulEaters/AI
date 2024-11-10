import random

def get_emotion_image(emotion):
    emotions_images = {
        'happy': 'happy.png',
        'sad': 'sad.png',
        'angry': 'angry.png',
        'neutral': 'neutral.png'
    }
    return emotions_images.get(emotion, 'neutral.png')

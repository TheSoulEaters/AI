# AI VTuber Assistant

Proyek ini adalah aplikasi asisten AI yang berbasis VTuber dengan kemampuan mendeteksi emosi, berbicara, dan berinteraksi dengan pengguna. 

## Struktur Proyek

- `backend/` : Backend API menggunakan Node.js dan Python.
- `frontend/` : Antarmuka pengguna menggunakan React.js.
- `models/` : Model karakter dan ekspresi emosi.
- `scripts/` : Skrip untuk membangun dan mendeploy proyek.

## Cara Menjalankan

1. Jalankan backend:
   ```bash
   cd backend
   npm install
   npm start
##  Struktur

project-root/
│
├── backend/                    # Folder Backend
│   ├── api/
│   │   ├── nlp.py              # File untuk proses NLP dan deteksi emosi
│   │   ├── tts.py              # File untuk Text-to-Speech
│   │   └── emotion_module.py   # File untuk mengatur modul emosi AI
│   │
│   ├── db/
│   │   ├── database.js         # Koneksi ke database
│   │   └── models/
│   │       ├── user.js         # Model untuk menyimpan data pengguna
│   │       └── preferences.js  # Model untuk menyimpan preferensi pengguna
│   │
│   ├── config/
│   │   ├── config.js           # Konfigurasi umum (port, database URI, dll.)
│   │   └── api_keys.js         # Konfigurasi API Key untuk layanan eksternal
│   │
│   ├── routes/
│   │   ├── user.js             # Rute API untuk pengaturan dan data pengguna
│   │   ├── nlp.js              # Rute API untuk NLP dan respons
│   │   └── tts.js              # Rute API untuk TTS
│   │
│   ├── server.js               # File utama untuk menjalankan server backend
│   └── package.json            # Dependencies dan skrip npm
│
├── frontend/                   # Folder Frontend
│   ├── public/
│   │   ├── index.html          # Halaman utama UI
│   │   ├── styles.css          # CSS untuk gaya halaman
│   │   └── assets/
│   │       ├── images/         # Folder untuk gambar statis
│   │       ├── icons/          # Folder untuk ikon UI
│   │       └── sounds/         # Folder untuk efek suara tambahan
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Character.js    # Komponen karakter VTuber
│   │   │   ├── EmotionIndicator.js # Komponen untuk menampilkan emosi AI
│   │   │   └── ChatBox.js      # Komponen untuk kotak input chat pengguna
│   │   │
│   │   ├── services/
│   │   │   ├── api.js          # Fungsi untuk memanggil API backend
│   │   │   └── audio.js        # Fungsi untuk memainkan audio TTS
│   │   │
│   │   ├── App.js              # Komponen utama untuk menggabungkan semua komponen
│   │   └── main.js             # Entry point untuk aplikasi frontend
│   │
│   └── package.json            # Dependencies frontend
│
├── models/                     # Model dan data untuk karakter VTuber
│   ├── character_model/        # Folder untuk model karakter (2D/3D)
│   │   ├── character.blend      # File Blender untuk karakter 3D (jika menggunakan Blender)
│   │   └── character.anim       # File animasi karakter (jika menggunakan perangkat lain)
│   │
│   └── emotions/               # Folder untuk ekspresi karakter
│       ├── happy.png           # Ekspresi karakter senang
│       ├── sad.png             # Ekspresi karakter sedih
│       ├── angry.png           # Ekspresi karakter marah
│       └── neutral.png         # Ekspresi karakter netral
│
├── scripts/                    # Folder untuk skrip automasi dan pengujian
│   ├── build.sh                # Skrip untuk membangun proyek
│   └── deploy.sh               # Skrip untuk mendeploy proyek
│
├── README.md                   # Dokumentasi proyek
└── .gitignore                  # File untuk mengabaikan file tertentu dalam Git

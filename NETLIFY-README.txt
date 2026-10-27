PANDUAN SINGKAT DEPLOY NETLIFY

Struktur proyek ini sudah disusun agar folder app/, components/, hooks/, lib/, public/,
serta package.json berada langsung di root proyek.

Pengaturan Netlify:
- Base directory: kosongkan (root repository)
- Build command: npm run build
- Publish directory: biarkan kosong/default agar integrasi Next.js Netlify menanganinya
- Framework: Next.js (jika diminta memilih)

PENTING:
Upload isi folder proyek ini ke root repository GitHub dengan mempertahankan struktur folder.
Jangan memindahkan page.tsx, layout.tsx, atau file-file di components/ui ke root repository.
Setelah struktur GitHub benar, jalankan Trigger deploy -> Deploy site di Netlify.

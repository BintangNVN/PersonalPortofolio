# Setup EmailJS untuk Form Kontak

Form kontak website ini menggunakan EmailJS untuk mengirim email. Berikut langkah-langkah setup:

## Langkah 1: Daftar EmailJS
1. Kunjungi https://www.emailjs.com
2. Daftar akun gratis (free tier cukup untuk penggunaan pribadi)
3. Login ke dashboard

## Langkah 2: Setup Email Service
1. Di dashboard, klik "Email Services"
2. Klik "Add New Service"
3. Pilih provider email Anda (Gmail, Outlook, dll)
4. Ikuti instruksi untuk menghubungkan email Anda
5. **Catat Service ID** yang diberikan (contoh: service_xxxxx)

## Langkah 3: Buat Email Template
1. Klik "Email Templates"
2. Klik "Create New Template"
3. Gunakan template berikut:

**Template Name:** Contact Form

**Subject:** Pesan Baru dari Portfolio Website

**Content:**
```
Dari: {{from_name}}
Email: {{from_email}}

Pesan:
{{message}}

---
Balas ke: {{reply_to}}
```

4. **Catat Template ID** yang diberikan (contoh: template_xxxxx)

## Langkah 4: Dapatkan Public Key
1. Klik "Account" di menu
2. Scroll ke bagian "API Keys"
3. **Salin Public Key** Anda

## Langkah 5: Update script.js
Buka file `script.js` dan ganti nilai berikut:

1. Ganti `YOUR_PUBLIC_KEY` dengan Public Key Anda (baris ~18)
2. Ganti `YOUR_SERVICE_ID` dengan Service ID Anda (baris ~108)
3. Ganti `YOUR_TEMPLATE_ID` dengan Template ID Anda (baris ~109)

## Langkah 6: Update index.html (opsional)
Jika ingin, Anda juga bisa mengupdate baris 310 di `index.html`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Ganti dengan Public Key Anda
```

## Catatan
- Jika EmailJS belum dikonfigurasi, form akan otomatis menggunakan mailto sebagai fallback
- Email akan dikirim ke: **bintangnovian00@gmail.com**
- Free tier EmailJS memberikan 200 email/bulan (cukup untuk portfolio pribadi)

## Troubleshooting
- Pastikan Service ID dan Template ID sudah benar
- Pastikan Public Key sudah di-set dengan benar
- Cek console browser (F12) untuk melihat error jika ada
- Pastikan email service sudah terhubung dengan benar di EmailJS dashboard




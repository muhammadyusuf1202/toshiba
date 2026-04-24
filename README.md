# Sticker Maker (Oddiy sayt)

Bu kichik web-sayt rasmdan stiker tayyorlaydi:
- Rasm yuklaysiz
- Oq fonga yaqin ranglarni shaffof qilasiz
- 512x512 PNG stiker yuklab olasiz

## Lokal ishga tushirish

### 1-usul: oddiy static server

```bash
python3 -m http.server 8080
```

### 2-usul: Node server

```bash
npm install
npm start
```

Keyin brauzerda oching: <http://localhost:8080>

## Serverga deploy (Render / Railway / VPS)

Bu repo endi deploy qilishga tayyor:
- `server.js` (`PORT` env bilan ishlaydi)
- `package.json` (`npm start`)
- `Dockerfile`

### Render misol
1. Repo-ni GitHub'ga push qiling.
2. Render'da **New Web Service** oching.
3. Build command: `npm install`
4. Start command: `npm start`
5. Deploy qiling.

## Muhim izoh

Men bu chatdan to‘g‘ridan-to‘g‘ri sizning hosting akkauntingizga kirib deploy qila olmayman.
Lekin yuqoridagi konfiguratsiya bilan siz 2-3 daqiqada serverga chiqarishingiz mumkin.
Agar xohlasangiz, keyingi xabarda aynan qaysi platformaga (Render, Railway, VPS, Vercel) qadamma-qadam aniq buyruqlarni beraman.

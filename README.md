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

## Render'ga deploy (aniq qadamlar)

### Variant A: Dashboard orqali
1. Kodni GitHub repo'ga push qiling.
2. Render'da **New +** → **Web Service** ni bosing.
3. GitHub repo'ni ulang.
4. Quyidagilarni kiriting:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/health`
5. **Create Web Service** ni bosing.

### Variant B: render.yaml bilan (Blueprint)
Repo ichida `render.yaml` bor. Render'da:
1. **New +** → **Blueprint** ni tanlang.
2. Shu repo'ni tanlang.
3. Render avtomatik `render.yaml` bo'yicha service yaratadi.

## Muhim izoh

Men bu chatdan to‘g‘ridan-to‘g‘ri sizning Render akkauntingizga kirib deploy qila olmayman.
Lekin yuqoridagi konfiguratsiya bilan siz tezda deploy qilasiz.

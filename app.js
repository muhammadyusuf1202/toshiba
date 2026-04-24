const input = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const threshold = document.getElementById('threshold');
const downloadBtn = document.getElementById('downloadBtn');

let originalImage = null;

function drawSticker() {
  if (!originalImage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const ratio = Math.min(canvas.width / originalImage.width, canvas.height / originalImage.height);
  const drawWidth = originalImage.width * ratio;
  const drawHeight = originalImage.height * ratio;
  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;

  ctx.drawImage(originalImage, x, y, drawWidth, drawHeight);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const limit = Number(threshold.value);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r >= limit && g >= limit && b >= limit) {
      data[i + 3] = 0;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

input.addEventListener('change', (event) => {
  const [file] = event.target.files;
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      originalImage = img;
      drawSticker();
      downloadBtn.disabled = false;
    };
    img.src = String(reader.result);
  };
  reader.readAsDataURL(file);
});

threshold.addEventListener('input', drawSticker);

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = `sticker-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
});

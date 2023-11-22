const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('https://archive.nptel.ac.in/');
});

app.get('/content/noc/NOC23/SEM2/Ecertificates/102/noc23-bt55/Course/NPTEL23BT55S53010000120071620.pdf', (req, res) => {
  const pdfPath = 'public/NPTEL23BT55S53010000120071620.pdf';
  res.sendFile(path.resolve(pdfPath));
});

app.get('/noc/Ecertificate/', (req, res) => {
  const { q } = req.query;
  if (q === 'NPTEL23BT55S53010000120071620') {
    const pdfPath = 'public/NPTEL23BT55S53010000120071620.pdf';
    // return res.sendFile(path.resolve(pdfPath));
    res.sendFile(__dirname + '/public/Ecertificate.html');
  } else {
   const redirectUrl = `https://archive.nptel.ac.in/noc/Ecertificate/?q=${q}`;
    return res.redirect(redirectUrl);
  }
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

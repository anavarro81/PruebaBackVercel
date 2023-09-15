// Importo servidor. 
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.get("/", (req, res) => {
    
    const htmlResponse = `    
    <html> 
        <head> 
            <title> Prueba Node en Vercel </title> 
        </head>
        <body>
        <h1> Proyecto de pruebas backend en Vercel </h1>
        </body>   
    </html>
    
    `;
    res.send(htmlResponse)

});


app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

//
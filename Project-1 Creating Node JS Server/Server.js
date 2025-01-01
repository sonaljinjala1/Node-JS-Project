// const h = require('http');
// const port = 8000;
// const fscall = require('fs');
// const server = h.createServer((req, res) => {
//     let fileName = "";
//     switch (req.url) {
//         case '/':
//             fileName = './Home.html'
//             break;

//         case '/ab'://ahi (.)  lakhavu nahi.
//             fileName = './About.html'
//             break;

//         case '/galary':
//             fileName = './Galary.html'
//             break;

//         case '/blog':
//             fileName = './Blog.html'
//             break;

//         case '/contact':
//             fileName = './contact.html'
//             break;

//         case '/career':
//             fileName = './careers.html'
//             break;

//         case '/faq':
//             fileName = './faq.html'
//             break;

//         case '/portfolio':
//             fileName = './portfolio.html'
//             break;

//         case '/product':
//             fileName = './products.html'
//             break;

//         case '/services':
//             fileName = './services.html'
//             break;
//     }
//     fscall.readFile(fileName, (err, pageName) => {
//         if (!err) {
//             console.log(`File is Found`);
//         }
//         else{
//             console.log(`File is Not Found`);
//             return false;
//         }
//         res.end(pageName);
//     })
// })
// server.listen(port, (err) => {
//     if (!err) {
//         console.log(`Server is Start on port :- ${port}`);
//     }
// })



const h = require('http');
const port = 8000;
const fscall = require('fs');
const server = h.createServer((req,res)=>{
    let fileName = "";

    switch (req.url) {
                case '/':
                    fileName = './Home.html'
                    break;
        
                case '/ab'://ahi (.)  lakhavu nahi.
                    fileName = './About.html'
                    break;
        
                case '/galary':
                    fileName = './Galary.html'
                    break;
        
                case '/blog':
                    fileName = './Blog.html'
                    break;
        
                case '/contact':
                    fileName = './contact.html'
                    break;
        
                case '/career':
                    fileName = './careers.html'
                    break;
        
                case '/faq':
                    fileName = './faq.html'
                    break;
        
                case '/portfolio':
                    fileName = './portfolio.html'
                    break;
        
                case '/product':
                    fileName = './products.html'
                    break;
        
                case '/services':
                    fileName = './services.html'
                    break;
            }
        fscall.readFile(fileName,(err , pageName)=>{
            if(!err){
                console.log(`File is Found`);                
            }
            else{
                console.log(`File is Not Found`);
                return false;
            }
            res.end(pageName);
        })
    })
    server.listen(port ,(err)=>{
        if(!err){
            console.log(`Server is Start on port :- ${port}`);
            
        }
    })


module.exports = (function (req, res, next){

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

   //Handle Preflight 
   if (reqest.method === 'OPTIONS') {
      response.status(200).send();        
   }
   else {
      next();
   }

});
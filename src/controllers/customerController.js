const customerRepo = require('../repositories/customerRepository')

function getAll(req, res, next) {
   console.log( 'hit /customers' )

   res.json( customerRepo.getAll() )
}

function getOne(req, res, next) {
   console.log( 'hit /customers/:id' )

   const id = req.params.id;

   res.json( customerRepo.getOne(id) )
}

module.exports = {
   getAll,
   getOne
}
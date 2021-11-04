const express = require('express')
const router = express.Router()


//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Usando o GET dentro da rota de pedidos'
  })
})

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade
  }
  res.status(201).send({
    mensagem: 'O pedido foi criado',
    pedidoCriado: pedido
  })
})

//RETORNA OS DADOS DE UM PEDIDO, POR ID
router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido

  if(id==='especial') {
    res.status(200).send({
      mensagem: 'Esse é o id especial',
      id: id
    })
  } else {
    res.status(200).send({
      mensagem: 'Você passou um Id',
      id: id
    })
  }
})

//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Usando o DELETE dentro da rota de pedidos'
  })
})

module.exports = router

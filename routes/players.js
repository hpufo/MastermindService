const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Player = require('../models/player');

router.get('/players', (req,res,next) => {
  Player.find({})
    .then((players) => {
      res.send(players);
    })
    .catch(e => {
      res.status(418).send(e.message);
    });
});

router.get('/players/:_id', (req,res,next) => {
  Player.find({_id: req.params._id})
    .then((player) => {
      res.send(player);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

router.post('/players', (req,res,next) => {
  Player.create(req.body)
  .then((response) => {
    res.send(response);
  })
  .catch(e => {
    res.status(400).send(e.message);
  });
});

module.exports = router;
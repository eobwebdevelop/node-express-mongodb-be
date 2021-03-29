module.exports = app => {
    const duties = require("../controllers/duty.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Duty
    router.post("/", duties.create);
  
    // Retrieve all Duties
    router.get("/", duties.findAll);
  
    // Retrieve a single Duty with id
    router.get("/:id", duties.findOne);
  
    // Update a Duty with id
    router.put("/:id", duties.update);
  
    // Delete a Duty with id
    router.delete("/:id", duties.delete);
  
    // Create a new Duty
    router.delete("/", duties.deleteAll);
  
    app.use('/api/duties', router);
  };
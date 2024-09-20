const Service = require('../models/service');

const addService = async (req, res) => {
   const { name, description, price } = req.body;
   if (!name || !price) {
     return res.status(400).json({ message: 'Service name and price are required.' });
   }
 
   try {
     const newService = new Service({ name, description, price });
     const savedService = await newService.save();
     res.status(201).json(savedService);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
 };
 
 
 const getServices = async (req, res) => {
   try {
     const services = await Service.find();
     res.status(200).json(services);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
 };
 
 
 const updateService = async (req, res) => {
   const { id } = req.params;
   const { name, description, price } = req.body;
 
   try {
     const updatedService = await Service.findByIdAndUpdate(
       id,
       { name, description, price },
       { new: true }
     );
     if (!updatedService) {
       return res.status(404).json({ message: 'Service not found.' });
     }
     res.status(200).json(updatedService);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
 };
 
 
 const deleteService = async (req, res) => {
   const { id } = req.params;
   try {
     const deletedService = await Service.findByIdAndDelete(id);
     if (!deletedService) {
       return res.status(404).json({ message: 'Service not found.' });
     }
     res.status(200).json({ message: 'Service has been deleted successfully.' });
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
 };
 
 module.exports = { addService, getServices, updateService, deleteService };
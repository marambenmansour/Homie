const Publication = require('../model/PublicationModel.cjs');
exports.addPublication = async (req, res) => {
  try {
    const {address, Type, Description, Bathrooms, Kitchens, Rooms} = req.body;

    // Create a new user
    const newPublication = new Publication({
      address,
      Type,
      Description,
      Bathrooms,
      Kitchens,
      Rooms,
    });
    await newPublication.save();
    res.status(201).json({message: 'Publication created successfully!'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Error while adding publication!'});
  }
};

exports.getPublication = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you're using user authentication middleware

    // Fetch publication data based on user ID or any other criteria
    const publications = await Publication.find({userId}); // Adjust this query based on your database schema

    if (!publications || publications.length === 0) {
      console.error('Publications not found for user ID:', userId);
      return res.status(404).json({error: 'Publications not found'});
    }

    console.log('Publications retrieved successfully for user ID:', userId);
    res.json(publications);
  } catch (err) {
    console.error('Error fetching publications:', err.message);
    res.status(500).send('Server Error');
  }
};

const testApi = (req, res) => {
  res.json({
    success: true,
    message: "API working macha 💯",
  });
};

module.exports = { testApi };

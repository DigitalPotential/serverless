module.exports.getUsers = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      users: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
      ],
    }),
  };
};

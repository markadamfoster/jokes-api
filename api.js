const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World!' }),
  };
};

module.exports = { handler };
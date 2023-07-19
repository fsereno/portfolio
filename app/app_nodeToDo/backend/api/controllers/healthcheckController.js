/**
 * Responds with a 200 status for the healthcheck.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const handleHealthcheck = (req, res) => {
    res.status(200).send();
};

module.exports = {
    handleHealthcheck
};

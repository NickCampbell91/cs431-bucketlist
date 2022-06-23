const db = require('./models');
const Bucket = db.bucket;

exports.create = (req, res) => {
    const bucket = new Bucket(req.body);
    bucket
        .save()
        .then((data) => {
            console.log(data);
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the goal.'
            });
        });
};

exports.getAll = (req, res) => {
    Bucket.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving your goals.'
            });
        });
};

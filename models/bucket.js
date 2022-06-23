module.exports = (mongoose) => {
    const Bucket = mongoose.model(
        'buckets',
        mongoose.Schema({
            bucketName: {
                type: String
            },
            bucketDescription: {
                type: String
            },
        })
    );

    return Bucket;
};

//"bucket means goal", I'm just trying to avoid conflicting variables.
module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
        username: {
            type: String
        },
        password: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
    });

    return mongoose.model('users', userSchema);
};
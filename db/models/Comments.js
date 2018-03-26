module.exports = (sequelize, DataTypes) => {
    let Comments;

    const schema = {
        id: DataTypes.INTEGER,
        id_news: DataTypes.INTEGER,
        id_comments: DataTypes.INTEGER,
        body: DataTypes.TEXT,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING, validate: {
                isEmail: {
                    msg: "wrong format email"
                },
                notEmpty: {
                    msg: 'Email not null'
                }
            }
        }
    };

    Comments = sequelize.define(`${settings.connectArray.prefix}comments`, schema);

    return Comments;
};
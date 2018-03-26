module.exports = (sequelize, DataTypes) => {
    let University_info;

    const schema = {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        mail_index: DataTypes.STRING,
        adress: DataTypes.STRING,
        logo: DataTypes.STRING,
        email: {
            type: DataTypes.STRING, validate: {
                isEmail: {
                    msg: "wrong format email"
                },
                notEmpty: {
                    msg: 'Email not null'
                }
            }
        },
        notivation: DataTypes.STRING,
        phone: DataTypes.STRING,
        mobile: DataTypes.STRING,
        other_phone: DataTypes.STRING
    };

    University_info = sequelize.define(`${settings.connectArray.prefix}university_info`, schema);

    return University_info;
};
module.exports = (sequelize, DataTypes) => {
    let Users;

    const schema = {
        id: DataTypes.INTEGER,
        login: DataTypes.STRING,
        password: DataTypes.STRING,
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
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        second_name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        img_id: DataTypes.INTEGER,
        role_id: DataTypes.TINYINT
    };

    Users = sequelize.define(`${settings.connectArray.prefix}users`, schema);

    return Users;
};
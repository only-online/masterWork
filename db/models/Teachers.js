module.exports = (sequelize, DataTypes) => {
    let Teachers;

    const schema = {
        id: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        second_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        position: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        office: DataTypes.STRING
    };

    Teachers = sequelize.define(`${settings.connectArray.prefix}teachers`, schema);

    return Teachers;
};
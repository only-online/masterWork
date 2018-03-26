module.exports = (sequelize, DataTypes) => {
    let Main_seq;

    const schema = {
        id: DataTypes.INTEGER
    };

    Main_seq = sequelize.define(`${settings.connectArray.prefix}main_seq`, schema);

    return Main_seq;
};
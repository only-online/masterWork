module.exports = (sequelize, DataTypes) => {
    let User;

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

    const options = {
        paranoid: true,
        classMethods: {
            authOrCreate (username, done) {
                const query = {
                    where: {
                        username
                    },
                    defaults: {
                        password: generatePassword()
                    }
                };
                this.findOrCreate(query).spread((user, created) => {
                    if (created) {
                        done(null, user);
                    } else {
                        done(null, user);
                    }
                }, (err) => {
                    done(err);
                });
            },

            associate (models) {
                User.hasMany(models.Order);
            }
        }
    };

    User = sequelize.define(`${settings.connectArray.prefix}comments`, schema, options);

    return Comments;
};
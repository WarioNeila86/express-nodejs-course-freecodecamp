module.exports = (sequelize, DataTypes) => {
    const lead = sequelize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return lead;
}
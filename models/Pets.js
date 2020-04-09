module.exports = function (sequelize, DataTypes) {

    var Pet = sequelize.define("Pet", {
        // Hungry
        isHungry: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        hungerProgress: {
            type: DataTypes.INTEGER,
        },

        lastFedDT: {
            type: DataTypes.DATE,
        },

        // Play
        isPlayful: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        playfulProgress: {
            type: DataTypes.INTEGER,
        },

        lastPlayDT: {
            type: DataTypes.DATE,
        },

        // Sleep
        isSleepy: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        sleepProgress: {
            type: DataTypes.INTEGER,
        },

        lastSleepDT: {
            type: DataTypes.DATE,
        },

        // Wake
        isAwake: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        wakeProgress: {
            type: DataTypes.INTEGER,
        },

        lastWakeDT: {
            type: DataTypes.DATE,
        },

        // Clean
        isClean: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        cleanProgress: {
            type: DataTypes.INTEGER,
        },

        lastCleanDT: {
            type: DataTypes.DATE,
        },

        // Medicine
        isMedicated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        medicationProgress: {
            type: DataTypes.INTEGER,
        },

        lastMedicineDT: {
            type: DataTypes.DATE,
        },

        characterID: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        }
    });
    Pet.associate = function(models) {
        Pet.belongsTo(models.User, { 
            foreignKey: {
            allowNull: false
            },
            onDelete: 'CASCADE'
        })
    }
    return Pet;
};
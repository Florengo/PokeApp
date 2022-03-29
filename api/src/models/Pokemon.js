const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    attack:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },

    defense:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    img:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

    special_attack:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },

    special_defense:{
      type: DataTypes.INTEGER,
      allowNull:false,
    },

  });
};

const { DataTypes } = require("sequelize");
const { STRING, DECIMAL, CHAR, INTEGER, FLOAT } = DataTypes;
const sequelize = require("../config/connection");
const Sequelize = require("sequelize")

const schemeReturns = sequelize.define("schemereturns", {
    schid: {
        type: Sequelize.INTEGER,
        allowNull: true, unique: true
    },
    '1Day':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '7Day':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '15Day':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '30Day':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '3Month':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '6Month':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '1Year':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '2Year':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '3Year':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '5Year':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    '10Year':
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    D1Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    D7Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    D15Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    D30Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    M3Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    M6Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    Y1Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    Y2Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    Y3Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    Y5Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    Y10Rank:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    D1Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    D7Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    D15Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    D30Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    M3Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    M6Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    Y1Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    Y2Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    Y3Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    Y5Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    Y10Quarter:
    {
        type: Sequelize.CHAR(1),
        allowNull: true
    },
    sinceInceptionReturn:
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    updatedAt:
    {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdAt:
    {
        type: Sequelize.DATE,
        allowNull: false
    },
    '1YearSIPReturn':
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },
    '3YearSIPReturn':
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },
    '5YearSIPReturn':
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },
    '10YearSIPReturn':
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },
    '15YearSIPReturn':
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },
    '20YearSIPReturn':
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },
    sinceInceptionSIPReturn:
    {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: true
    },

}, {
    tableName: 'schemereturns'
})
schemeReturns.removeAttribute('id');
schemeReturns.sync();

module.exports = { schemeReturns }
module.exports = (sequelize, Sequelize) => {
    const DataStore = sequelize.define("dataStore", {
      title: {
        type: Sequelize.STRING
      },
      abstract: {
        type: Sequelize.STRING
      },
      temporalCoverageFrom: {
        type: Sequelize.DATE
      },
      temportalCoverageTo: {
        type: Sequelize.DATE
      },
      language: {
        type: Sequelize.STRING,
        defaultValue:"en"
      },
      version: {
        type: Sequelize.STRING,
        default:"v1.0.0"
      },
      openAccess: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    dataType: {
      type: Sequelize.STRING
    },
    project: {
      type: Sequelize.STRING
    },
    spatialRepresentationInfo: {
      type: Sequelize.STRING
    },
    westBoundingLongitude: {
      type: Sequelize.DOUBLE
    },
    eastBoundingLongitude: {
      type: Sequelize.DOUBLE
    },
    southBoundingLatitude: {
      type: Sequelize.DOUBLE
    },
    northBoundingLatitude: {
      type: Sequelize.DOUBLE
    },
    geospatialReferenceSystem: {
      type: Sequelize.STRING
    },
    dataQualityChecked: {
      type: Sequelize.BOOLEAN
    },
    contactName: {
      type: Sequelize.STRING
    },
    contactEmail: {
      type: Sequelize.STRING
    },
    publisher: {
      type: Sequelize.STRING
    },
    license: {
      type: Sequelize.STRING
    },
    accessUrl: {
      type: Sequelize.STRING
    },
    accessServer: {
      type: Sequelize.STRING
    },
    fileUrl: {
      type: Sequelize.STRING
    },
    fileName: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    uploadMethod: {
      type: Sequelize.STRING
    },
    tag: {
      type: Sequelize.STRING
    },
    topic: {
      type: Sequelize.STRING
    },
    });  
    return DataStore;
  };
  
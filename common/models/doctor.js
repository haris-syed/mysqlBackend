'use strict';

module.exports = function(Doctor) {

  Doctor.bySpeciality = function (spec_id, cb) {

    var ds = Doctor.dataSource;
    var sql = "SELECT * FROM doctor WHERE spec_id=?";
    ds.connector.query(sql, spec_id, function (err, doctors) {

      if (err) console.error(err);

      cb(err, doctors);

    });

  };

  Doctor.remoteMethod(
    'bySpeciality',
    {
      http: { verb: 'get' },
      description: 'Get list of doctors by speciality',
      accepts: { arg: 'spec_id', type: 'array' },
      returns: { arg: 'data', type: ['Doctor'], root: true }
    }
  );

};

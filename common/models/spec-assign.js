'use strict';

module.exports = function(Specassign) {

  /**
   * get spec assignments for given specialiites and clinics in the given date range
   * @param {Function(Error, array)} callback
   */

  Specassign.getSpecAssigns = function(callback) {
    var return_array=[]; //return array
    var specs=[1,2,3];
    var clinics = [1,2];
    var daterange = ["2018-08-02","2018-08-06"];
    console.log("starting function...  ")
    var filter;
    for (var i in specs){
      for (var j in clinics){
        filter={where:{and:[{spec_id:specs[i]},{clinic_id:clinics[j]},{between: [daterange[0],daterange[1]]}]}};
        Specassign.find(filter, function(err,spec_assigns){
          if(err) return err;
          console.log(spec_assigns);
          return_array.push(spec_assigns);
        });
      }
      if(i==specs.length-1 && j==clinics.length-1) {
        return callback(null, return_array);
      }
    }

  };

};
//Start_Date: {between: [daterange[0],daterange[1]]},

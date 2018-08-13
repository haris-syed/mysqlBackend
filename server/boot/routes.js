/* custom routes for the app*/

module.exports = function(app) {
  var router = app.loopback.Router();
  var Doctor = app.models.Doctor; //don't use model (use models)

  router.get('/api/getdoctors',function(req,res){
    var filters = {
      where:{
        id: '1'
      }
    };

    Doctor.find(filters,function (err,doctors){
      if(err) return;
      res.send(doctors);
    });
  });

  router.get('/api/getSpecialitiesForSup/:supid',function(req,res){
    var supAllowedManageSpecs = app.models.Sup_Allowed_Manage_Spec;
    var Speciality = app.models.Speciality;

    supAllowedManageSpecs.find({where:{sup_id:req.params.supid}},function(err,specs){
      if (err) return;
      var result=[];
      for(a in specs){
        Speciality.find({where:{id:specs[a].spec_id}},function(err,specname){
          result.push(specname[0]);
        });

      }
      res.send(result);
    });
  });

  app.use(router);
};

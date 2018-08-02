/* custom routes for the app*/

module.exports = function(app) {
  var router = app.loopback.Router();
  var Doctor = app.models.doctor; //don't use model (use models)

  router.get('/api/getdoctors',function(req,res){
    var filters = {
      where:{
        name: 'Dr.Amir Liaqat'
      }
    };
    Doctor.find(filters,function (err,doctors){
      if(err) return;
      res.send(doctors);
    });
  });

  app.use(router);
};

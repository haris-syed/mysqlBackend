module.exports = function(app) {
  var dataSource = app.dataSources.db;
  dataSource.automigrate(null, function (err) {
    if (err) return;
  });
};

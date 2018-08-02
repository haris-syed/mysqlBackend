module.exports = function(app) {
  var dataSource = app.dataSources.db;
  dataSource.autoupdate(null, function (err) { //change to autoupdate if data retention is required
    if (err) return;
  });
};

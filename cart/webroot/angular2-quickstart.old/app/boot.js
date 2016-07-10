(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent, [ng.http.HTTP_PROVIDERS]);
  });
})(window.app || (window.app = {}));


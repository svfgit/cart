(function(app) {
  app.CountryService = ng.core.
  Injectable()
   .Class({
        constructor: [ng.http.Http, function(http) {
            this.endpoint_url = "https://restcountries.eu/rest/v1/region/";
            this.http = http;
        }],
        getCountriesByRegion : function(region){
            return this.http.get(this.endpoint_url + region).map(
                function(res){
                    res = res.json();
                    return res;
                }
            );
        }
    });
})(window.app || (window.app = {}));


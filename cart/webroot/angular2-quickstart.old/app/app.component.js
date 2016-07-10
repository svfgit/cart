
(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: 'app-component',
            templateUrl: 'app/app.component.tpl.html',
            viewProviders: [app.CountryService]
        })
        .Class({
            constructor: [app.CountryService, function (countryService) {
                this._countryService = countryService;
	        }],
 
            getCountriesByRegion: function () {
                var self = this;
                self.countries = [];
                this.error = "";
                this._countryService.getCountriesByRegion(this.region).subscribe(
                    function (data) {
                        self.countries = data;
                    },
                    function (err) {
                        self.error = 'Region ' + self.region + ' is invalid.';
                    }
                )
            }
        });
})(window.app || (window.app = {}));

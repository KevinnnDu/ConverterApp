/**
 * Created by Kevin on 6/23/2016.
 */
Ext.define('ConverterApp.view.main.ConverterViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.km',

    formulas: {
        kilos: {
            get: function (get) {
                return get('miles') * 1.6;
            },

            set: function (km) {
                var miles = this.getData().miles;
                miles = km / 1.6;

                this.set('miles', miles);
            }
        }
    },

    getKM: function(miles) {
        var km;
        if(miles) {
            km = miles * 1.6;
        }
        return km;
    }
});
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
            }
        }
    }
});
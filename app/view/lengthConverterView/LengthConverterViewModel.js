/**
 * Created by Kevin on 6/23/2016.
 */
Ext.define('ConverterApp.view.lengthConverterView.LengthConverterViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.length',

    formulas: {
        miles: {
            get: function (get) {
                return get('kms') / 1.6;
            },

            set: function (miles) {
               // var km = this.getData().kms;
               var km = miles * 1.6;

                this.set('kms', km);
            }
        },
        
        meters: {
            get: function (get) {
                return get('kms') * 1000;
            },

            set: function (meters) {
                //var km = this.getData().kms;
               var km = meters / 1000;
                this.set('kms', km);
            }
        },

        cm: {
            get: function (get) {
                return get('kms') * 100000;
            },

            set: function (cm) {
                //var km = this.getData().kms;
                var km = cm / 100000;
                this.set('kms', km);
            }
        },

        mm: {
            get: function (get) {
                return get('kms') * 10000000;
            },

            set: function (mm) {
                //var km = this.getData().kms;
                var km = mm / 10000000;
                this.set('kms', km);
            }
        }
    },

});
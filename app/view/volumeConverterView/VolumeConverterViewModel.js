/**
 * Created by Kevin on 6/23/2016.
 */
Ext.define('ConverterApp.view.volumeConverterView.VolumeConverterViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.volume',

    formulas: {
        mls: {
            get: function (get) {
                return get('litres') / 1000;
            },

            set: function (mls) {

                var litre = mls * 1000;
                this.set('litres', litre);
            }
        },
        
        gallons: {
            get: function (get) {
                return get('litres') * 3.79;
            },

            set: function (gallons) {

               var litre = gallons / 3.79;
                this.set('litres', litre);
            }
        },

        barrels: {
            get: function (get) {
                return get('litres') * 119.24;
            },

            set: function (barrels) {
        
                var litre = barrels / 119.24;
                this.set('litres', litre);
            }
        }
    }

});
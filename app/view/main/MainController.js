/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ConverterApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'ConverterApp.view.volumeConverterView.VolumeConverter',
        'ConverterApp.view.lengthConverterView.LengthConverter'
    ],

    onSwitchVolumeClick: function() {
        this.getView().getActiveTab().removeAll();
        this.getView().getActiveTab().add({xtype: 'volumeConvert'});
    },

    onSwitchLengthClick: function() {
        this.getView().getActiveTab().removeAll();
        this.getView().getActiveTab().add({xtype: 'convert'});
    }
    
});

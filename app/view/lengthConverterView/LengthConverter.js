Ext.define('ConverterApp.view.lengthConverterView.LengthConverter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.convert',
    title: 'Converter',

    width: 370,
    bodyPadding: 10,
    frame: true,
    resizeable: true,

    requires: [
        'ConverterApp.view.lengthConverterView.LengthConverterViewModel',
        'Ext.form.field.Number'
    ],

    viewModel: {
        type:  'length',
        data: {
            kms:0
        }
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Kilometers',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{kms}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Miles',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{miles}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Meters',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{meters}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Centimeters',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{cm}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'millimeters',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{mm}'
    }
    ]
});

Ext.define('ConverterApp.view.main.Converter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.convert',
    title: 'Converter',

    width: 370,
    bodyPadding: 10,
    frame: true,
    resizeable: true,

    requires: [
        'ConverterApp.view.main.ConverterViewModel',
        'Ext.form.field.Number'
    ],

    viewModel: {
        type:  'km',
        data: {
            miles:0
        }
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Miles',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{miles}'
    }, {
        xtype: 'numberfield',
        fieldLabel: 'Kilos',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        bind: '{kilos}'
    }
    ]
});


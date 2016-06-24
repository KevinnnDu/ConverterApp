Ext.define('ConverterApp.view.main.Converter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.convert',
    title: 'Converter',

    width: 370,
    bodyPadding: 10,

    requires: [
        'ConverterApp.view.main.ConverterViewModel',
        'Ext.form.field.Number',
        'Ext.form.field.Display'
    ],

    viewModel: {
        type:  'km',
        data: {
            miles:1
        }
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Miles',
        bind: '{miles}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Kilos',
        decimalPrecision: 2,
        bind: '{kilos}'
    }
    ]
});


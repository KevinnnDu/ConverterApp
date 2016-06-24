Ext.define('ConverterApp.view.lengthConverterView.LengthConverter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.convert',
    title: 'Converter',


    width: 370,
    bodyPadding: 40,
    frame: true,
    draggable: true,
    ui: 'lengthConverter',
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
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Kilometers',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "km_class",
        bind: '{kms}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Miles',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "mile_class",
        bind: '{miles}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Meters',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "meters_class",
        bind: '{meters}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Centimeters',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "cm_class",
        bind: '{cm}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Millimeters',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "mm_class",
        bind: '{mm}'
    }
    ]
});


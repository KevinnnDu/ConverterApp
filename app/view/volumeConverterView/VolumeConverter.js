Ext.define('ConverterApp.view.volumeConverterView.VolumeConverter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.volumeConvert',
    title: 'Volume Converter',


    width: 370,
    bodyPadding: 40,

    header: {
        items: [
            {
                xtype: 'button',
                text: 'Length Converter',
                cls: 'switch_btn',
                listeners: {
                    click: 'onSwitchLengthClick'
                }
            }]
    },
    
    frame: true,
    draggable: true,
    ui: 'volumeConverter',
    requires: [
        'ConverterApp.view.volumeConverterView.VolumeConverterViewModel',
        'Ext.form.field.Number'
    ],

    viewModel: {
        type:  'volume',
        data: {
            litres:0
        }
    },

    items: [{
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Litres',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "litre_class",
        bind: '{litres}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Millilitres',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "ml_class",
        bind: '{mls}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Gallon',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "gallon_class",
        bind: '{gallons}'
    }, {
        margin: "0, 0, 30, 0",
        xtype: 'numberfield',
        fieldLabel: 'Barrel',
        decimalPrecision: 2,
        minValue: 0,
        step: 1,
        cls: "barrel_class",
        bind: '{barrels}'
    }
    ]
});


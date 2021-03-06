/*
 * File: app/view/DateExamples.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CalendarPicker.view.DateExamples', {
    extend: 'Ext.Container',
    alias: 'widget.dateexamples',

    config: {
        itemId: 'dateexamples',
        style: 'background: white;',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Basic Example'
            },
            {
                xtype: 'fieldset',
                height: '2.6em',
                maxWidth: '15em',
                items: [
                    {
                        xtype: 'textfield',
                        listeners: {
                            tap: {
                                fn: function() {
                                      this.fireEvent('sel_date', this);
                                  },
                                element: 'element'
                            }
                        },
                        cls: 'sel-date',
                        itemId: 'sel_date',
                        styleHtmlCls: 'sel-date-html',
                        styleHtmlContent: true,
                        clearIcon: false,
                        inputCls: 'sel-date-label',
                        label: 'Date:',
                        labelWidth: '35%',
                        placeHolder: 'Select',
                        readOnly: true
                    }
                ]
            }
        ]
    }

});
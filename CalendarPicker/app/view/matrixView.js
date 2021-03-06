/*
 * File: app/view/matrixView.js
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

Ext.define('CalendarPicker.view.matrixView', {
    extend: 'Ext.Container',
    alias: 'widget.matrixView',

    config: {
        cls: 'matrix-view',
        itemId: 'matrixView',
        style: 'background-color: white;',
        ui: 'light',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'matrixViewBackBtn',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'segmentedbutton',
                        itemId: 'matrixViewSegBtn',
                        items: [
                            {
                                xtype: 'button',
                                pressed: true,
                                itemId: 'matrixViewYearBtn',
                                text: 'Year'
                            },
                            {
                                xtype: 'button',
                                itemId: 'matrixViewMonthBtn',
                                text: 'Month'
                            },
                            {
                                xtype: 'button',
                                itemId: 'matrixViewListBtn',
                                text: 'List'
                            },
                            {
                                xtype: 'button',
                                itemId: 'matrixViewDayBtn',
                                text: 'Day'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: '',
                        itemId: 'matrixViewLabel',
                        style: 'margin-left: 1em;'
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'yearView',
                margin: '1em',
                style: 'border: 1px solid blue;',
                layout: {
                    type: 'fit'
                }
            },
            {
                xtype: 'container',
                itemId: 'monthView',
                margin: '1em',
                style: 'border: 1px solid blue;',
                layout: {
                    type: 'fit'
                }
            },
            {
                xtype: 'container',
                html: 'More Later...',
                itemId: 'listView',
                style: 'border: 1px solid blue; background-color: white;',
                layout: {
                    type: 'fit'
                }
            },
            {
                xtype: 'container',
                itemId: 'dayView',
                maxWidth: '40em',
                style: 'background-color: white; border: 1px solid gray; margin: 1em;',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'container',
                        height: '10em',
                        style: 'border-bottom: 1px solid gray; margin: 0 1em 0 1em;',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                style: '  font-weight: normal;   color: gray;',
                                layout: {
                                    type: 'vbox'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        html: '21',
                                        itemId: 'dayViewBigDay',
                                        style: 'font-size: 5em;',
                                        layout: {
                                            type: 'fit'
                                        }
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        html: 'Saturday, September 21<br>2013',
                                        itemId: 'dayViewDayName',
                                        style: 'font-size: 1.5em; margin-top: 1em;',
                                        layout: {
                                            type: 'fit'
                                        }
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                itemId: 'dayViewMoCal',
                                width: '17em',
                                layout: {
                                    type: 'fit'
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        listeners: {
                            swipe: {
                                fn: function(e) {
                                      this.up('#dayView').fireEvent('dayViewSwipe', this.up('#dayView'), e);
                                  },
                                element: 'element'
                            }
                        },
                        flex: 1,
                        html: 'List detail for selected day...',
                        itemId: 'dayViewListDetail',
                        style: 'border: solid 1px gray; margin: 1em .5em 1em .5em; ',
                        styleHtmlCls: 'dayViewListDetail-html',
                        styleHtmlContent: true
                    }
                ]
            }
        ]
    }

});
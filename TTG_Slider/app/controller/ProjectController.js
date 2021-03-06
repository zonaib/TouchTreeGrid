/*
 * File: app/controller/ProjectController.js
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

Ext.define('TouchTreeGrid.controller.ProjectController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Projects'
        ],
        stores: [
            'ProjectsStore'
        ],
        views: [
            'Example2container',
            'Example2Bcontainer',
            'Example2Ccontainer'
        ],

        refs: {
            example2container: {
                autoCreate: true,
                selector: 'example2container',
                xtype: 'example2container'
            },
            example2Bcontainer: {
                autoCreate: true,
                selector: 'example2Bcontainer',
                xtype: 'example2Bcontainer'
            },
            example2Ccontainer: {
                autoCreate: true,
                selector: 'example2Ccontainer',
                xtype: 'example2Ccontainer'
            }
        },

        control: {
            "list#example2list": {
                disclose: 'onExample2ListDisclose',
                itemtaphold: 'onExample2ListItemTaphold'
            },
            "list#example2Blist": {
                disclose: 'onExample2BListDisclose'
            },
            "container#example2": {
                pullrefresh: 'onExample2ListPullrefresh'
            },
            "checkboxfield#myCheckMark": {
                check: 'onCheckboxfieldCheck'
            },
            "checkboxfield": {
                uncheck: 'onCheckboxfieldUncheck'
            }
        }
    },

    onExample2ListDisclose: function(list, record, target, index, e, eOpts) {
        //Ext.Msg.alert('You disclosed record: ' + record.get('task'));


        var swapcont = this.getExample2container();   
        if (swapcont)
        {
            var newcont = commonController.getGriddetailpanel(
            {
                title : 'Example 2 Detail',
                id : 'example2detail',
                layout: {type: 'fit'},
                itemId: 'griddetailpanel'
            }
            );

            var gridItemId = swapcont.down('touchtreegrid').getItemId();
            newcont.swapcont = swapcont;
            newcont.gridItemId = gridItemId;

            if (newcont)
            {
                var newLabel = newcont.down('#griddetaillabel');    
                newLabel.setHtml(record.get('task'));       

                var fldSet = newcont.down('#griddetailfieldset');
                var result = fldSet.setConfig({
                    items : [
                    {label: 'Task', xtype: 'textfield', readOnly: true, value: record.data.task}, 
                    {label: 'User', xtype: 'textfield', readOnly: true, value: record.data.user}, 
                    {label: 'Duration', xtype: 'numberfield', readOnly: true, value: record.data.duration}, 
                    {label: 'Done?', itemId: 'myCheckMark', xtype: 'checkboxfield', disabledCls: null, checked: record.data.done, thisRec: record}
                ]}); 

                swapcont.add(newcont);
                swapcont.setActiveItem(newcont);     
            }
        }
    },

    onExample2BListDisclose: function(list, record, target, index, e, eOpts) {
        //Ext.Msg.alert('You disclosed record: ' + record.get('task'));


        var swapcont = this.getExample2Bcontainer();   
        if (swapcont)
        {
            var newcont = commonController.getGriddetailpanel(
            {
                title : 'Example 2B Detail',
                id : 'example2Bdetail',
                layout: {type: 'fit'},
                itemId: 'griddetailpanel'
            }
            );

            var gridItemId = swapcont.down('touchtreegrid').getItemId();
            newcont.swapcont = swapcont;
            newcont.gridItemId = gridItemId;

            if (newcont)
            {
                var newLabel = newcont.down('#griddetaillabel');    
                newLabel.setHtml(record.get('task'));       

                var fldSet = newcont.down('#griddetailfieldset');
                var result = fldSet.setConfig({
                    items : [
                    {label: 'Task', xtype: 'textfield', readOnly: true, value: record.data.task}, 
                    {label: 'User', xtype: 'textfield', readOnly: true, value: record.data.user}, 
                    {label: 'Duration', xtype: 'numberfield', readOnly: true, value: record.data.duration}, 
                    {label: 'Done?', itemId: 'myCheckMark', xtype: 'checkboxfield', disabledCls: null, checked: record.data.done, thisRec: record}
                ]}); 

                swapcont.add(newcont);
                swapcont.setActiveItem(newcont);     
            }
        }
    },

    onExample2ListItemTaphold: function(dataview, index, target, record, e, eOpts) {
        // Example where we can treat long presses same as disclose event to improve on 
        // sensitivity issues with smaller icon.
        // Note:  long press (1 second) works on full item, but not actually on icon itself
        if (record.get('leaf')) {
            this.onExample2ListDiscloseOrHold(record, target, index);
        }
    },

    onExample2ListPullrefresh: function(container) {
        this.loadExample2Store(container);

    },

    onCheckboxfieldCheck: function(checkboxfield, e, eOpts) {
        // Update store with checked status
        var myRec = checkboxfield.config.thisRec;
        myRec.set('done', checkboxfield._checked);
    },

    onCheckboxfieldUncheck: function(checkboxfield, e, eOpts) {
        this.onCheckboxfieldCheck(checkboxfield, e, eOpts);
    },

    onExample2ListDiscloseOrHold: function(record, target, index) {
        //Ext.Msg.alert('You disclosed record: ' + record.get('task'));


        var swapcont = this.getExample2container();   
        if (swapcont)
        {
            var newcont = commonController.getGriddetailpanel(
            {
                title : 'Example 2 Detail',
                id : 'example2detail',
                layout: {type: 'fit'},
                itemId: 'griddetailpanel'
            }
            );

            var gridItemId = swapcont.down('touchtreegrid').getItemId();
            newcont.swapcont = swapcont;
            newcont.gridItemId = gridItemId;

            if (newcont)
            {
                var newLabel = newcont.down('#griddetaillabel');    
                newLabel.setHtml(record.get('task'));       

                var fldSet = newcont.down('#griddetailfieldset');
                var result = fldSet.setConfig({
                    items : [
                    {label: 'Task', xtype: 'textfield', readOnly: true, value: record.data.task}, 
                    {label: 'User', xtype: 'textfield', readOnly: true, value: record.data.user}, 
                    {label: 'Duration', xtype: 'numberfield', readOnly: true, value: record.data.duration}, 
                    {label: 'Done?', xtype: 'checkboxfield', disabledCls: null, checked: record.data.done}
                ]}); 

                swapcont.add(newcont);
                swapcont.setActiveItem(newcont);     
            }
        }
    },

    loadExample2Store: function(gridcont) {
        var me = this;

        var gridurl = 'data/treegrid.json';

        commonController.loadStore(me, gridcont, gridurl, 'Loading Project...');

    }

});
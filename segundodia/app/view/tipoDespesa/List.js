Ext.define('WSExt.view.tipoDespesa.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.tipoDespesaList',
    store: 'TipoDespesas',
    title : 'Lista dos tipos de despesa',
    //selModel: {mode: 'MULTI'},
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    tbar :[
        {
            text: 'Incluir',
            action: 'insert',
            iconCls: 'add',
            itemId: 'insert'
        }
        ,{
            text: 'Editar',
            action: 'edit',
            iconCls: 'edit',
            itemId: 'edit',
            disabled: true
        },
        {
            text: 'Excluir',
            action: 'destroy',
            iconCls: 'delete',
            itemId: 'delete',
            disabled: true
        }
        ,{
            text: 'Recarregar dados',
            action: 'refresh',
            iconCls: 'refresh',
            itemId: 'refresh'
        }
    ],
    
    columns: [
        Ext.create('Ext.grid.RowNumberer'),
        {header: 'ID',  dataIndex: 'id',  flex: 1},
        {header: 'Nome',  dataIndex: 'nome',  flex: 1}
    ],    
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'TipoDespesas',
        dock: 'bottom',
        displayInfo: true
    }],
    
    initComponent: function(){
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    },
    
    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }
   
});
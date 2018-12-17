function layer(store, mmbrId) {
    var rid = Math.floor(Math.random() * 999) + 1;
    var mapwin;

    if (!mapwin) {
        mapwin = new Ext.Window({
            id : '_window' + rid,
            name : '_window' + rid,
            layout : 'fit',
            title : '회원 상세 정보',
            closeAction : 'destroy',
            width : 1080,
            height : 768,
            align : "center",
            modal : true,
            items : [ {
                xtype : 'container',
                layout : {
                    type : 'hbox',
                    align : 'stretch',
                },
                items : [ {
                    xtype : 'panel',
                    id : 'members',
                    name : 'members',
                    bodyStyle : {
                        'background-color' : '#FFFFFF',
                        'border-color' : '#FFFFFF',
                    },
                    padding : '0 5',
                    flex : 0.9,
                    bbar : Ext.create('Ext.PagingToolbar', {
                        id : 'paging_',
                        name : 'paging_',
                        store : store,
                        emptyMsg : '조회된 데이터가 없습니다.'
                    }),
                }, {
                    xtype : 'container',
                    id : 'contents',
                    name : 'contents',
                    padding : '15',
                    flex : 2.1,
                    layout : {
                        type : 'vbox',
                        align : 'stretch',
                    }
                } ]
            } ]
        });
    }
    mmbrList(store);
    mmbrDetail(mmbrId);
    mapwin.show();
    store.on('load', function() {
        mmbrList(this);
    });
}

function mmbrList(store) {
    var items = [];
    var members = Ext.getCmp('members');

    store.each(function(record, i) {
        var data = record.raw;

        var item = {
            xtype : 'button',
            text : data.mmbrId,
            margin : "3 0 5 0",
            height : 26.5,
            width : "100%",
            listeners : {
                click : function() {
                    mmbrDetail(data.mmbrId);
                }
            }
        }
        items.push(item);
    });
    members.removeAll();
    members.add(items);
}

function mmbrDetail(mmbrId) {
    var contents = Ext.getCmp('contents');
    contents.removeAll();

    Ext.Ajax
        .request({
            url : '/wikiki/selectMemberData.do',
            method : "GET",
            params : {
                mmbrId : mmbrId,
            },
            success : function(response) {
                var items = [];

                if (response.responseText.length == 0) {
                    var item = {
                        xtype : 'container',
                        id : 'not-found-info',
                        layout : {
                            type : 'vbox',
                            align : 'center'
                        },
                        items : {
                            xtype : 'panel',
                            items : {
                                xtype : 'displayfield',
                                value : '<i class="fa fa-exclamation-triangle" style="color:#F3777C;"></i> 등록 된 아동정보가 없습니다.'
                            }
                        }
                    }
                    items.push(item);
                } else {
                    var rtn = Ext.decode(response.responseText);
                    Ext.each(rtn.children, function(child, i) {
                        var item = {
                            xtype : 'container',
                            layout : {
                                type : 'hbox',
                                align : 'stretch'
                            },
                            cls : 'child-info-container',
                            height : 240,
                            items : [
                                {
                                    // Child`s Profile Image(Thumbnail)
                                    xtype : 'panel',
                                    id : 'profileImage' + child.chldNmbr,
                                    padding : 10,
                                    width : 240,
                                    items : [ {
                                        xtype : 'image',
                                        cls : 'child-image',
                                        src : child.changePhoto
                                    } ]
                                },
                                {
                                    // Child`s Information Area
                                    xtype : 'panel',
                                    id : 'profileInfo' + child.chldNmbr,
                                    flex : 2,
                                    layout : {
                                        type : 'vbox',
                                        align : 'stretch',
                                    },
                                    cls : 'child-info',
                                    items : [
                                        {
                                            // Child`s Name, Gender, Age,
                                            xtype : 'panel',
                                            flex : 1,
                                            layout : {
                                                type : 'hbox',
                                                align : 'stretch',
                                            },
                                            items : [
                                                {
                                                    xtype : 'displayfield',
                                                    value : "<i class=\"fa fa-id-card\"></i>"
                                                        + child.nckn + "</div>",
                                                    flex : 1
                                                },
                                                {
                                                    xtype : 'displayfield',
                                                    value : "<i class=\"fa fa-venus-mars\"></i>"
                                                        + child.gndr + "</div>",
                                                    flex : 1
                                                },
                                                {
                                                    xtype : 'displayfield',
                                                    value : "<i class=\"fa fa-child\"></i>"
                                                        + child.age + "</div>",
                                                    flex : 1
                                                } ]
                                        },
                                        {
                                            // Child`s rgstDate, rgstId
                                            xtype : 'panel',
                                            flex : 1,
                                            layout : {
                                                type : 'hbox',
                                                align : 'stretch',
                                            },
                                            items : [
                                                {
                                                    xtype : 'displayfield',
                                                    value : "<i class=\"fa fa-calendar\"></i>"
                                                        + child.rgstDate + "</div>",
                                                    flex : 1
                                                },
                                                {
                                                    xtype : 'disp',
                                                    value : "<i class=\"fa fa-desktop\"></i>"
                                                        + child.rgstId + "</div>",
                                                    flex : 1
                                                } ]
                                        }, {
                                            // Device`s Information Area
                                            xtype : 'panel',
                                            flex : 2,
                                            bodyStyle : {
                                                'background-color' : 'green',
                                            },
                                            layout : {
                                                type : 'hbox',
                                                align : 'stretch',
                                            },
                                            items : [ {
                                                // Device 1
                                                xtype : 'panel',
                                                layout : 'fit',
                                                flex : 1,
                                                items : {
                                                    xtype : 'image',
                                                    src : '/resources/img/Wikiki_Monkey.png'
                                                }
                                            }, {
                                                // Device 2
                                                xtype : 'panel',
                                                layout : 'fit',
                                                flex : 1,
                                                items : {
                                                    xtype : 'image',
                                                    src : '/resources/img/Wikiki_Penguin.png'
                                                }
                                            }, {
                                                // Device 3
                                                xtype : 'panel',
                                                layout : 'fit',
                                                flex : 1,
                                                items : {
                                                    xtype : 'image',
                                                    src : '/resources/img/Wikiki_Rabbit.png'
                                                }
                                            }, {
                                                // Device 4
                                                xtype : 'panel',
                                                layout : 'fit',
                                                flex : 1,
                                                items : {
                                                    xtype : 'image',
                                                    src : '/resources/img/Wikiki_Bear.png'
                                                }
                                            } ]
                                        } ]
                                }, ]
                        }
                        items.push(item);
                    });
                }
                contents.add(items);
            }
        })
}
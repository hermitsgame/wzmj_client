cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        
        var fnTestServerOn = function() {
            cc.vv.net.test(function(ret) {
               if (ret) {
                    cc.vv.wc.hide();
                    cc.director.loadScene('hall');                
               }
               else {
                   setTimeout(fnTestServerOn, 3000);
               }
            });
        }
        
        var fn = function(data) {
            self.node.off('disconnect', fn);
            cc.vv.wc.show(1);
            fnTestServerOn();
        };

        this.node.on('disconnect', fn);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
/*
        if(this._reconnect.active){
            var t = Math.floor(Date.now() / 1000) % 4;
            this._lblTip.string = "与服务器断开连接，正在尝试重连";
            for(var i = 0; i < t; ++ i){
                this._lblTip.string += '.';
            }
        }
*/
    },
});

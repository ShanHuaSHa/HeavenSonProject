// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    init(son){
        this.game = cc.find("game").getComponent("game");//game节点的game脚本
        this.userData = this.game.userData;
        this.chooseSonBtnCtr = cc.find("Canvas/弹窗/选择天道之子弹窗").getComponent("2_chooseSonBtnCtr");

        this.heavenSonPNode= this.node.getChildByName("立绘");
        this.nameNode =this.node.getChildByName("名字");
        this.chooseNode = this.node.getChildByName("勾选框");

        this.heavenSon = son;

        this.heavenSonPNode.getComponent(cc.Sprite).spriteFrame = son.heavenSonDemo.staticImage;//...
        this.nameNode.getComponent(cc.Label).string = son.name;
        this.chooseNode.active = false;

        this.node.on('touchstart', this.touch, this);//监听点击
    },

    cancelChoose(){
        this.chooseNode.active = false;
    },

    touch(){
        this.chooseNode.active = true;
        if(this.chooseSonBtnCtr.choosenSonNodeS!=null){
            this.chooseSonBtnCtr.choosenSonNodeS.cancelChoose();//上一个取消选择
        }
        this.chooseSonBtnCtr.choosenSonNodeS =this;//选择这一个
    }

    // update (dt) {},
});

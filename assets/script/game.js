

cc.Class({
    extends: cc.Component,

    properties: {
       userDataNode : cc.Node,
       HeavenSonDatabaseNode : cc.Node,
       TreasureDatabaseNode : cc.Node,
       MonsterDatabaseNode : cc.Node,

    },

    onLoad(){
        this.userData = this.userDataNode.getComponent("userData");
        this.HeavenSonDB = this.HeavenSonDatabaseNode.getComponent("HeavenSonDB");
        this.TreasureDB = this.TreasureDatabaseNode.getComponent("TreasureDB");
        this.MonsterDB = this.MonsterDatabaseNode.getComponent("MonsterDB");

        cc.log("into game onload");//
        // 常驻节点
        cc.game.addPersistRootNode(this.node);
    },
    // 加载切换场景 
    switchScene(sceneName){
        cc.director.loadScene(sceneName);//可能需要回调函数
    },

    start () {

    },
    // 根据天道之子demo的id获得对应的天道之子demo对象 id应当是在抽卡函数中随机生成的数。
    getHeavenSonDemoByID(demoID){
        var returnChildDemo = null;
        this.HeavenSonDB.sons.forEach(element => {
            if(element.heavenSonDemoId==demoID){
                returnChildDemo = element;
                return;
            }
        });
        return returnChildDemo;
    },

     // 根据灵宝demo的id获得对应的灵宝demo对象 id应当是在战斗成功之后随机生成的数。
     getTreasureByID(demoID){
        var returnTreasureDemo = null;
        this.TreasureDB.treasures.forEach(element => {
            if(element.treasurDemoId==demoID){
                returnTreasureDemo = element;
                return;
            }
        });
        return returnTreasureDemo;
    },




});

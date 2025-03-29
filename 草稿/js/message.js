// 定义 Message 模块
define(function () {
    console.log("Message 模块加载完成");

    // Message 类
    function Message() {
        this.showMessage = function () {
            console.log("调用 showMessage 方法，显示消息");

            // 显示消息
            document.getElementById("messageArea").innerText = "Hello, RequireJS!";
        };
    }

    // 返回 Message 类
    return Message;
});
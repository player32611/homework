// 配置模块路径
require.config({
    baseUrl: ".", // 设置基础路径为当前文件夹（js 文件夹）
    paths: {
        "jquery": "jquery.min",  // 实际路径为 js/jquery.min.js
        "message": "message" // 自定义模块路径
    }
});

// 初始化页面逻辑
require(["jquery", "message"], function ($, Message) {
    console.log("所有模块加载完成，开始初始化页面逻辑");

    // 当页面加载完成后，绑定按钮点击事件
    $(document).ready(function () {
        console.log("页面加载完成，绑定按钮点击事件");

        $("#loadMessage").click(function () {
            console.log("按钮被点击，创建 Message 实例并显示消息");

            // 创建 Message 实例并显示消息
            var message = new Message();
            message.showMessage();
        });
    });
});
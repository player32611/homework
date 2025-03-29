module.exports = function (source) {
    // 获取 Loader 的配置选项
    const options = this.getOptions();

    // 获取需要替换的字段和替换后的值
    const { field, replacement } = options;

    // 替换字段
    const result = source.replace(new RegExp(field, 'g'), replacement);

    // 返回处理后的结果
    return result;
};
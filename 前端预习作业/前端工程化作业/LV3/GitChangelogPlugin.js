// GitChangelogPlugin.js
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitChangelogPlugin {
    constructor(options) {
        this.options = options || {};
    }

    apply(compiler) {
        compiler.hooks.done.tapAsync('GitChangelogPlugin', (stats, callback) => {
            // 获取 Git 日志信息
            const gitLogCommand = 'git log --pretty=format:"%h - %an, %ar : %s" -10';
            exec(gitLogCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error executing git log:', error);
                    return callback();
                }

                if (stderr) {
                    console.error('Git log stderr:', stderr);
                    return callback();
                }

                // 构建 README 文件内容
                const changelog = `## Changelog\n\n${stdout.trim()}`;
                const readmeContent = `# Project README\n\n${changelog}`;

                // 写入 README 文件
                const readmePath = path.resolve(compiler.options.output.path, 'README.md');
                fs.writeFile(readmePath, readmeContent, (err) => {
                    if (err) {
                        console.error('Failed to write README.md:', err);
                    } else {
                        console.log('README.md with changelog generated at:', readmePath);
                    }
                    callback();
                });
            });
        });
    }
}

module.exports = GitChangelogPlugin;
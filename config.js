var config = {
    list_post_count: 10,                //文章列表显示数量
    list_guestbook_count: 10,           //留言列表显示数量
    list_archives_count: 5,            //文章归档列表显示数量
    max_comment_per_day: 100,           //每个访问者一天可以发的评论数
    max_guestbook_per_day: 100,         //每个访问者一天可以发的留言数
    max_open_per_day: 1000,             //每个访问者一天可以打开网站的次数，主要用于防止循环攻击
    db: 'mongodb://127.0.0.1/test',
    session_secret: '_secret', // 务必修改
    cache_key: {
        site_option: 'site:option'
    },
    //用于初始化管理员数据，init data
    administrator: {
        nick_name: '冷夜流星',            //管理员的昵称
        account: 'admin',               //不支持动态修改
        password: 'admin',              //不支持动态修改
        email: 'bs32g1038@163.com',
        location: '广东',
        qq: '845177026',
        img_url: '',
        motto: 'yourmotoo你的个人格言',
        github: 'https://github.com/bs32g1038/node-blog'
    },
    about: {
        key: 'about', //关键词用于检索数据
        title: '关于我',
        content: '内容为空'
    },
    redis: {
        host: '127.0.0.1',
        port: 6379,
        db: 0,
        cache_expired: "300", //秒
    },
    // 7牛的access信息，用于文件上传,不填写，则默认本地存储
    qn_access: {
        accessKey: 'your access key',
        secretKey: 'your secret key',
        bucket: 'your bucket name',
        origin: 'http://your qiniu domain',
        // if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/`
        //uploadURL: 'http://xxxxxxxx',
    }

}
module.exports = config;
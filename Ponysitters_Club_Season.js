// version v0.0.1
// create by ruicky
// detail url: https://github.com/ruicky/jd_sign_bot
/*
　BBC2历史电视电影系列《空王冠》（The Hollow Crown）4部经典莎士比亚作品的新演绎，分别是：《理查二世》（Richard II）、《亨利四世：第一部》（Henry IV, Part 1）、《亨利四世：第二部》（Henry IV, Part 2）和《亨利五 世》（Henry V）。在2012年伦敦奥运会期间，为了向全世界展现英国文化，这四部电视电影将作为伦敦文化奥运的重点推荐剧目向全世界推行，在2012年6月播出。　　《亨利四世》是该系列的第二部。夺取理查二世权势的亨利四世，将由奥斯卡影帝杰瑞米·艾恩斯 Jeremy Irons饰演，将由《丑闻纪事》的导演理查德·艾尔掌镜，在《复仇者联盟》中雷神弟弟“洛基”汤姆·希德勒斯顿 Tom Hiddleston将饰演Prince Hal，西蒙·拉塞尔·比尔 Simon Russell Beale饰演约翰·福斯塔夫爵士，艾伦·阿姆斯特朗 Alun Armstrong饰演诺森伯兰伯爵。　　《亨利四世》展现了英国中世纪时期迷人的历史，并将演绎出近年来最野心勃勃的一部莎士比亚改编作品。《亨利四世》是莎士比亚历史剧中最成功、最受欢迎的一部，被看成莎士比亚历史剧的代表作。这部作品的主要内容是反映亨利四世和他的王子们与反叛的诸侯贵族进行殊死斗争的过程。莎士比亚突破传统历史剧多条线索交织发展的网状结构，采用了两条线索平行发展的结构——以亨利四世为代表的宫廷生活线索和以福斯塔夫为代表的市井生活线索。
《岁月楼情》，香港电视网络所制作的时装论理电视剧，由黄日华、关宝慧、夏雨、鲍起静、唐宁、林利、曾伟权及姜皓文领衔主演；此剧暂定为2013香港电视网络开台重头台庆剧。汇聚视帝影后级实力派演员，演活一个以公共屋邨作为背景，横跨近30年的故事。见证小人物凭著坚韧、拼搏、永不放弃的狮子山下精神，历尽大雨狂风，建立一个安稳的家。同一天空下，广厦万户人家，只要在健康快乐的安稳的家里出发，每个人都会踏出充实而灿烂的人生，而在时间的洪流里，留下每个人的足迹，见证百样人的故事。
　The tempo of modern civilization has been much quickened in the last twenty years。 While witnessing the dramatic changes in the better-off society， people begin to reconsider the question of "survival"。 "Survival" in the old sense does not bother us anymore。 Instead， we are more concerned about how to "survive" in the human world full of petition。
　　Competition always carries abreast challenges and opportunities to everyone involved。 It might appear in an entrance exam， in a regular class， or in a small public speech。 Those who fail to detect its real nature-whether an opportunity or a challenge a petition really is- will lose something more or less conducive to our growth。 Of course， if we take the petition as an opportunity， we will favor it intentionally because they can help us outstand from the average; they will make us bee the focus of public attention; they will grant us more chances and rights to succeed。 As a matter of fact， opportunities are supposed to be more perceptible and weling than challenges。 The truth is， however， we will lose more opportunities when we choose to take the "opportunity" fork at the crossroads。 The other fork， ignored by us and defined as "fearful challenges"， offers much more chances for the walker in petition。
　　We have such an inclination in life to overestimate ourselves and hold a thoughtless attitude towards the negative outlook of things。
　　We believe in the old saying， "Opportunity knocks but just once，" so we always wele it and devote all our spirit and efforts to it。 The most devout believer of this saying are the graduates。 Why? There are quite a number of them who pay full attention to positions in big cities and are willing to flood into developed areas under any circumstances， even though there will be too much uncertainty for their choices。 Innumerable cases go straight to the same miserable end: God seems to refuse to help too many of His worshipers。
　　In conclusion， to define the quuality of petition seems to be far from valuable sense， for no matter what a petition is， an opportunity or a challenge， it will create nutritious elements for our growth。
　　So take a positive look at everything around。 Keep our face to the sunshine， and we will not see the shadows。
*/
const $ = new Env();
let message = '', subTitle = '', option = {};
const exec = require("child_process").execSync;
const fs = require("fs");
const download = require("download");


const JD_COOKIE = process.env.JD_COOKIE; //格式格式格式三遍
const SyncUrl = process.env.SYNCURL; //
const Efork = process.env.EFORK; //
const SCKEY = process.env.SCKEY; //SEVER-酱油
const BARK_PUSH = process.env.BARK_PUSH; //
const PUSH_KEY = process.env.PUSH_KEY; //
const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN; //TG通知比较好用
const TG_USER_ID = process.env.TG_USER_ID; //
 
//个别参数 懂的自己加
const JOY_FEED_COUNT = process.env.JOY_FEED_COUNT; //宠汪汪🐕喂食
const JXNCTOKENS = process.env.JXNCTOKENS; //京戏农场种子











let CookieJDs = [];
let shareCodes=[];
async function downFile() {
   
    await download(SyncUrl, "./",{filename:'temp.js'});
}

async function changeFiele(content, cookie) {

     let newContent = content.replace("require('./jdCookie.js')", JSON.stringify({ CookieJD: cookie }));
     
     newContent = newContent.replace(`require("./jdCookie.js")`, JSON.stringify({ CookieJD: cookie }));
     
     newContent = newContent.replace(`require('./jdCookie.js')`, JSON.stringify({ CookieJD: cookie }));
          
     newContent = newContent.replace(Efork,'Efork');
    
    newContent = newContent.replace(/require\('.\/(\w+)ShareCodes.js\'\)/g, JSON.stringify(shareCodes)); 
 
    newContent =newContent.replace(/var Key = ''/, `var Key = '${cookie}'`);
 
   
     
      await fs.writeFileSync( './temp.js', newContent, 'utf8')
    
}

async function executeOneByOne() {
    const content = await fs.readFileSync("./temp.js", "utf8");
    for (var i = 0; i < CookieJDs.length; i++) {
        console.log(`正在执行第${i + 1}个账号任务`);
        changeFiele(content, CookieJDs[i]);
        $.UserName = decodeURIComponent(CookieJDs[i].match(/pt_pin=(.+?);/) && CookieJDs[i].match(/pt_pin=(.+?);/)[1])
        $.index = i + 1;
        $.nickName = '';
        message = ''
       console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
       await exec("node temp.js >> result.txt");
     
       const path = "./result.txt";
       let rcontent = "";
       if (fs.existsSync(path)) {
          rcontent = fs.readFileSync(path, "utf8");
       }
 
         if (SyncUrl.indexOf('JD_DailyBonus')>0) {
            const notify = $.isNode() ?require('./sendNotify') : '';
             message=rcontent.substring(rcontent.indexOf('【签到概览】'),rcontent.indexOf('签到用时'))
             console.log(message);

          if ($.isNode()) {
              subTitle = `【京东账号${$.index}】${$.UserName}`;
              await notify.sendNotify(`京东签到通知`, `${subTitle}\n${message}`);
          
           }
          console.log('发送结果完毕');
          
          
  } else {
         
       console.log(rcontent);
     }
    }
}

async function start() {
    if (!JD_COOKIE) {
        
        return;
    }
   if (!SyncUrl) {
     
        return;
    }
    if (!Efork) {
     
        return;
    }
  
 //console.log('SyncUrl'+SyncUrl)
   
 
  
     
    CookieJDs = JD_COOKIE.split("&");
    console.log(`当前共${CookieJDs.length}个账号需要执行任务`);
    
    await downFile();
  
    await executeOneByOne();
  
     

   
    console.log("全部执行完毕");

 
}

start();
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

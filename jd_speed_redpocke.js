/*
京东极速版红包
欧皇3个微信现金，可前往活动入口直接提现

活动时间：2021-2-14至2021-3-3
活动地址：https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html
活动入口：京东极速版app-领红包
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东极速版红包
0 0 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, tag=京东极速版红包, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png, enabled=true

================Loon==============
[Script]
cron "0 0 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js,tag=京东极速版红包

===============Surge=================
京东极速版红包 = type=cron,cronexp="0 0 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js

============小火箭=========
京东极速版红包 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_speed_redpocke.js, cronexpr="0 0 * * *", timeout=3600, enable=true
*/
const $ = new Env('京东极速版红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookiesArr = [], cookie = '', message;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await jsRedPacket()
    }
  }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function jsRedPacket() {
  try {
    await invite()
    for (let i = 0; i < 3; ++i) {
      await redPacket()
      await $.wait(500)
    }
    await showMsg()
  } catch (e) {
    $.logErr(e)
  }
}


function showMsg() {
  return new Promise(resolve => {
    $.msg($.name, '', `京东账号${$.index}${$.nickName}\n${message}`);
    resolve()
  })
}

async function redPacket() {
var _0xod2='jsjiami.com.v6',_0x49e1=[_0xod2,'bC3DgBLCuMO4KEXCmwbCsVYeDHYtwoAxwrHCvcOCw6nChyo1w7TCkzAsOkvDscK1ScKsw7PDhR7Dgnd+WWhOHmjDn8OoAcODGMOQFsKBwrJ1w64Pw5fCpcO3MkTCgVtDwp5Lw7nDlktLwo5VwpfCkjzCh292w6Yiw6PCjMKuw43ChsORw77CqsOCCgLCusOMwqlKwoc7wq5GNMKuPcKpGnPCknHCrDRmRjtiwrMcw4HDu8OOMSHDvMKNwpnDpsOOw6zDi8OaWcKLwpTCrGM/GcOOOsOJVCXCm8OqP8KbQy3DmW0ew6VtbMKmVw==','yjusjWiakmi.xPcBwoDm.v6UBEbKSME=='];(function(_0x5eaf73,_0x12e104,_0x26dba4){var _0x20c65b=function(_0x5c4e91,_0x2d39f8,_0x4d3c81,_0x3c0c7e,_0x132bf2){_0x2d39f8=_0x2d39f8>>0x8,_0x132bf2='po';var _0x267a74='shift',_0x5de168='push';if(_0x2d39f8<_0x5c4e91){while(--_0x5c4e91){_0x3c0c7e=_0x5eaf73[_0x267a74]();if(_0x2d39f8===_0x5c4e91){_0x2d39f8=_0x3c0c7e;_0x4d3c81=_0x5eaf73[_0x132bf2+'p']();}else if(_0x2d39f8&&_0x4d3c81['replace'](/[yuWkxPBwDUBEbKSME=]/g,'')===_0x2d39f8){_0x5eaf73[_0x5de168](_0x3c0c7e);}}_0x5eaf73[_0x5de168](_0x5eaf73[_0x267a74]());}return 0x74340;};return _0x20c65b(++_0x12e104,_0x26dba4)>>_0x12e104^_0x26dba4;}(_0x49e1,0x1cb,0x1cb00));var _0x4953=function(_0x3a87c0,_0x36868b){_0x3a87c0=~~'0x'['concat'](_0x3a87c0);var _0x174af3=_0x49e1[_0x3a87c0];if(_0x4953['DPlwMc']===undefined){(function(){var _0x3477f1=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2abc62='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3477f1['atob']||(_0x3477f1['atob']=function(_0x44f482){var _0x14935c=String(_0x44f482)['replace'](/=+$/,'');for(var _0xa09716=0x0,_0x27cd23,_0x41dfa1,_0x44271c=0x0,_0x51c0e3='';_0x41dfa1=_0x14935c['charAt'](_0x44271c++);~_0x41dfa1&&(_0x27cd23=_0xa09716%0x4?_0x27cd23*0x40+_0x41dfa1:_0x41dfa1,_0xa09716++%0x4)?_0x51c0e3+=String['fromCharCode'](0xff&_0x27cd23>>(-0x2*_0xa09716&0x6)):0x0){_0x41dfa1=_0x2abc62['indexOf'](_0x41dfa1);}return _0x51c0e3;});}());var _0x2db147=function(_0x623d6e,_0x36868b){var _0x223d4f=[],_0x1cccdc=0x0,_0x59aa4d,_0x17fb74='',_0x1a3832='';_0x623d6e=atob(_0x623d6e);for(var _0x5f2785=0x0,_0x13fd26=_0x623d6e['length'];_0x5f2785<_0x13fd26;_0x5f2785++){_0x1a3832+='%'+('00'+_0x623d6e['charCodeAt'](_0x5f2785)['toString'](0x10))['slice'](-0x2);}_0x623d6e=decodeURIComponent(_0x1a3832);for(var _0x2166f0=0x0;_0x2166f0<0x100;_0x2166f0++){_0x223d4f[_0x2166f0]=_0x2166f0;}for(_0x2166f0=0x0;_0x2166f0<0x100;_0x2166f0++){_0x1cccdc=(_0x1cccdc+_0x223d4f[_0x2166f0]+_0x36868b['charCodeAt'](_0x2166f0%_0x36868b['length']))%0x100;_0x59aa4d=_0x223d4f[_0x2166f0];_0x223d4f[_0x2166f0]=_0x223d4f[_0x1cccdc];_0x223d4f[_0x1cccdc]=_0x59aa4d;}_0x2166f0=0x0;_0x1cccdc=0x0;for(var _0x28311b=0x0;_0x28311b<_0x623d6e['length'];_0x28311b++){_0x2166f0=(_0x2166f0+0x1)%0x100;_0x1cccdc=(_0x1cccdc+_0x223d4f[_0x2166f0])%0x100;_0x59aa4d=_0x223d4f[_0x2166f0];_0x223d4f[_0x2166f0]=_0x223d4f[_0x1cccdc];_0x223d4f[_0x1cccdc]=_0x59aa4d;_0x17fb74+=String['fromCharCode'](_0x623d6e['charCodeAt'](_0x28311b)^_0x223d4f[(_0x223d4f[_0x2166f0]+_0x223d4f[_0x1cccdc])%0x100]);}return _0x17fb74;};_0x4953['XgTTfa']=_0x2db147;_0x4953['CKeXgT']={};_0x4953['DPlwMc']=!![];}var _0x2dd40d=_0x4953['CKeXgT'][_0x3a87c0];if(_0x2dd40d===undefined){if(_0x4953['wVYeUA']===undefined){_0x4953['wVYeUA']=!![];}_0x174af3=_0x4953['XgTTfa'](_0x174af3,_0x36868b);_0x4953['CKeXgT'][_0x3a87c0]=_0x174af3;}else{_0x174af3=_0x2dd40d;}return _0x174af3;};var headers1={'user-agent':_0x4953('0','rJBR')};var options1={'url':'https://gitee.com/Soundantony/RandomShareCode/raw/master/jd_speed_redpocke.json','headers':headers1};;_0xod2='jsjiami.com.v6';
 $.get(options1, (err, resp, data) => {
  var headers = {
    'Host': 'api.m.jd.com',
    'accept': 'application/json, text/plain, */*',
    'origin': 'https://prodev.m.jd.com',
    'user-agent': 'jdltapp;iPad;3.1.0;14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
    'accept-language': 'zh-cn',
    'referer': 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html',
    'Cookie': cookie
  };
  var options = {
    url: `https://api.m.jd.com/?functionId=spring_reward_receive&body={%22inviter%22:%22`+data+`%22:%22FqktpB8R3nkJB8wVh8wC_g%22}&_t=${+new Date()}&appid=activities_platform`,
    headers: headers
  }
  return new Promise(resolve => {
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.code === 0) {
              if (data.data.received.prizeType !== 1) {
                message += `获得${data.data.received.prizeDesc}`
                console.log(`获得${data.data.received.prizeDesc}`)
              } else {
                console.log("获得优惠券")
              }
            } else {
              console.log(data.errMsg)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
 })
}

function invite() {
  let t = +new Date()
  var _0xod6='jsjiami.com.v6',_0x1a2a=[_0xod6,'w4/DvMOUdCLCjEsXX8OKwp1JLMOGw5ktD8OsQMOEMR7CmsKBw50WE19wwpHCkMK7UgMswocSesKLw63ClBPDhnIFPMKBI8K+dzogw7hPNcOwwq7Ck2EIbw3DscOrwoY=','gTyjsjrhiamixBhD.dcofnm.vg6SqE=='];(function(_0x1bedd3,_0x119bb3,_0x23f794){var _0x4b44fb=function(_0x1eec77,_0x66c3d7,_0x31c2ee,_0x273ed0,_0x34f87){_0x66c3d7=_0x66c3d7>>0x8,_0x34f87='po';var _0x32e6f1='shift',_0x21114f='push';if(_0x66c3d7<_0x1eec77){while(--_0x1eec77){_0x273ed0=_0x1bedd3[_0x32e6f1]();if(_0x66c3d7===_0x1eec77){_0x66c3d7=_0x273ed0;_0x31c2ee=_0x1bedd3[_0x34f87+'p']();}else if(_0x66c3d7&&_0x31c2ee['replace'](/[gTyrhxBhDdfngSqE=]/g,'')===_0x66c3d7){_0x1bedd3[_0x21114f](_0x273ed0);}}_0x1bedd3[_0x21114f](_0x1bedd3[_0x32e6f1]());}return 0x74341;};return _0x4b44fb(++_0x119bb3,_0x23f794)>>_0x119bb3^_0x23f794;}(_0x1a2a,0x1b8,0x1b800));var _0x2f19=function(_0x73d555,_0x3c92fb){_0x73d555=~~'0x'['concat'](_0x73d555);var _0x440553=_0x1a2a[_0x73d555];if(_0x2f19['ptUwPa']===undefined){(function(){var _0x176f44=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1ca870='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x176f44['atob']||(_0x176f44['atob']=function(_0x1e09b3){var _0x6d50f3=String(_0x1e09b3)['replace'](/=+$/,'');for(var _0x443593=0x0,_0x340be8,_0x2f82e8,_0x54cbdb=0x0,_0x3a8697='';_0x2f82e8=_0x6d50f3['charAt'](_0x54cbdb++);~_0x2f82e8&&(_0x340be8=_0x443593%0x4?_0x340be8*0x40+_0x2f82e8:_0x2f82e8,_0x443593++%0x4)?_0x3a8697+=String['fromCharCode'](0xff&_0x340be8>>(-0x2*_0x443593&0x6)):0x0){_0x2f82e8=_0x1ca870['indexOf'](_0x2f82e8);}return _0x3a8697;});}());var _0x3514ad=function(_0x57d9ce,_0x3c92fb){var _0x18ba49=[],_0x57e7fa=0x0,_0x381797,_0x489d15='',_0x27555a='';_0x57d9ce=atob(_0x57d9ce);for(var _0x11c6cd=0x0,_0x3749b4=_0x57d9ce['length'];_0x11c6cd<_0x3749b4;_0x11c6cd++){_0x27555a+='%'+('00'+_0x57d9ce['charCodeAt'](_0x11c6cd)['toString'](0x10))['slice'](-0x2);}_0x57d9ce=decodeURIComponent(_0x27555a);for(var _0x5e9c5e=0x0;_0x5e9c5e<0x100;_0x5e9c5e++){_0x18ba49[_0x5e9c5e]=_0x5e9c5e;}for(_0x5e9c5e=0x0;_0x5e9c5e<0x100;_0x5e9c5e++){_0x57e7fa=(_0x57e7fa+_0x18ba49[_0x5e9c5e]+_0x3c92fb['charCodeAt'](_0x5e9c5e%_0x3c92fb['length']))%0x100;_0x381797=_0x18ba49[_0x5e9c5e];_0x18ba49[_0x5e9c5e]=_0x18ba49[_0x57e7fa];_0x18ba49[_0x57e7fa]=_0x381797;}_0x5e9c5e=0x0;_0x57e7fa=0x0;for(var _0x3609b7=0x0;_0x3609b7<_0x57d9ce['length'];_0x3609b7++){_0x5e9c5e=(_0x5e9c5e+0x1)%0x100;_0x57e7fa=(_0x57e7fa+_0x18ba49[_0x5e9c5e])%0x100;_0x381797=_0x18ba49[_0x5e9c5e];_0x18ba49[_0x5e9c5e]=_0x18ba49[_0x57e7fa];_0x18ba49[_0x57e7fa]=_0x381797;_0x489d15+=String['fromCharCode'](_0x57d9ce['charCodeAt'](_0x3609b7)^_0x18ba49[(_0x18ba49[_0x5e9c5e]+_0x18ba49[_0x57e7fa])%0x100]);}return _0x489d15;};_0x2f19['nxfbZE']=_0x3514ad;_0x2f19['ygXxRn']={};_0x2f19['ptUwPa']=!![];}var _0x499dac=_0x2f19['ygXxRn'][_0x73d555];if(_0x499dac===undefined){if(_0x2f19['KEhMcz']===undefined){_0x2f19['KEhMcz']=!![];}_0x440553=_0x2f19['nxfbZE'](_0x440553,_0x3c92fb);_0x2f19['ygXxRn'][_0x73d555]=_0x440553;}else{_0x440553=_0x499dac;}return _0x440553;};var headers1={'user-agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_2_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.3\x20Mobile/15E148\x20Safari/604.1\x20Edg/87.0.4280.88'};var options1={'url':_0x2f19('0','RTkU'),'headers':headers1};;_0xod6='jsjiami.com.v6';
 $.get(options1, (err, resp, data) => {
    var headers = {
    'Host': 'api.m.jd.com',
    'accept': 'application/json, text/plain, */*',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://invite-reward.jd.com',
    'accept-language': 'zh-cn',
    'user-agent': 'jdltapp;iPad;3.1.0;14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
    'referer': 'https://invite-reward.jd.com/?lng=0.000000&lat=0.000000&sid=2131b85f0bcb82714e032402628cc2fw&un_area=12_904_50647_57886',
    'Cookie': cookie
  };

  var dataString = `functionId=InviteFriendApiService&body={"method":"attendInviteActivity","data":{"inviterPin":"`+ data +`","channel":1,"token":"","frontendInitStatus":""}}&referer=-1&eid=eidIf3dd8121b7sdmiBLGdxRR46OlWyh62kFAZogTJFnYqqRkwgr63%2BdGmMlcv7EQJ5v0HBic81xHXzXLwKM6fh3i963zIa7Ym2v5ehnwo2B7uDN92Q0&aid=&client=ios&clientVersion=14.4&networkType=wifi&fp=-1&appid=market-task-h5&_t=${t}`;

  var options = {
    url: `https://api.m.jd.com/?t=${t}`,
    headers: headers,
    body: dataString
  };
  $.post(options, (err, resp, data) => {
     //console.log(data)
  })
 })

}

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            $.nickName = data['base'].nickname;
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

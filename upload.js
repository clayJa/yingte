const qiniu = require("qiniu");
const async = require('async');
const fs = require("fs");
const path = require("path");
const PUBLIC_PATH = path.join(__dirname, "/");

// 上传凭证
var accessKey = 'hvqsYa4HUr1OsCD21LR95o5uLKlnAdSVau-iufQc';
var secretKey = 'j1cvKqKW3OScF5XABNuauqFXJiQzh6uOhIsuJW0u';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
  scope: 'intweb',
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;
// 是否使用https域名
config.useHttpsDomain = false;
// 上传是否使用cdn加速
config.useCdnDomain = false;

/**
 * 遍历文件夹递归上传
 * @param {path} src 本地路径
 * @param {string} dist oos文件夹名
 * @param {boolean} isDir 是否为文件夹下文件
 */
function addFileToOSSSync(src, dist, isDir) {
  let docs = fs.readdirSync(src);
  docs.forEach(function (doc) {
    let _src = src + '/' + doc,
      _dist = dist + '/' + doc;
    let st = fs.statSync(_src);
    // 判断是否为文件
    if (st.isFile() && dist !== "LICENSES`") {
      let dist_str = dist + '';
      let arr = dist_str.split(',');

      putOSS(_src, arr[arr.length - 1] + `/${doc}`);//如果是文件夹下文件，文件名为 fonts/文件名

    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      addFileToOSSSync(_src, _dist, true);
    }
  });
}

var taskTotal = 0;
var syncCount = 0;

async function addFileToOSSSyncV2(src, dist, isDir) {
  let docs = fs.readdirSync(src);
  taskTotal = docs.length;

  task(docs, src, dist, isDir);


}

function task(docs, src, dist, isDir) {
  async.mapLimit(docs, 5, function (doc) {
    syncCount++;
    let _src = src + '/' + doc,
      _dist = dist + '/' + doc;
    let st = fs.statSync(_src);
    // 判断是否为文件
    if (st.isFile() && dist !== "LICENSES`") {
      putOSS(_src, !isDir ? doc : dist + `/${doc}`);//如果是文件夹下文件，文件名为 fonts/文件名
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      addFileToOSSSyncV2(_src, _dist, true);
    }
  }, function (error, result) {
    console.log("result: ")
    console.log(result);
  })
}

/**
 *单个文件上传至oss
 */
async function putOSS(src, dist) {
  try {
    var localFile = src;
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();
    var key = dist;


    // 文件上传
    await formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
                                                                                respBody, respInfo) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        console.log(key + "上传oss成功");
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    });
  } catch (e) {
    console.log("上传失败".e);
  }
}

/**
 *上传文件启动
 */
async function upFile() {
  try {
    let src = PUBLIC_PATH + ".nuxt/dist/client";
    let docs = fs.readdirSync(src);
    //await addFileToOSSSync(src, docs);
    addFileToOSSSync(src, docs);
  } catch (err) {
    console.log("上传oss失败", err);
  }
}

upFile();

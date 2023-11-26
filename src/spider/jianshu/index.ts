import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import { writeToTemp } from "@src/githubApi/issue/helper";
import { htmlPath, tempFilePath } from "@src/githubApi/file/consts";

const url = "https://www.jianshu.com/p/9c3439cc3bdb";

const main = async () => {
  console.log("yanle - logger: 获取文章, 链接：", url);

  const res = await axios.get(url);

  console.log("yanle - logger: 文章获取成功");

  const content = res?.data;

  const $ = cheerio.load(content);

  const articleHtml = $("article").html() || "";

  if (!articleHtml) {
    console.log("yanle - logger: 没有获取到  html 文件， 写入失败");
  }

  // html 写入本地
  fs.writeFileSync(htmlPath, articleHtml, { encoding: "utf-8" });

  console.log("yanle - logger: 写入 html 成功， 文件路径： ", htmlPath);

  // html 转 markdown --> 输出文档为 temp file
  await writeToTemp(tempFilePath, htmlPath);

  console.log("yanle - logger: 写入 temp 成功， 文件路径： ", tempFilePath);
};

main().then();

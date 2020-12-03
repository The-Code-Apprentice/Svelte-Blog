const fs = require("fs");
const fm = require("front-matter");
const marked = require("marked");
const hljs = require("highlight.js");

const postFiles = fs.readdirSync("posts");

marked.setOptions({
	highlight: function (code, lang) {
	  if (lang) {
		return hljs.highlight(lang, code).value;
	  } else {
		return code;
	  }
	},
  });

const posts = [];
for (let i = 0; i < postFiles.length; i++) {
	const postContent = fs.readFileSync(`posts/${postFiles[i]}`, {
		encoding: "utf-8",
	});
	const { body, ...frontMatter } = fm(postContent);
	const { attributes } = frontMatter;
	const {
		slug,
		title,
		tags,
		date,
		published,
		summary,
	} = attributes
	posts.push({
	  html: marked(body),
	  date,
	  slug,
	  title,
	  tags,
	  summary,
	});
}

export { posts };
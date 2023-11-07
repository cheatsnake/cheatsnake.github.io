/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
    title: "Yurace",
    description: "👋 I am Yury, software developer from Belarus.",
    links: [
        { title: "Email", url: "mailto:yurace.pro@gmail.com" },
        { title: "GitHub", url: "https://github.com/cheatsnake" },
        { title: "Twitter", url: "https://twitter.com/yurace_" },
    ],
    footer: <div></div>,
    avatar: "./avatar.png",
    avatarClass: "",
    author: "",
});

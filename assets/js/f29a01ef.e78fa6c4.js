(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8286],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},226:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"git",title:"Git",sidebar_label:"Git"},l={unversionedId:"git",id:"git",isDocsHomePage:!1,title:"Git",description:"What",source:"@site/docs/segment-git.mdx",sourceDirName:".",slug:"/git",permalink:"/docs/git",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-git.mdx",version:"current",sidebar_label:"Git",frontMatter:{id:"git",title:"Git",sidebar_label:"Git"},sidebar:"docs",previous:{title:"Exit code",permalink:"/docs/exit"},next:{title:"Posh-Git",permalink:"/docs/poshgit"}},s=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[{value:"Standard",id:"standard",children:[]},{value:"Status",id:"status",children:[]},{value:"HEAD context",id:"head-context",children:[]},{value:"Upstream context",id:"upstream-context",children:[]},{value:"Colors",id:"colors",children:[]}]}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what"},"What"),(0,o.kt)("p",null,"Display git information when in a git repository. Also works for subfolders. For maximum compatibility,\nmake sure your ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," executable is up-to-date (when branch or status information is incorrect for example)."),(0,o.kt)("p",null,"Local changes can also be displayed which uses the following syntax for both the working and staging area:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," added"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~")," modified"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," deleted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"?")," untracked")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"PowerShell offers support for the ",(0,o.kt)("inlineCode",{parentName:"p"},"posh-git")," module for autocompletion, but it is disabled by default.\nTo enable this, set ",(0,o.kt)("inlineCode",{parentName:"p"},"$env:POSH_GIT_ENABLED = $true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PROFILE"),"."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Starting from version 3.152.0, ",(0,o.kt)("inlineCode",{parentName:"p"},"display_status")," is disabled by default.\nIt improves performance but reduces the quantity of information. Don't forget to enable it in your theme if needed.\nAn alternative is to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/poshgit"},"Posh-Git segment")))),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "git",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#193549",\n  "background": "#ffeb3b",\n  "properties": {\n    "display_status": true,\n    "display_stash_count": true,\n    "display_upstream_icon": true\n  }\n}\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"standard"},"Standard"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"branch_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to use in front of the git branch name - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE0A0 ")),(0,o.kt)("li",{parentName:"ul"},"display_branch_status: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display the branch status or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"branch_identical_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when remote and local are identical - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2261")),(0,o.kt)("li",{parentName:"ul"},"branch_ahead_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when the local branch is ahead of its remote - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2191")),(0,o.kt)("li",{parentName:"ul"},"branch_behind_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when the local branch is behind its remote - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2193")),(0,o.kt)("li",{parentName:"ul"},"branch_gone_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when there's no remote branch - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2262")),(0,o.kt)("li",{parentName:"ul"},"branch_max_length: ",(0,o.kt)("inlineCode",{parentName:"li"},"int")," - the max length for the displayed branch name where ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," implies full length - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"))),(0,o.kt)("h3",{id:"status"},"Status"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"display_status: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display the local changes or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"display_status_detail: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display the local changes in detail or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"display_stash_count: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," show stash count or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"status_separator_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display between staging and working area changes - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"}," |")),(0,o.kt)("li",{parentName:"ul"},"local_working_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display in front of the working area changes - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF044")),(0,o.kt)("li",{parentName:"ul"},"local_staged_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display in front of the staged area changes - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF046")),(0,o.kt)("li",{parentName:"ul"},"stash_count_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display before the stash context - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF692"))),(0,o.kt)("h3",{id:"head-context"},"HEAD context"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"commit_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the commit context (detached HEAD) - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF417")),(0,o.kt)("li",{parentName:"ul"},"tag_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the tag context - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF412")),(0,o.kt)("li",{parentName:"ul"},"rebase_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the context when in a rebase - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE728 ")),(0,o.kt)("li",{parentName:"ul"},"cherry_pick_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the context when doing a cherry-pick - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE29B ")),(0,o.kt)("li",{parentName:"ul"},"merge_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display before the merge context - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE727 ")),(0,o.kt)("li",{parentName:"ul"},"no_commits_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display when there are no commits in the repo - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF594 "))),(0,o.kt)("h3",{id:"upstream-context"},"Upstream context"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"display_upstream_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display upstream icon or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"github_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Github - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF408 ")),(0,o.kt)("li",{parentName:"ul"},"gitlab_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Gitlab - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF296 ")),(0,o.kt)("li",{parentName:"ul"},"bitbucket_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Bitbucket - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF171 ")),(0,o.kt)("li",{parentName:"ul"},"azure_devops_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Azure DevOps - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uFD03 ")),(0,o.kt)("li",{parentName:"ul"},"git_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is not known/mapped - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE5FB "))),(0,o.kt)("h3",{id:"colors"},"Colors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"working_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - foreground color for the working area status - defaults to segment foreground"),(0,o.kt)("li",{parentName:"ul"},"staging_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - foreground color for the staging area status - defaults to segment foreground"),(0,o.kt)("li",{parentName:"ul"},"status_colors_enabled: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - color the segment based on the repository status - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"color_background: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - color background or foreground - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"local_changes_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when there are local changes - defaults to segment\nforeground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")"),(0,o.kt)("li",{parentName:"ul"},"ahead_and_behind_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when the branch is ahead and behind -\ndefaults to segment foreground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")"),(0,o.kt)("li",{parentName:"ul"},"behind_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when the branch is behind - defaults to segment\nforeground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")"),(0,o.kt)("li",{parentName:"ul"},"ahead_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when the branch is ahead - defaults to segment\nforeground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")")))}p.isMDXComponent=!0}}]);
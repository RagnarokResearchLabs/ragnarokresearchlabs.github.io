"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var m=2;m<r;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:500,slug:"/rendering/animation-systems",title:"Animation Systems"},s=void 0,o={unversionedId:"rendering/animation-systems",id:"rendering/animation-systems",title:"Animation Systems",description:"This document describes the different animation systems used in the Ragnarok Online client",source:"@site/docs/rendering/animation-systems.md",sourceDirName:"rendering",slug:"/rendering/animation-systems",permalink:"/rendering/animation-systems",draft:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/rendering/animation-systems.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500,slug:"/rendering/animation-systems",title:"Animation Systems"},sidebar:"tutorialSidebar",previous:{title:"Camera Controls",permalink:"/rendering/camera-controls"},next:{title:"Overview",permalink:"/game-mechanics"}},l={},m=[{value:"Sprite Animations",id:"sprite-animations",level:2},{value:"ACT Frame Times",id:"act-frame-times",level:3},{value:"Animation State Updates",id:"animation-state-updates",level:3},{value:"Predicting Animation Times",id:"predicting-animation-times",level:3},{value:"Observed Frame Durations",id:"observed-frame-durations",level:3}],c={toc:m},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes the different animation systems used in the Ragnarok Online client"),(0,i.kt)("h2",{id:"sprite-animations"},"Sprite Animations"),(0,i.kt)("p",null,'In this context, "sprite animations" refers to the animations generated from data stored in ',(0,i.kt)("a",{parentName:"p",href:"/file-formats/act"},"ACT")," and ",(0,i.kt)("a",{parentName:"p",href:"/file-formats/spr"},"SPR")," files."),(0,i.kt)("h3",{id:"act-frame-times"},"ACT Frame Times"),(0,i.kt)("p",null,"One curiosity is the animation delay stored in the ",(0,i.kt)("a",{parentName:"p",href:"/file-formats/act"},"ACT"),' files. While other files may provide animation times in the unit of "frames" (assuming a stable frame rate of 60 FPS), or milliseconds, ACT delays don\'t inherently make sense in a vacuum.'),(0,i.kt)("p",null,"Traditionally, tools and third-party implementations have computed the ACT frame duration as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"FrameDisplayTimeInMilliseconds = AnimationClip.FrameTimeInIntervals * 25;\n")),(0,i.kt)("p",null,"Before diving into the accuracy of this estimate (",(0,i.kt)("em",{parentName:"p"},"spoiler alert - it's slightly off"),"), some questions immediately spring to mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Why is the frame time given in "intervals" (as ACT editor calls them) in the first place?'),(0,i.kt)("li",{parentName:"ul"},"Where does the 25 ms time value that has so far been used by the community actually come from?"),(0,i.kt)("li",{parentName:"ul"},"Is it at all correct, and is there a way to precisely measure sprite animation times to verify/disprove this?")),(0,i.kt)("p",null,"The following sections attempt to answer these questions, as far as is realistically possible."),(0,i.kt)("h3",{id:"animation-state-updates"},"Animation State Updates"),(0,i.kt)("p",null,"In order to answer the first question, a bit of guesswork is needed. There's of course no way of telling for sure why this peculiar unit of measurement was chosen by the game's developers. But knowing a bit about the different animation systems in the client, a likely explanation is that sprite animations use a different mechanism altogether (e.g., clock-based state machines)."),(0,i.kt)("p",null,"If one assumes the existence of one or several timers that update the animation state machines, operating at a fixed clock speed, it wouldn't be as far-fetched to describe frame display times in terms of full cycles on this clock. In fact, there is some evidence that other systems (e.g., particles) do indeed involve such self-clocking mechanisms to compute their own time deltas."),(0,i.kt)("p",null,'This might seem like a peculiar design choice compared to a global delta time (the "standard" approach). However, it\'s clear that there are several different animation systems working to animate objects such as the Granny3D models, water surfaces, particle systems, and RSM(2) models',(0,i.kt)("sup",{parentName:"p",id:"fnref-*"},(0,i.kt)("a",{parentName:"sup",href:"#fn-*",className:"footnote-ref"},"*")),". In light of this, adding one more for sprites to the mix doesn't seem particularly strange."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-*"},(0,i.kt)("a",{parentName:"sup",href:"#fn-*",className:"footnote-ref"},"*"))," This is obvious since they all use different units of measurement; Also, GR2 models were added much later in development."),(0,i.kt)("h3",{id:"predicting-animation-times"},"Predicting Animation Times"),(0,i.kt)("p",null,"Allowing for the above assumptions, it's possible to explain why intervals where chosen as the unit of measurement for ACT animations. However, the exact time value is yet to be determined. While the origin of the 25 ms interval time appears to be lost to history, the number is probably an estimate based on recording frame times. But - as far as I can tell - ",(0,i.kt)("em",{parentName:"p"},"it's subtly wrong"),"."),(0,i.kt)("p",null,"In order to accurately compute the most likely time value, and confirm or disprove the hypothesis that it's 25 ms, one might:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mathematically model the expected animation duration for different clock speeds, in both milliseconds and frames"),(0,i.kt)("li",{parentName:"ul"},"Take into account the variance introduced by discrete rendering steps (it's not possible to render partial frames, after all)"),(0,i.kt)("li",{parentName:"ul"},"Record animation cycles at different speeds and sample the observed frame durations at various clock interval times"),(0,i.kt)("li",{parentName:"ul"},"Compare the observed frame counts per animation clip to the predicted results, accounting for measurement error")),(0,i.kt)("p",null,"This allows progressively eliminating impossible times until the range of possible interval times narrows in on a value."),(0,i.kt)("h3",{id:"observed-frame-durations"},"Observed Frame Durations"),(0,i.kt)("p",null,"Let's get the conclusion out of the way first: Based on my experiments, the real interval time is actually ",(0,i.kt)("strong",{parentName:"p"},"24 ms"),"."),(0,i.kt)("p",null,"Showing why 25 ms can't be right involves a little bit of math to predict possible frame times over time. The idea being:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the real time was exactly 25 ms (which is the hypothesis to test), then observations must always lie within ~1 frame"),(0,i.kt)("li",{parentName:"ul"},"Even with a rendering delay greater than one frame, it would be equal for all ACT interval counts (assuming a stable 60 FPS)"),(0,i.kt)("li",{parentName:"ul"},"However, should the time be wrong, this error will accumulate, becoming more pronounced at higher interval counts")),(0,i.kt)("p",null,"If the prediction is off but very close, this might be invisible in a 100 ms animation sequence (same rendered frame). But when the same sequence is stretched out to last several seconds, the error should be amplified greatly and eventually become observable. When a tiny difference (such as 1 ms per interval) is added up repeatedly, it soon amounts to multiple frames."),(0,i.kt)("p",null,"And indeed, this is precisely what happens. The orange boxes highlight the discrepancy between predicted and observed times:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"act-frame-timings-discrepancy.png",src:a(3099).Z,width:"1649",height:"840"})),(0,i.kt)("p",null,"While analyzing recordings and comparing observed frame times to the predictions, a few things quickly become clear:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The 25ms duration appears accurate at first glance, e.g., when recording a Poring's IDLE animation at normal speed"),(0,i.kt)("li",{parentName:"ul"},"However, this is almost certainly a happy coincidence and due to falling within the same rendered frame (~16.667 ms)"),(0,i.kt)("li",{parentName:"ul"},'Increasing the interval count to even just 40 leads to recordings "missing" frames that should exist, if 25 ms was correct'),(0,i.kt)("li",{parentName:"ul"},"At this count, the range can be narrowed down to ",(0,i.kt)("inlineCode",{parentName:"li"},"(23.75, 24.165)")," purely based on the number of observed frames"),(0,i.kt)("li",{parentName:"ul"},"It can be seen that the predicted frame times diverge ever further from the observed ones as higher values are used")),(0,i.kt)("p",null,"In fact, the range of possible clock interval times narrows in on exactly 24 ms as the overall display duration increases:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"act-frame-timings-observed.png",src:a(7245).Z,width:"1614",height:"161"})),(0,i.kt)("p",null,"At the above interval count of 128, the difference between both models is significant; this can no longer be explained by mere variance - or even measurement errors. What's more, the predicted frame time matches the observed time almost exactly if ",(0,i.kt)("em",{parentName:"p"},"and only if")," the real period is actually 24 ms (and not 25). Therefore, the animation system must be working with 24 ms intervals."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE: If you want to reproduce these results, you can find all of the relevant files ",(0,i.kt)("a",{parentName:"em",href:"https://valkyrie-realm.net/research/act-frame-times/"},"here"),", alongside some rudimentary usage instructions.")))}p.isMDXComponent=!0},3099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/act-frame-timings-discrepancy-2ececaea797f64db6ebebbeb85d992c1.png"},7245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/act-frame-timings-observed-0302b5be2bc556faab11f25ff9928377.png"}}]);
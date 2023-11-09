"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1081],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(a),c=r,s=k["".concat(p,".").concat(c)]||k[c]||N[c]||i;return a?n.createElement(s,l(l({ref:e},m),{},{components:a})):n.createElement(s,l({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[k]="string"==typeof t?t:r,l[1]=d;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4650:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>N,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={slug:"/file-formats/gnd",title:"GND"},l=void 0,d={unversionedId:"file-formats/GND",id:"file-formats/GND",title:"GND",description:"This document describes the GND file format used in the Ragnarok Online client.",source:"@site/docs/file-formats/GND.md",sourceDirName:"file-formats",slug:"/file-formats/gnd",permalink:"/file-formats/gnd",draft:!1,editUrl:"https://github.com/RagnarokResearchLab/ragnarokresearchlab.github.io/edit/main/docs/file-formats/GND.md",tags:[],version:"current",frontMatter:{slug:"/file-formats/gnd",title:"GND"},sidebar:"tutorialSidebar",previous:{title:"GAT",permalink:"/file-formats/gat"},next:{title:"GR2",permalink:"/file-formats/gr2"}},p={},o=[{value:"Contents",id:"contents",level:2},{value:"Layout",id:"layout",level:2},{value:"Arcturus &amp; iRO Alpha",id:"arcturus--iro-alpha",level:3},{value:"Cube Grid",id:"cube-grid",level:4},{value:"Version 1.5",id:"version-15",level:3},{value:"Version 1.6",id:"version-16",level:3},{value:"Version 1.7",id:"version-17",level:3},{value:"Lightmap Slices",id:"lightmap-slices",level:4},{value:"Textured Surfaces",id:"textured-surfaces",level:4},{value:"Texture Coordinates",id:"texture-coordinates",level:4},{value:"Cube Grid",id:"cube-grid-1",level:4},{value:"Version 1.8",id:"version-18",level:3},{value:"Water Plane Configuration",id:"water-plane-configuration",level:4},{value:"Version 1.9",id:"version-19",level:3},{value:"References",id:"references",level:2}],m={toc:o},k="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes the GND file format used in the Ragnarok Online client."),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("p",null,"GND files contain the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The entirety of a map's surface geometry (i.e., the ground/static terrain)"),(0,r.kt)("li",{parentName:"ul"},"A list of diffuse textures and texture coordinates for mapping them to the terrain"),(0,r.kt)("li",{parentName:"ul"},"Vertex colors and precomputed lightmap textures to add lights and shadows"),(0,r.kt)("li",{parentName:"ul"},"In later versions they can also include the configuration of the water surfaces, which were previously stored in RSW files")),(0,r.kt)("p",null,"The file contents effectively represent the basic terrain for a given map, without 3D models, sprites, or other decoration."),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("h3",{id:"arcturus--iro-alpha"},"Arcturus & iRO Alpha"),(0,r.kt)("p",null,"Unversioned GND files were already used in ",(0,r.kt)("a",{parentName:"p",href:"/arcturus"},"Arcturus"),". They also appear in the iRO alpha client, alongside more recent versions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TextureCount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number of diffuse texture paths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width")),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Width of the cube grid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Height")),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Height of the cube grid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TexturePaths")),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"80"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TextureCount")," entries; all paths are null-terminated C strings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"GroundMeshCubes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"28"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width")," ","*"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Height")," entries")))),(0,r.kt)("h4",{id:"cube-grid"},"Cube Grid"),(0,r.kt)("p",null,"Compared to later versions of the format, the indirection from cubes to textured surfaces doesn't yet exist:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"UpwardsFacingTexture")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Texture ID of the upwards-facing ",(0,r.kt)("inlineCode",{parentName:"td"},"GROUND")," surface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"NorthernWallTexture")),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Texture ID of the northwards-facing ",(0,r.kt)("inlineCode",{parentName:"td"},"WALL")," surface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"EasternWallTexture")),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Texture ID of the eastwards-facing ",(0,r.kt)("inlineCode",{parentName:"td"},"WALL")," surface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BottomLeftHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the bottom left corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BottomRightHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the bottom right corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TopLeftHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the top left corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TopRightHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"24"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the top right corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"VertexColor")),(0,r.kt)("td",{parentName:"tr",align:"center"},"28"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"ARGB vertex color (stored as BGRA) for the bottom left vertex")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TBD"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Purpose unknown, but its value seems to always be ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," (?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TextureCoordinates")),(0,r.kt)("td",{parentName:"tr",align:"center"},"36"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Diffuse texture UVs (uses the same format as later versions)")))),(0,r.kt)("p",null,"The format used to store texture coordinates seems to be identical to ",(0,r.kt)("a",{parentName:"p",href:"#texture-coordinates"},"the one used in GND 1.7 and later"),"."),(0,r.kt)("h3",{id:"version-15"},"Version 1.5"),(0,r.kt)("p",null,"Certain maps in the iRO alpha client use GND 1.5. These are much closer to the version used in the modern RO client."),(0,r.kt)("p",null,"The format is identical to GND 1.7, except that the lightmap format is stored globally instead of on a per-slice basis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PixelFormat"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Width"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Height")," appear directly after the ",(0,r.kt)("inlineCode",{parentName:"li"},"LightmapSliceCount")," fields in the main structure"),(0,r.kt)("li",{parentName:"ul"},"Each individual ",(0,r.kt)("inlineCode",{parentName:"li"},"LightmapSlices")," entry only carries the pixel data (as defined by the above format)"),(0,r.kt)("li",{parentName:"ul"},"For more details, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flaviojs/eathena-devel-FlavioJS/blob/master/client/file_formats/gnd.txt"},"https://github.com/flaviojs/eathena-devel-FlavioJS/blob/master/client/file_formats/gnd.txt"))),(0,r.kt)("h3",{id:"version-16"},"Version 1.6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flaviojs/eathena-devel-FlavioJS/blob/master/client/file_formats/gnd.txt"},"Some unverified information is available for this version"),", but there aren't any known files that actually use it."),(0,r.kt)("h3",{id:"version-17"},"Version 1.7"),(0,r.kt)("p",null,"This is the original version used for most maps in the modern RO client:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Header")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"GRGN"')," as an ASCII-encoded, fixed-size string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MajorVersion")),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"byte")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Versioning information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MinorVersion")),(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"byte")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Versioning information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width")),(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Width of the cube grid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Height")),(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Height of the cube grid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Scale")),(0,r.kt)("td",{parentName:"tr",align:"center"},"14"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Geometry scale factor (always ",(0,r.kt)("inlineCode",{parentName:"td"},"10"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TextureCount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number of diffuse texture paths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TexturePathLength")),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Length of each texture path string, in bytes (always ",(0,r.kt)("inlineCode",{parentName:"td"},"80"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TexturePaths")),(0,r.kt)("td",{parentName:"tr",align:"center"},"24+"),(0,r.kt)("td",{parentName:"tr",align:"center"},"80"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Null-terminated (discard garbage bytes at the end)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"LightmapSliceCount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number of lightmap (and ambient occlusion) texture slices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"LightmapSlices")),(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"268"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"struct")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ambient occlusion and lightmap texture bitmaps (alternating)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceCount")),(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number of textured surface blueprints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceDefinitions")),(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"56"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Shared texturing information (copy to each cube vertex)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"GroundMeshCubes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"variable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"28"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width")," ","*"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Height")," entries")))),(0,r.kt)("h4",{id:"lightmap-slices"},"Lightmap Slices"),(0,r.kt)("p",null,"The lightmap and ambient occlusion textures are split into small bitmaps:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description and notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"PixelFormat")),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Encoding of the lightmap and ambient occlusion pixels (usually ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width")),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Width of each texture bitmap (always ",(0,r.kt)("inlineCode",{parentName:"td"},"8"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Height")),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Height of teach texture bitmap (always ",(0,r.kt)("inlineCode",{parentName:"td"},"8"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ShadowmapPixels")),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width * Height")," ambient occlusion texture pixels (intensity values)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"LightmapPixels")),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"192"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Width * Height")," lightmap texture pixels (specularity values)")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("em",{parentName:"p"},"This value appears to be ignored; the actual pixel format should always be 8-bit RGBA (stored as ARGB).")),(0,r.kt)("h4",{id:"textured-surfaces"},"Textured Surfaces"),(0,r.kt)("p",null,"These can be used to construct the terrain geometry (vertex data):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description and notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TextureCoordinates")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Diffuse texture UVs (array of ",(0,r.kt)("inlineCode",{parentName:"td"},"float")," values, see below)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Texture")),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"short")),(0,r.kt)("td",{parentName:"tr",align:"center"},"ID of the diffuse texture to apply to this surface (",(0,r.kt)("inlineCode",{parentName:"td"},"-1"),' means "none")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"LightmapSlice")),(0,r.kt)("td",{parentName:"tr",align:"center"},"36"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ushort")),(0,r.kt)("td",{parentName:"tr",align:"center"},"ID of the lightmap (and ambient occlusion) slice to apply to the surface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"VertexColor")),(0,r.kt)("td",{parentName:"tr",align:"center"},"40"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"BGRA-ordered color (",(0,r.kt)("inlineCode",{parentName:"td"},"byte")," values) of the surface's bottom left vertex")))),(0,r.kt)("h4",{id:"texture-coordinates"},"Texture Coordinates"),(0,r.kt)("p",null,"Texture coordinates are stored in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bottomLeftU")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bottomRightU")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"topLeftU")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"topRightU")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bottomLeftV")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bottomRightV")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"topLeftV")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"topRightV"))),(0,r.kt)("p",null,"The direction is always relative to the cube that the surface belongs to, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"bottomLeft")," is south-west and ",(0,r.kt)("inlineCode",{parentName:"p"},"topRight")," is north-east."),(0,r.kt)("h4",{id:"cube-grid-1"},"Cube Grid"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BottomLeftHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the bottom left corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BottomRightHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the bottom right corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TopLeftHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the top left corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TopRightHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Altitude of the top right corner (in world units)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"UpwardsFacingSurface")),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Upwards-facing surface ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"NorthernWallSurface")),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Surface ID of the northwards-facing wall")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"EasternWallSurface")),(0,r.kt)("td",{parentName:"tr",align:"center"},"24"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Surface ID of the eastwards-facing wall")))),(0,r.kt)("h3",{id:"version-18"},"Version 1.8"),(0,r.kt)("p",null,"The water plane configuration that was previously part of the ",(0,r.kt)("a",{parentName:"p",href:"/file-formats/rsw"},"RSW")," file has been moved to the GND file instead."),(0,r.kt)("p",null,"All the information stored in version 1.7 is still present (and unchanged), plus the water plane configuration (appended)."),(0,r.kt)("h4",{id:"water-plane-configuration"},"Water Plane Configuration"),(0,r.kt)("p",null,"In theory, this GND version supports multiple water planes. But in practice, all maps that use it only feature a single one."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Offset"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Length"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WaterLevel")),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Height of the default water plane (there's always at least one)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WaterType")),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Texture ID that's applied to the water plane (tiled)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WaveHeight")),(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Amplitude of the water plane's animation curve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WaveSpeed")),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Phase of the water plane's animation curve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WavePitch")),(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Surface curvature in degrees (origin of the curve)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TextureCyclingInterval")),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"center"},"After how many frames the next texture should be swapped in")))),(0,r.kt)("p",null,"This is the basic water configuration, as present in both RSW (pre-2.6) and the next GND version."),(0,r.kt)("p",null,"The configuration for the other planes follows after the above, and is (in this version) always of the following form:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NumWaterPlanesU")," (",(0,r.kt)("inlineCode",{parentName:"li"},"int")," value): How many water planes there are in the horizontal dimension (always ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NumWaterPlanesV")," (",(0,r.kt)("inlineCode",{parentName:"li"},"int")," value): How many water planes there are in the vertical dimension (always ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"float")," defining the ",(0,r.kt)("inlineCode",{parentName:"li"},"WaterLevel")," (altitude) of this plane. It's always identical to the water level above, since there's only one.")),(0,r.kt)("p",null,"If there were multiple values here, it would likely be the ",(0,r.kt)("inlineCode",{parentName:"p"},"WateLlevel")," of each plane (assuming the presence of ",(0,r.kt)("inlineCode",{parentName:"p"},"u * v")," planes), but since that doesn't happen (and there's already a new GND version available) it seems unlikely that this would ever be used."),(0,r.kt)("h3",{id:"version-19"},"Version 1.9"),(0,r.kt)("p",null,"All the information stored in version 1.7, plus the water plane configuration (appended). The latter consists of the same information as is present in 1.8, but the format for defining multiple water planes has changed (and they are in fact used in some of the episode 19 maps I've seen, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"icecastle.gnd"),"):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NumWaterPlanesU")," (",(0,r.kt)("inlineCode",{parentName:"li"},"int")," value): How many water planes there are in the horizontal dimension (NOT always ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"NumWaterPlanesV")," (",(0,r.kt)("inlineCode",{parentName:"li"},"int")," value): How many water planes there are in the vertical dimension (NOT always ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),")"),(0,r.kt)("li",{parentName:"ol"},"The same structure as defined for the original water plane (see table above), repeated ",(0,r.kt)("inlineCode",{parentName:"li"},"u * v")," times")),(0,r.kt)("p",null,"I'm not quite sure what the original configuration is still used for, but I'm guessing it would serve as a fallback in case the numbers ",(0,r.kt)("inlineCode",{parentName:"p"},"(u, v)")," are both zero (i.e., there aren't any water planes defined in this section). More research is needed."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rendering/ground-mesh"},"Rendering/Ground Mesh")," details the interpretation of the ground mesh's geometry (and related features)")))}N.isMDXComponent=!0}}]);
import{S as N,i as q,s as x,k as i,q as A,a as B,l as _,m as S,r as M,h as l,c as k,p as V,n,b as D,E as a,A as G,L as z,C as R}from"../../../chunks/index-e9506ef8.js";function W(p,e,r){const c=p.slice();return c[1]=e[r],c}function C(p){let e,r,c=p[1].name+"",T,E,w,u,b,H,d,h,g;return{c(){e=i("div"),r=i("h1"),T=A(c),E=B(),w=i("a"),u=i("img"),H=B(),d=i("a"),h=i("img"),this.h()},l(f){e=_(f,"DIV",{class:!0});var m=S(e);r=_(m,"H1",{class:!0});var O=S(r);T=M(O,c),O.forEach(l),E=k(m),w=_(m,"A",{href:!0,target:!0});var v=S(w);u=_(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(l),H=k(m),d=_(m,"A",{href:!0,target:!0});var s=S(d);h=_(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(l),m.forEach(l),this.h()},h(){n(r,"class","svelte-171ygch"),R(u.src,b="/imdb.png")||n(u,"src",b),n(u,"class","img-imdb svelte-171ygch"),n(u,"alt","IMDb Link"),n(w,"href",p[1].imdb_url),n(w,"target","_blank"),R(h.src,g="/rotten.png")||n(h,"src",g),n(h,"class","img-rotten svelte-171ygch"),n(h,"alt","Rotten Tomatoes Link"),n(d,"href",p[1].rotten_tomatoes_url),n(d,"target","_blank"),n(e,"class","movie svelte-171ygch")},m(f,m){D(f,e,m),a(e,r),a(r,T),a(e,E),a(e,w),a(w,u),a(e,H),a(e,d),a(d,h)},p:G,d(f){f&&l(e)}}}function U(p){let e,r,c,T,E,w,u,b,H,d,h,g,f,m,O,v=p[0],s=[];for(let o=0;o<v.length;o+=1)s[o]=C(W(p,v,o));return{c(){e=i("div"),r=i("div"),c=i("h2"),T=A("All-Time Movies & TV Shows"),E=A(`\r
		\xA0\r
		`),w=i("hr"),u=B(),b=i("pre"),H=A(`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies:\r
`),d=B();for(let o=0;o<s.length;o+=1)s[o].c();h=B(),g=i("pre"),f=A(`\r
Second-tier movies:\r
\r
Die Hard\r
Office Space\r
Parasite\r
Planes, Trains & Automobiles\r
Speed\r
The Invitation\r
\r
[TV SHOWS]\r
\r
Breaking Bad\r
How to Sell Drugs Online (Fast)\r
Laurel & Hardy\r
Not Going Out\r
The Big Lez Show\r
The End of the F***ng World\r
The Office US\r
		`),m=B(),O=i("br"),this.h()},l(o){e=_(o,"DIV",{class:!0});var y=S(e);r=_(y,"DIV",{class:!0});var t=S(r);c=_(t,"H2",{style:!0});var I=S(c);T=M(I,"All-Time Movies & TV Shows"),I.forEach(l),E=M(t,`\r
		\xA0\r
		`),w=_(t,"HR",{}),u=k(t),b=_(t,"PRE",{style:!0,class:!0});var L=S(b);H=M(L,`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies:\r
`),L.forEach(l),d=k(t);for(let P=0;P<s.length;P+=1)s[P].l(t);h=k(t),g=_(t,"PRE",{style:!0,class:!0});var F=S(g);f=M(F,`\r
Second-tier movies:\r
\r
Die Hard\r
Office Space\r
Parasite\r
Planes, Trains & Automobiles\r
Speed\r
The Invitation\r
\r
[TV SHOWS]\r
\r
Breaking Bad\r
How to Sell Drugs Online (Fast)\r
Laurel & Hardy\r
Not Going Out\r
The Big Lez Show\r
The End of the F***ng World\r
The Office US\r
		`),F.forEach(l),t.forEach(l),y.forEach(l),m=k(o),O=_(o,"BR",{}),this.h()},h(){V(c,"display","inline-block"),V(b,"padding","0.5rem 1rem"),n(b,"class","svelte-171ygch"),V(g,"padding","0.5rem 1rem"),n(g,"class","svelte-171ygch"),n(r,"class","container svelte-171ygch"),n(e,"class","wrapper svelte-171ygch")},m(o,y){D(o,e,y),a(e,r),a(r,c),a(c,T),a(r,E),a(r,w),a(r,u),a(r,b),a(b,H),a(r,d);for(let t=0;t<s.length;t+=1)s[t].m(r,null);a(r,h),a(r,g),a(g,f),D(o,m,y),D(o,O,y)},p(o,[y]){if(y&1){v=o[0];let t;for(t=0;t<v.length;t+=1){const I=W(o,v,t);s[t]?s[t].p(I,y):(s[t]=C(I),s[t].c(),s[t].m(r,h))}for(;t<s.length;t+=1)s[t].d(1);s.length=v.length}},i:G,o:G,d(o){o&&l(e),z(s,o),o&&l(m),o&&l(O)}}}function $(p){return[[{name:"A Star Is Born",imdb_url:"https://www.imdb.com/title/tt1517451/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/a_star_is_born_2018"},{name:"American Beauty",imdb_url:"https://www.imdb.com/title/tt0169547/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/american_beauty"},{name:"Another Round",imdb_url:"https://www.imdb.com/title/tt10288566/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/another_round"},{name:"Casablanca",imdb_url:"https://www.imdb.com/title/tt0034583/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1003707-casablanca"},{name:"Coda",imdb_url:"https://www.imdb.com/title/tt10366460/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/coda_2021"},{name:"Dead Poets Society",imdb_url:"https://www.imdb.com/title/tt0097165/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/dead_poets_society"},{name:"Forgetting Sarah Marshall",imdb_url:"https://www.imdb.com/title/tt0800039/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/forgetting_sarah_marshall"},{name:"Get Out",imdb_url:"https://www.imdb.com/title/tt5052448/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/get_out"},{name:"Good Will Hunting",imdb_url:"https://www.imdb.com/title/tt0119217/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/good_will_hunting"},{name:"In Bruges",imdb_url:"https://www.imdb.com/title/tt0780536/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/in_bruges"},{name:"Never Let Me Go",imdb_url:"https://www.imdb.com/title/tt1334260/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/never_let_me_go_2010"},{name:"Reign Over Me",imdb_url:"https://www.imdb.com/title/tt0490204/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/reign_over_me"},{name:"Stand By Me",imdb_url:"https://www.imdb.com/title/tt0092005/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/stand_by_me_2013"},{name:"The Gift",imdb_url:"https://www.imdb.com/title/tt4178092/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_gift_2015"},{name:"The Hunt",imdb_url:"https://www.imdb.com/title/tt2106476/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_hunt_2013"},{name:"The Night Before",imdb_url:"https://www.imdb.com/title/tt3530002/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_night_before_2015"},{name:"The Pursuit of Happyness",imdb_url:"https://www.imdb.com/title/tt0454921/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/pursuit_of_happyness"},{name:"The Station Agent",imdb_url:"https://www.imdb.com/title/tt0340377/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/station_agent"},{name:"The Way Way Back",imdb_url:"https://www.imdb.com/title/tt1727388/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_way_way_back"},{name:"Titanic",imdb_url:"https://www.imdb.com/title/tt0120338/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/titanic"}]]}class J extends N{constructor(e){super(),q(this,e,$,U,x,{})}}export{J as default};

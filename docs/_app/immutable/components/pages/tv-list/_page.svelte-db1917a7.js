import{S as C,i as N,s as q,k as i,q as A,a as B,l as _,m as T,r as M,h as l,c as k,p as V,n,b as D,E as a,A as j,L as x,C as F}from"../../../chunks/index-e9506ef8.js";function R(p,e,r){const w=p.slice();return w[1]=e[r],w}function W(p){let e,r,w=p[1].name+"",y,E,h,u,b,H,d,c,f;return{c(){e=i("div"),r=i("h1"),y=A(w),E=B(),h=i("a"),u=i("img"),H=B(),d=i("a"),c=i("img"),this.h()},l(g){e=_(g,"DIV",{class:!0});var m=T(e);r=_(m,"H1",{class:!0});var O=T(r);y=M(O,w),O.forEach(l),E=k(m),h=_(m,"A",{href:!0,target:!0});var v=T(h);u=_(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(l),H=k(m),d=_(m,"A",{href:!0,target:!0});var s=T(d);c=_(s,"IMG",{src:!0,class:!0,alt:!0}),s.forEach(l),m.forEach(l),this.h()},h(){n(r,"class","svelte-1pdeuuj"),F(u.src,b="/imdb.png")||n(u,"src",b),n(u,"class","img-imdb svelte-1pdeuuj"),n(u,"alt","IMDb Link"),n(h,"href",p[1].imdb_url),n(h,"target","_blank"),F(c.src,f="/rotten.png")||n(c,"src",f),n(c,"class","img-rotten svelte-1pdeuuj"),n(c,"alt","Rotten Tomatoes Link"),n(d,"href",p[1].rotten_tomatoes_url),n(d,"target","_blank"),n(e,"class","movie svelte-1pdeuuj")},m(g,m){D(g,e,m),a(e,r),a(r,y),a(e,E),a(e,h),a(h,u),a(e,H),a(e,d),a(d,c)},p:j,d(g){g&&l(e)}}}function z(p){let e,r,w,y,E,h,u,b,H,d,c,f,g,m,O,v=p[0],s=[];for(let o=0;o<v.length;o+=1)s[o]=W(R(p,v,o));return{c(){e=i("div"),r=i("div"),w=i("h2"),y=A("All-Time Movies & TV Shows"),E=A(`\r
		\xA0\r
		`),h=i("hr"),u=B(),b=i("pre"),H=A(`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies:\r
`),d=B();for(let o=0;o<s.length;o+=1)s[o].c();c=B(),f=i("pre"),g=A(`\r
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
		`),m=B(),O=i("br"),this.h()},l(o){e=_(o,"DIV",{class:!0});var S=T(e);r=_(S,"DIV",{class:!0});var t=T(r);w=_(t,"H2",{style:!0});var I=T(w);y=M(I,"All-Time Movies & TV Shows"),I.forEach(l),E=M(t,`\r
		\xA0\r
		`),h=_(t,"HR",{}),u=k(t),b=_(t,"PRE",{style:!0,class:!0});var G=T(b);H=M(G,`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies:\r
`),G.forEach(l),d=k(t);for(let P=0;P<s.length;P+=1)s[P].l(t);c=k(t),f=_(t,"PRE",{style:!0,class:!0});var L=T(f);g=M(L,`\r
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
		`),L.forEach(l),t.forEach(l),S.forEach(l),m=k(o),O=_(o,"BR",{}),this.h()},h(){V(w,"display","inline-block"),V(b,"padding","0.5rem 1rem"),n(b,"class","svelte-1pdeuuj"),V(f,"padding","0.5rem 1rem"),n(f,"class","svelte-1pdeuuj"),n(r,"class","container svelte-1pdeuuj"),n(e,"class","wrapper svelte-1pdeuuj")},m(o,S){D(o,e,S),a(e,r),a(r,w),a(w,y),a(r,E),a(r,h),a(r,u),a(r,b),a(b,H),a(r,d);for(let t=0;t<s.length;t+=1)s[t].m(r,null);a(r,c),a(r,f),a(f,g),D(o,m,S),D(o,O,S)},p(o,[S]){if(S&1){v=o[0];let t;for(t=0;t<v.length;t+=1){const I=R(o,v,t);s[t]?s[t].p(I,S):(s[t]=W(I),s[t].c(),s[t].m(r,c))}for(;t<s.length;t+=1)s[t].d(1);s.length=v.length}},i:j,o:j,d(o){o&&l(e),x(s,o),o&&l(m),o&&l(O)}}}function U(p){return[[{name:"A Star Is Born",imdb_url:"https://www.imdb.com/title/tt1517451/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/a_star_is_born_2018"},{name:"American Beauty",imdb_url:"https://www.imdb.com/title/tt0169547/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/american_beauty"},{name:"Another Round",imdb_url:"https://www.imdb.com/title/tt10288566/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/another_round"},{name:"Casablanca",imdb_url:"https://www.imdb.com/title/tt0034583/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1003707-casablanca"},{name:"Coda",imdb_url:"https://www.imdb.com/title/tt10366460/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/coda_2021"},{name:"Dead Poets Society",imdb_url:"https://www.imdb.com/title/tt0097165/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/dead_poets_society"},{name:"Forgetting Sarah Marshall",imdb_url:"https://www.imdb.com/title/tt0800039/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/forgetting_sarah_marshall"},{name:"Get Out",imdb_url:"https://www.imdb.com/title/tt5052448/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/get_out"},{name:"Good Will Hunting",imdb_url:"https://www.imdb.com/title/tt0119217/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/good_will_hunting"},{name:"In Bruges",imdb_url:"https://www.imdb.com/title/tt0780536/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/in_bruges"},{name:"Never Let Me Go",imdb_url:"https://www.imdb.com/title/tt1334260/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/never_let_me_go_2010"},{name:"Reign Over Me",imdb_url:"https://www.imdb.com/title/tt0490204/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/reign_over_me"},{name:"Stand By Me",imdb_url:"https://www.imdb.com/title/tt0092005/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/stand_by_me_2013"},{name:"The Gift",imdb_url:"https://www.imdb.com/title/tt4178092/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_gift_2015"},{name:"The Hunt",imdb_url:"https://www.imdb.com/title/tt2106476/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_hunt_2013"},{name:"The Night Before",imdb_url:"https://www.imdb.com/title/tt3530002/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_night_before_2015"},{name:"The Pursuit of Happyness",imdb_url:"https://www.imdb.com/title/tt0454921/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/pursuit_of_happyness"},{name:"The Station Agent",imdb_url:"https://www.imdb.com/title/tt0340377/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/station_agent"},{name:"The Way Way Back",imdb_url:"https://www.imdb.com/title/tt1727388/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_way_way_back"},{name:"Titanic",imdb_url:"https://www.imdb.com/title/tt0120338/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/titanic"}]]}class J extends C{constructor(e){super(),N(this,e,U,z,q,{})}}export{J as default};

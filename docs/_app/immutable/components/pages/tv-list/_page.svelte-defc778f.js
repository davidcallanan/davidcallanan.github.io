import{S as C,i as N,s as q,k as i,q as A,a as B,l as _,m as y,r as M,h as l,c as H,p as P,n,b as D,E as s,A as V,L as x,C as G}from"../../../chunks/index-e9506ef8.js";function R(p,e,o){const w=p.slice();return w[1]=e[o],w}function W(p){let e,o,w=p[1].name+"",T,k,h,u,b,E,d,c,f;return{c(){e=i("div"),o=i("h1"),T=A(w),k=B(),h=i("a"),u=i("img"),E=B(),d=i("a"),c=i("img"),this.h()},l(g){e=_(g,"DIV",{class:!0});var m=y(e);o=_(m,"H1",{class:!0});var O=y(o);T=M(O,w),O.forEach(l),k=H(m),h=_(m,"A",{href:!0,target:!0});var v=y(h);u=_(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(l),E=H(m),d=_(m,"A",{href:!0,target:!0});var a=y(d);c=_(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(l),m.forEach(l),this.h()},h(){n(o,"class","svelte-1pdeuuj"),G(u.src,b="/imdb.png")||n(u,"src",b),n(u,"class","img-imdb svelte-1pdeuuj"),n(u,"alt","IMDb Link"),n(h,"href",p[1].imdb_url),n(h,"target","_blank"),G(c.src,f="/rotten.png")||n(c,"src",f),n(c,"class","img-rotten svelte-1pdeuuj"),n(c,"alt","Rotten Tomatoes Link"),n(d,"href",p[1].rotten_tomatoes_url),n(d,"target","_blank"),n(e,"class","movie svelte-1pdeuuj")},m(g,m){D(g,e,m),s(e,o),s(o,T),s(e,k),s(e,h),s(h,u),s(e,E),s(e,d),s(d,c)},p:V,d(g){g&&l(e)}}}function z(p){let e,o,w,T,k,h,u,b,E,d,c,f,g,m,O,v=p[0],a=[];for(let r=0;r<v.length;r+=1)a[r]=W(R(p,v,r));return{c(){e=i("div"),o=i("div"),w=i("h2"),T=A("All-Time Movies & TV Shows"),k=A(`\r
		\xA0\r
		`),h=i("hr"),u=B(),b=i("pre"),E=A(`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies (most emotionally impactful):\r
`),d=B();for(let r=0;r<a.length;r+=1)a[r].c();c=B(),f=i("pre"),g=A(`\r
Second-tier movies (other movies):\r
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
		`),m=B(),O=i("br"),this.h()},l(r){e=_(r,"DIV",{class:!0});var S=y(e);o=_(S,"DIV",{class:!0});var t=y(o);w=_(t,"H2",{style:!0});var I=y(w);T=M(I,"All-Time Movies & TV Shows"),I.forEach(l),k=M(t,`\r
		\xA0\r
		`),h=_(t,"HR",{}),u=H(t),b=_(t,"PRE",{style:!0,class:!0});var j=y(b);E=M(j,`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies (most emotionally impactful):\r
`),j.forEach(l),d=H(t);for(let L=0;L<a.length;L+=1)a[L].l(t);c=H(t),f=_(t,"PRE",{style:!0,class:!0});var F=y(f);g=M(F,`\r
Second-tier movies (other movies):\r
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
		`),F.forEach(l),t.forEach(l),S.forEach(l),m=H(r),O=_(r,"BR",{}),this.h()},h(){P(w,"display","inline-block"),P(b,"padding","0.5rem 1rem"),n(b,"class","svelte-1pdeuuj"),P(f,"padding","0.5rem 1rem"),n(f,"class","svelte-1pdeuuj"),n(o,"class","container svelte-1pdeuuj"),n(e,"class","wrapper svelte-1pdeuuj")},m(r,S){D(r,e,S),s(e,o),s(o,w),s(w,T),s(o,k),s(o,h),s(o,u),s(o,b),s(b,E),s(o,d);for(let t=0;t<a.length;t+=1)a[t].m(o,null);s(o,c),s(o,f),s(f,g),D(r,m,S),D(r,O,S)},p(r,[S]){if(S&1){v=r[0];let t;for(t=0;t<v.length;t+=1){const I=R(r,v,t);a[t]?a[t].p(I,S):(a[t]=W(I),a[t].c(),a[t].m(o,c))}for(;t<a.length;t+=1)a[t].d(1);a.length=v.length}},i:V,o:V,d(r){r&&l(e),x(a,r),r&&l(m),r&&l(O)}}}function U(p){return[[{name:"A Star Is Born",imdb_url:"https://www.imdb.com/title/tt1517451/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/a_star_is_born_2018"},{name:"American Beauty",imdb_url:"https://www.imdb.com/title/tt0169547/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/american_beauty"},{name:"Another Round",imdb_url:"https://www.imdb.com/title/tt10288566/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/another_round"},{name:"Casablanca",imdb_url:"https://www.imdb.com/title/tt0034583/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1003707-casablanca"},{name:"Coda",imdb_url:"https://www.imdb.com/title/tt10366460/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/coda_2021"},{name:"Dead Poets Society",imdb_url:"https://www.imdb.com/title/tt0097165/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/dead_poets_society"},{name:"Forgetting Sarah Marshall",imdb_url:"https://www.imdb.com/title/tt0800039/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/forgetting_sarah_marshall"},{name:"Get Out",imdb_url:"https://www.imdb.com/title/tt5052448/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/get_out"},{name:"Good Will Hunting",imdb_url:"https://www.imdb.com/title/tt0119217/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/good_will_hunting"},{name:"In Bruges",imdb_url:"https://www.imdb.com/title/tt0780536/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/in_bruges"},{name:"Life is Beautiful",imdb_url:"https://www.imdb.com/title/tt0118799/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1084398-life_is_beautiful"},{name:"Never Let Me Go",imdb_url:"https://www.imdb.com/title/tt1334260/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/never_let_me_go_2010"},{name:"One Flew Over the Cuckoo's Nest",imdb_url:"https://www.imdb.com/title/tt0073486/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/one_flew_over_the_cuckoos_nest"},{name:"Reign Over Me",imdb_url:"https://www.imdb.com/title/tt0490204/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/reign_over_me"},{name:"Stand By Me",imdb_url:"https://www.imdb.com/title/tt0092005/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/stand_by_me_2013"},{name:"The Gift",imdb_url:"https://www.imdb.com/title/tt4178092/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_gift_2015"},{name:"The Hunt",imdb_url:"https://www.imdb.com/title/tt2106476/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_hunt_2013"},{name:"The Night Before",imdb_url:"https://www.imdb.com/title/tt3530002/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_night_before_2015"},{name:"The Pursuit of Happyness",imdb_url:"https://www.imdb.com/title/tt0454921/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/pursuit_of_happyness"},{name:"The Spiderwick Chronicles",imdb_url:"https://www.imdb.com/title/tt0416236/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/spiderwick_chronicles"},{name:"The Station Agent",imdb_url:"https://www.imdb.com/title/tt0340377/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/station_agent"},{name:"The Way Way Back",imdb_url:"https://www.imdb.com/title/tt1727388/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_way_way_back"},{name:"Titanic",imdb_url:"https://www.imdb.com/title/tt0120338/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/titanic"}]]}class J extends C{constructor(e){super(),N(this,e,U,z,q,{})}}export{J as default};

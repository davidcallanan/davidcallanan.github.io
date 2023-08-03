import{S as W,i as N,s as q,k as l,q as P,a as A,l as w,m as y,r as I,h as i,c as B,p as D,n,b as L,E as s,A as G,L as x,C as V}from"../../../chunks/index-e9506ef8.js";function j(p,e,o){const _=p.slice();return _[1]=e[o],_}function C(p){let e,o,_=p[1].name+"",T,k,h,u,b,E,d,c,f;return{c(){e=l("div"),o=l("h1"),T=P(_),k=A(),h=l("a"),u=l("img"),E=A(),d=l("a"),c=l("img"),this.h()},l(g){e=w(g,"DIV",{class:!0});var a=y(e);o=w(a,"H1",{class:!0});var O=y(o);T=I(O,_),O.forEach(i),k=B(a),h=w(a,"A",{href:!0,target:!0});var v=y(h);u=w(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(i),E=B(a),d=w(a,"A",{href:!0,target:!0});var m=y(d);c=w(m,"IMG",{src:!0,class:!0,alt:!0}),m.forEach(i),a.forEach(i),this.h()},h(){n(o,"class","svelte-1pdeuuj"),V(u.src,b="/imdb.png")||n(u,"src",b),n(u,"class","img-imdb svelte-1pdeuuj"),n(u,"alt","IMDb Link"),n(h,"href",p[1].imdb_url),n(h,"target","_blank"),V(c.src,f="/rotten.png")||n(c,"src",f),n(c,"class","img-rotten svelte-1pdeuuj"),n(c,"alt","Rotten Tomatoes Link"),n(d,"href",p[1].rotten_tomatoes_url),n(d,"target","_blank"),n(e,"class","movie svelte-1pdeuuj")},m(g,a){L(g,e,a),s(e,o),s(o,T),s(e,k),s(e,h),s(h,u),s(e,E),s(e,d),s(d,c)},p:G,d(g){g&&i(e)}}}function z(p){let e,o,_,T,k,h,u,b,E,d,c,f,g,a,O,v=p[0],m=[];for(let r=0;r<v.length;r+=1)m[r]=C(j(p,v,r));return{c(){e=l("div"),o=l("div"),_=l("h2"),T=P("All-Time Movies & TV Shows"),k=P(`\r
		\xA0\r
		`),h=l("hr"),u=A(),b=l("pre"),E=P(`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies (most emotionally impactful):\r
`),d=A();for(let r=0;r<m.length;r+=1)m[r].c();c=A(),f=l("pre"),g=P(`\r
Second-tier movies (other movies):\r
\r
Die Hard\r
Office Space\r
Parasite\r
Planes, Trains & Automobiles\r
Prisoners\r
Road to Perdition\r
Speed\r
The Invitation\r
\r
[TV SHOWS]\r
\r
After Life (S01-S02)\r
Breaking Bad\r
How to Sell Drugs Online (Fast)\r
Laurel & Hardy\r
Not Going Out\r
The Big Lez Show\r
The End of the F***ng World\r
The Office US\r
		`),a=A(),O=l("br"),this.h()},l(r){e=w(r,"DIV",{class:!0});var S=y(e);o=w(S,"DIV",{class:!0});var t=y(o);_=w(t,"H2",{style:!0});var H=y(_);T=I(H,"All-Time Movies & TV Shows"),H.forEach(i),k=I(t,`\r
		\xA0\r
		`),h=w(t,"HR",{}),u=B(t),b=w(t,"PRE",{style:!0,class:!0});var F=y(b);E=I(F,`(in alphabetical order)\r
\r
[MOVIES]\r
\r
First-tier movies (most emotionally impactful):\r
`),F.forEach(i),d=B(t);for(let M=0;M<m.length;M+=1)m[M].l(t);c=B(t),f=w(t,"PRE",{style:!0,class:!0});var R=y(f);g=I(R,`\r
Second-tier movies (other movies):\r
\r
Die Hard\r
Office Space\r
Parasite\r
Planes, Trains & Automobiles\r
Prisoners\r
Road to Perdition\r
Speed\r
The Invitation\r
\r
[TV SHOWS]\r
\r
After Life (S01-S02)\r
Breaking Bad\r
How to Sell Drugs Online (Fast)\r
Laurel & Hardy\r
Not Going Out\r
The Big Lez Show\r
The End of the F***ng World\r
The Office US\r
		`),R.forEach(i),t.forEach(i),S.forEach(i),a=B(r),O=w(r,"BR",{}),this.h()},h(){D(_,"display","inline-block"),D(b,"padding","0.5rem 1rem"),n(b,"class","svelte-1pdeuuj"),D(f,"padding","0.5rem 1rem"),n(f,"class","svelte-1pdeuuj"),n(o,"class","container svelte-1pdeuuj"),n(e,"class","wrapper svelte-1pdeuuj")},m(r,S){L(r,e,S),s(e,o),s(o,_),s(_,T),s(o,k),s(o,h),s(o,u),s(o,b),s(b,E),s(o,d);for(let t=0;t<m.length;t+=1)m[t].m(o,null);s(o,c),s(o,f),s(f,g),L(r,a,S),L(r,O,S)},p(r,[S]){if(S&1){v=r[0];let t;for(t=0;t<v.length;t+=1){const H=j(r,v,t);m[t]?m[t].p(H,S):(m[t]=C(H),m[t].c(),m[t].m(o,c))}for(;t<m.length;t+=1)m[t].d(1);m.length=v.length}},i:G,o:G,d(r){r&&i(e),x(m,r),r&&i(a),r&&i(O)}}}function U(p){return[[{name:"A Star Is Born",imdb_url:"https://www.imdb.com/title/tt1517451/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/a_star_is_born_2018"},{name:"American Beauty",imdb_url:"https://www.imdb.com/title/tt0169547/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/american_beauty"},{name:"Another Round",imdb_url:"https://www.imdb.com/title/tt10288566/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/another_round"},{name:"Awakenings",imdb_url:"https://www.imdb.com/title/tt0099077/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1032970-awakenings"},{name:"Casablanca",imdb_url:"https://www.imdb.com/title/tt0034583/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1003707-casablanca"},{name:"Coda",imdb_url:"https://www.imdb.com/title/tt10366460/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/coda_2021"},{name:"Dead Poets Society",imdb_url:"https://www.imdb.com/title/tt0097165/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/dead_poets_society"},{name:"Disturbia",imdb_url:"https://www.imdb.com/title/tt0486822/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/disturbia"},{name:"Forgetting Sarah Marshall",imdb_url:"https://www.imdb.com/title/tt0800039/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/forgetting_sarah_marshall"},{name:"Forrest Gump",imdb_url:"https://www.imdb.com/title/tt0109830/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/forrest_gump"},{name:"Get Out",imdb_url:"https://www.imdb.com/title/tt5052448/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/get_out"},{name:"Good Will Hunting",imdb_url:"https://www.imdb.com/title/tt0119217/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/good_will_hunting"},{name:"In Bruges",imdb_url:"https://www.imdb.com/title/tt0780536/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/in_bruges"},{name:"Les Choristes",imdb_url:"https://www.imdb.com/title/tt0372824/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/chorus_les_choristes"},{name:"Life is Beautiful",imdb_url:"https://www.imdb.com/title/tt0118799/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/1084398-life_is_beautiful"},{name:"Never Let Me Go",imdb_url:"https://www.imdb.com/title/tt1334260/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/never_let_me_go_2010"},{name:"One Flew Over the Cuckoo's Nest",imdb_url:"https://www.imdb.com/title/tt0073486/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/one_flew_over_the_cuckoos_nest"},{name:"Reign Over Me",imdb_url:"https://www.imdb.com/title/tt0490204/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/reign_over_me"},{name:"Soylent Green",imdb_url:"https://www.imdb.com/title/tt0070723/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/soylent_green"},{name:"Stand By Me",imdb_url:"https://www.imdb.com/title/tt0092005/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/stand_by_me_2013"},{name:"The Gift",imdb_url:"https://www.imdb.com/title/tt4178092/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_gift_2015"},{name:"The Hunt",imdb_url:"https://www.imdb.com/title/tt2106476/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_hunt_2013"},{name:"The Night Before",imdb_url:"https://www.imdb.com/title/tt3530002/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_night_before_2015"},{name:"The Pursuit of Happyness",imdb_url:"https://www.imdb.com/title/tt0454921/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/pursuit_of_happyness"},{name:"The Spiderwick Chronicles",imdb_url:"https://www.imdb.com/title/tt0416236/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/spiderwick_chronicles"},{name:"The Station Agent",imdb_url:"https://www.imdb.com/title/tt0340377/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/station_agent"},{name:"The Way Way Back",imdb_url:"https://www.imdb.com/title/tt1727388/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/the_way_way_back"},{name:"Titanic",imdb_url:"https://www.imdb.com/title/tt0120338/",rotten_tomatoes_url:"https://www.rottentomatoes.com/m/titanic"}]]}class J extends W{constructor(e){super(),N(this,e,U,z,q,{})}}export{J as default};

/*
欢乐淘金（发财挖宝）助力

入口：京东APP——玩一玩——欢乐淘金

地址：
https://bnzf.jd.com/?activityId=Bn1VWXtvgTv5ewPoMR-X8A

环境变量：
JD_FCWB_ID // 指定活动ID  不指定默认 APP入口  格式：Bn1VWXtvgTv5ewPoMR-X8A 
JD_FCWB_InviterId // 指定助力码 非必须，不填默认助力账号一  格式：inviterId&inviterCode
JD_FCWB_NUM // 指定人数  非必须，不填默认跑全部账号

cron:1 1 1 1 *

*/

const $ = new Env('欢乐淘金(发财挖宝)助力')
var iｉl='jsjiami.com.v7';const ililIi=iii1II;(function(II1iI,llI1II,lIli1l,lillIi,illIi1,ii1ili,liil1i){return II1iI=II1iI>>0x2,ii1ili='hs',liil1i='hs',function(lI1lil,i1l1iI,liil1l,lI1lii,Iiili1){const liiI1i=iii1II;lI1lii='tfi',ii1ili=lI1lii+ii1ili,Iiili1='up',liil1i+=Iiili1,ii1ili=liil1l(ii1ili),liil1i=liil1l(liil1i),liil1l=0x0;const Iil1l1=lI1lil();while(!![]&&--lillIi+i1l1iI){try{lI1lii=parseInt(liiI1i(0x16f,'VdoB'))/0x1*(parseInt(liiI1i(0x1a5,'Fxpj'))/0x2)+-parseInt(liiI1i(0x146,'%ne3'))/0x3+parseInt(liiI1i(0x11a,'PAmr'))/0x4*(parseInt(liiI1i(0x1e2,'@(o5'))/0x5)+-parseInt(liiI1i(0x17e,'xxZQ'))/0x6*(-parseInt(liiI1i(0x1c8,'Fxpj'))/0x7)+parseInt(liiI1i(0x14f,'npAf'))/0x8*(-parseInt(liiI1i(0x14a,'ZNku'))/0x9)+-parseInt(liiI1i(0x142,')9It'))/0xa*(parseInt(liiI1i(0x120,'JjUU'))/0xb)+-parseInt(liiI1i(0x122,'*8dy'))/0xc;}catch(i1i11I){lI1lii=liil1l;}finally{Iiili1=Iil1l1[ii1ili]();if(II1iI<=lillIi)liil1l?illIi1?lI1lii=Iiili1:illIi1=Iiili1:liil1l=Iiili1;else{if(liil1l==illIi1['replace'](/[bwMyVrUkWOEALDGS=]/g,'')){if(lI1lii===i1l1iI){Iil1l1['un'+ii1ili](Iiili1);break;}Iil1l1[liil1i](Iiili1);}}}}}(lIli1l,llI1II,function(il1iIl,iii1ii,il1iIi,iii1il,II11li,I1l11i,iIIiiI){return iii1ii='\x73\x70\x6c\x69\x74',il1iIl=arguments[0x0],il1iIl=il1iIl[iii1ii](''),il1iIi=`\x72\x65\x76\x65\x72\x73\x65`,il1iIl=il1iIl[il1iIi]('\x76'),iii1il=`\x6a\x6f\x69\x6e`,(0x159f99,il1iIl[iii1il](''));});}(0x2fc,0x76b57,Iii11l,0xc1),Iii11l)&&(iｉl=0xc1);const notify=require('./utils/Rebels_sendJDNotify'),jdCookie=require('./jdCookie'),common=require(ililIi(0x1b5,'%ne3')),{H5st}=require(ililIi(0x130,'%cLz'));console[ililIi(0xe3,'sp(P')](''),console[ililIi(0xb3,'i^FX')](ililIi(0x13f,'xxZQ')+$['name']+ililIi(0x201,'@(o5')),console[ililIi(0x16c,'eI^Z')](ililIi(0xd0,'$q4Y')),console[ililIi(0x152,'[CP8')](ililIi(0x1be,'$q4Y')),console[ililIi(0xb3,'i^FX')](ililIi(0x198,'i^FX')+$[ililIi(0x1e6,'k#Io')]+ililIi(0x170,'npAf')),console[ililIi(0xce,'rQ8F')]('');const isNotify=process[ililIi(0xec,'npAf')][ililIi(0xfe,'bJvS')]===ililIi(0x16e,'rQ8F'),fcwbcode=process[ililIi(0x183,'*8dy')][ililIi(0x10b,'%ne3')]||'',fcwbnum=process[ililIi(0x167,'IPES')][ililIi(0x1f5,'UMFe')];let link=process[ililIi(0xf4,'VkNq')][ililIi(0x137,'Lw(5')]||ililIi(0xbb,'bRz*');const WAIT='1';let waitTimes=parseInt(WAIT)*0x3e8;$[ililIi(0x10c,'aWhM')]=0x0,$[ililIi(0x192,'*8dy')]=![];let cookie='';const cookiesArr=Object[ililIi(0x1ef,'Ob!m')](jdCookie)['map'](iIII1l=>jdCookie[iIII1l])[ililIi(0x100,'jz@3')](lllil=>lllil);!cookiesArr[0x0]&&($[ililIi(0x126,'$q4Y')]($[ililIi(0x191,'PAmr')],ililIi(0x166,'Lw(5')),process['exit'](0x1));!(async()=>{const lilIIl=ililIi,iI11Il={'QUDUc':'❖\x20当前设置活动ID为：','nhLYy':lilIIl(0xf7,'jz@3'),'djnjm':function(iIII1i,iil1i1){return iIII1i===iil1i1;},'EGdkp':'kGMyK','YUwsj':lilIIl(0x18a,'@(o5'),'cuSAL':function(il1i11,IlIll1){return il1i11<IlIll1;},'ARdEr':function(IlIII,ilil1l){return IlIII+ilil1l;},'iQBMI':function(illlIi,I1lIii){return illlIi(I1lIii);},'gbktR':function(IiI1I){return IiI1I();},'CYCZk':function(illlIl,i11ill,IIIIIi){return illlIl(i11ill,IIIIIi);},'TyLcE':function(IIIIIl,I1lIil){return IIIIIl*I1lIil;}};console[lilIIl(0x16c,'eI^Z')](iI11Il[lilIIl(0x135,'8QvF')]+link);fcwbnum?iI11Il[lilIIl(0x1ae,'VkNq')]!==iI11Il[lilIIl(0xbc,'8QvF')]?IliI1I[lilIIl(0x106,')9It')](lilIIl(0x1fd,'Ef*U')+lI1Iii):console[lilIIl(0x131,'ZNku')](lilIIl(0x1f3,'Hu%@')+fcwbnum+']'):iI11Il[lilIIl(0x185,'t!nP')](iI11Il[lilIIl(0x136,'Iog2')],lilIIl(0x1e5,'i^FX'))?ll1il[lilIIl(0x139,'Iog2')]('❓'+IiiIiI+'\x20'+lilii[lilIIl(0xe7,'VkNq')](l1iiI)):console[lilIIl(0x190,'ikq*')](lilIIl(0x1bc,'VkNq'));if(fcwbcode){let IIIl1l=fcwbcode['split']('&');$['zdinviter']=IIIl1l[0x0],$[lilIIl(0x129,'eS03')]=IIIl1l[0x1],console[lilIIl(0x152,'[CP8')](lilIIl(0x1df,')9It')+$[lilIIl(0x1de,'A#Gk')]+']');}else lilIIl(0xd1,'rQ8F')!==iI11Il['YUwsj']?IliI1i[lilIIl(0x106,')9It')]('>\x20'+ll1ii[lilIIl(0x1e9,'cjQf')]):console['log'](lilIIl(0x104,'#9Mt'));notify[lilIIl(0x18f,'Z03F')]({'title':$[lilIIl(0x15a,'IqkA')]});for(let i11ili=0x0;iI11Il[lilIIl(0xb5,'cjQf')](i11ili,cookiesArr[lilIIl(0x110,'A#Gk')]);i11ili++){$['index']=iI11Il[lilIIl(0xad,'K4$X')](i11ili,0x1),cookie=cookiesArr[i11ili],common[lilIIl(0x16b,'eS03')](cookie),$[lilIIl(0xf9,'ikq*')]=iI11Il[lilIIl(0x1b0,'IPES')](decodeURIComponent,common[lilIIl(0x11f,'Ob!m')](cookie,lilIIl(0xc6,'k#Io'))),$['UA']=common[lilIIl(0x15d,'Ob!m')]($[lilIIl(0x204,'$Otk')]),$[lilIIl(0x133,'t!nP')]=notify['create']($[lilIIl(0xdd,'%cLz')],$[lilIIl(0x1e3,'eS03')]),$[lilIIl(0x181,'[CP8')]='',console[lilIIl(0x1dc,'A#Gk')](lilIIl(0x15c,'ch%#')+$[lilIIl(0x1c1,'ikq*')]+'】'+($[lilIIl(0x12f,'rQ8F')]||$[lilIIl(0x1da,'[CP8')])+'******\x0a'),await iI11Il[lilIIl(0x1b8,'cjQf')](Main),common[lilIIl(0x208,'k#Io')]();if($[lilIIl(0x203,'9Tih')]||$[lilIIl(0x20f,'UMFe')])break;await $[lilIIl(0x20b,'xxZQ')](iI11Il['CYCZk'](parseInt,iI11Il[lilIIl(0x1c3,'npAf')](iI11Il['TyLcE'](waitTimes,0x1),0x3e8),0xa));}isNotify&&notify[lilIIl(0x1cc,'Hu%@')]()&&(notify['updateContent'](iI11Il[lilIIl(0x153,'sp(P')](notify[lilIIl(0x1ad,'Ef*U')],'\x0a')),await notify[lilIIl(0x1e4,'JjUU')]());})()[ililIi(0x19a,'K4$X')](iil1l1=>$[ililIi(0x1cf,'IqkA')](iil1l1))[ililIi(0x154,'sp(P')](()=>$[ililIi(0x1c9,'cjQf')]());function Iii11l(){const lilIIi=(function(){return[...[iｉl,'MjWswbjWiVVamkOiyD.OkckAoLm.GvUOE7wVSUGr==','WP3dOvZcTXZdLd0','W6CudeBdGG','W7FdMSkQl8k3','W4O6ugS','W4FcR0LhWOC','WPxdTfuYWPdcIq','W7i0aJnoymkqbabS','F15emmkO','rmkYWPbNaq','W6RcGCo/WQVdHg4','gSkwq8o3BG','WPhdLuNcHc4','WPaUgXmS','zaKHW4O1bSk4','W5JcOCkiEmoPz8oZWQtdHCoV','fCozohCrrLelu0hcJSoXW4/cMu3cHa','W6pcV8o4CWnUBYBcHW','pIpdGSkOWO4','j8odW7yL','Dmongmo+whKHWQZcLW','WR3dUSoLya','ACklq8kmW5C','ww1pgmkP','W4tcR8kD','bb3dOZ1b','awDvfMu','z8odW5ORhW','tCkSW7CHiuxcSW','WOddOXtdQNO','WQ9NW6yHWRtdL28','WQTtW5CFWPW','WORdQIZdKG','4P28WO7LVBNLIRRLIklLIOFLTQJOVPpLIPBMJzJLRO3LIA7LIiBKUBtMLzVVV4lPGiJLHOpVVOC','WOxcMhJdMmksyhFcSCoQcmkbehujWPpcNa','bx12d0a','wSohB8ouWRK9W6dcNSk4W6VdRh/cRSooBmoEmNJdG8oLWPDUeG','WR11nJhcUa','mxS3Fd0','BIrpy8ob','W7mDW4pdLmopgGX2aLZdM3PMWOP9WPC','WOxcMhJdMmksyhFcSCoQcmkbea','lmkcDmoYWRC','4P64WQVMNBlLO5JLHPRMJO3LRlhKUjdML7/LJztPHO/VV67PU7JOR7/LHipOVitLIONLIjO','oCkFECoVWRS','B8oWW7m5bCoNWP9PWOddTCkQi15ufoApGowTKos4JUAuHo+8KUs5O+wIUEM4VUISK+I1P+wfT+McLoI2L+woHG','lCkywmofw1uuWO/cOW','gdtdPq','W6BcNCoPWOpdJW','W43dUX3cVSolWPjbssJdKbNdKa','WQdcTNVdHtS','WOG3mW','eSo/hSkAWPm','BsDqDG','du4y','D8k4rSo9BfGC','BsLkCG','4P6zkEw3JEwHPEwhQUAnMUwST+wkKowkPUwoIEMeHU+8Low8GUwNMEwkVUwjJ3HL','4P28WO7LIOpLIAZMIPVLIOn6DG','W4K+ueFdLcu6g0pcLq','W4VcPComESk2','tCovW5Wpp8o0WRrrWOBdHCklCW','W7/cTCoTrr5Y','4P2DmUw8NowjMowlMUwjQow0OUI9NEwkS+AnQowSVEwlVEwkVEs7UoAvOU++RUMcK+wgV++/MW','qZWUvSkK','eCk+x0PdWRZdGwpcKmoL','WOdcMhRdG8koqe7cV8om','mvHSWRa3rCkIWPhcOfddRmoj','b8kiW4pdLCoz','W54+vNNdNJGhd0K','8lcyPW8','W75CgfZcNG','BI0KxCkw','g8k2W7/dSCoCW7LgWQq','WRjJW6CZWRJdGW','W5RdKmkD','WQ9cW5L4DG','W4ZdM8ktf8kQtbtdTKm4hSoW','4P6IWRlLTQxLORVLHyZMJ57LR5pLIzpLIzFLJ4lPH4RVV57LVBpLP77LIyZLIPpcK8oy','WPnVW4bXDq','vtWMqCksWQm','W4LXWOBdQCoByuJdNe0Ujq','W73cS8kFA8okDCoAWQa','j8ofoCkx','WPPpFK0G','gJRdRWG','WP7dQIRdKM7dUCoVW4VdU8oT','j8kCEMLRWQhdOq','zdvd','bY/dSarzt25Wra','4P6LdEAEV+IdNEATKEEIGEwKUEErUSkg','WPRdVf0uWOBcIJWBqW','qdq1Ea','Bcv7iKVdGmoMWRpdKdZdLcjZ','l8ojW6SZ','hdRdSH1oBg5XDCk1umkMoaBdNdG','W5/dPCk1fSkt','WO53W4eEWOu','4P+4E+w3LUwHOEweQoAnKEwVK+s7GoAvLowmQoMeUE+/K+AoREwUSEs5ToAvVbve','vCosW64CfG','Cw9weCksz8kPWOqOW5NdUG','oCoqW7SeCCkxW4ZcMaO','WPBdLbhcN8kT','W4pcNSo+WOhdOa','lCocW6qPWO7cNMiAw1q','WPBdJ2xcOXy','4O6C77MgWOZLTiJMN6dLIztLIPhKUj3MLztVVjG','EuLXaCkF','4P2IW6pOHOpMNBNOVPtOOAFPGOdLI6xKUOdPL77ORzNdJa','xZqSFmkyWOdcQCoNwxJdMCos','iuvy','xZqSFmkyWOdcQCoNwxldMmoh','5yYL6yAi6k2f5PUsW5mBnmkBp0LFWQddR8oc','fSozECkfW70','o8o7h0uTBfW','bCktW60nWOxdTmo2W4q','W5/cUwJdVMZdUSonW4ldHG','4O6C77MgWOZOT5ZLJj7cPJVdUUIoK+wpLowkTowkGos8UUAdPW','4P2IW6pMNRpOGQJMRkFNOyxLP4pNK5mM'],...(function(){return[...['atxdSqHdA2H5vSk5wq','WPhdMSoYt08','bmkTx2zDWQG','WP5mW7Xu','wZO7','4P2rWPhLV5RLIklLIR3LIAJLTA7OVy/LIztMJ47LR7VLIjpLIAlKUQtMLlBVVz/PGkxLH4tVVkG','4O6Q77UVWQJLTO3MN4lLIlZLIidKUjVML5dVV5K','sv5NeSk/va','zSkbWObbgW','dmoZpvuz','W5/dIqddLx80','WOjVW5n0CW','WRBdKY3cMSkF','pSkGW6JdSmo9W7zLWRr1','WQnMwa','BdrwwSoGaa','AJn3vSoF','W4xdISkzgSk5vHm','WRvTvMafnmozxh4+WQ19','WOpdUd8','BY9C','W7tcSSoiCIC','WRnYuIRcJL/dKCoiib3cUN/cMdWRs2VdTWpcPrid','wt0qvCky','iSknW5OWWRW','oKHkkf0','lmonW6iWWOpcV0GsD17dVJ4','nCkSW6CqWPm','CWKNW7fVg8kcWQ/cGG','ie9mf3ziW5a','s8k8WOm','WRjNW6CHWRRdNKtcUh8','j8kCxSoMc0iW','bc/dNr1ErG','fCobtq','a8okq8kzW711lKJdPtbZWQi','WPX9erFcVgpdTCoxkq','zSkbymk0W5ddVM3cKmku','d8orp1eJ','p8oojG','uxNdJ8kDWOVcINRdJW','W7rKjq','gmkhFq','B8oWW7m5bCoNWP9PWOFdJSkrAGuErSkoWQ7cLfSXtUApLEwTVowiNUwiREEGNU+9Sos6VowGMUM4O+IULUwiJowlJEI2QowmJEs4Mq','W7bUgL7cQq','W55ifvFcVHnm','W5b2ya','rdSgsSkl','4P2lW6xLV4NLI47LIlVLIipLT5NOVB/LIkJMJjZLRRZLI7tLIiFKUPlML4pVVzlPGkJLHOVVV5e','i+IUM+AWL+wMS+I0PvxINzddUG','W5RcSCoBWOpdLq','j39xpf4','W4mOqW','8j+RH3u','WQrrW5GFWO8','WP3dVJVdKgBdUCoy','cmkXsu5w','sf97pSk/v8kcWR0F','WQ9klKBcQrrW','ySkpyq','lmkwtq','q8kYWPbL','W6hdKru','WQLNW7aIW7JdKwBcPgrK','W7b/nMxcIeChjmk3WQGTWP7cH1ldOKldGmoKeMFcTxi/pG','WP/dVf8pWPRcQGuvzCk0sCkF','WP3dVYRdMM3dRCocW4ZdTG','dJ3dMmkkWPRdHYxcIevYDdxcTSkMymkZiaKhbvu9hWC','W6RdMWBcIvvjBsvQC8ovsSoMW43cJ8ozDGtcTG','W4i0qW','tmoAW4GApG','WOtcIMK','bSkDDmoLWR41','F8khWOLDoW','u0P5j8kODmkcWRWUW6pdMSk6','WOxdQee6WO3cIG','a8kwW6NdHmoz','W6KjW53dOCoyoG','W7/dQCkpmmkB','WOVdPs4','W6RdMdRdKv8','tte1ySkxWQ3cTmoLuNJdKmos','WOKXmZe+','mmoAW50LWQW','W5RcGmoOWPtdUwHCW6q','WOBdQIJdG3RdJSocW43dH8oJlCkh','WOhcLM8','WPZdLGpcKCkd','WQjWvMafnmozxh4+WQ19','WRpcHNBdICk+W71ewdZdNsxdSSoDW5e','W7mtW4FdLmoemr1O','WOiXoaiFtW','oSodlq','W5ldMGldQhuxWQFcICkXhmoveW','C2HzaSk4','4PYWAEAEHUwIKEwfSoApUUwUKowiJUwkV+wpMUMhKU+8L+w/M+wLG+wkO+wjJoI0QowoNtnzjW','hSkdw8o0WRW','WPJdVta','pmkpW68','WQpdVSo6DMOGWRZdPIu','kCkGW67dJ8oZW6XoWRjSwLyTW4PnW4eTqr7cVG','pu9nf3HbW7Tioq','pSkSrCoMWPmgW5hdRSkJW6ddUhpcTSoyqCo9mG','W5ldNH7dQgiMWQm','hmk3W7W9WQK','W57cQ8kUs8om','WPmDW4VcMmkC','W5RdMSkuhSkOtq','y8o3W7S9a8oEWRK','W5tORAxMSjxLKj3LUyhdUq','mmkCwmoDuv8kWPpcOa','W4tcQ8onrYK','tCovW5Wpp8o0WRrrWOBdHCklCZ0sr8kZ','WOtcLM3dJtPA','WPeOW5y','WPHYfrxcRwldPSoriYW','lCkKW7tdLmoZW6XoWRnXDue','WQPoWOpdQCozlGn5aW','WO0IW4pcR8kbseFdK28','dWxdOmkdWRW'],...(function(){return['WP1Zba','W6FcLSoSWOldKNTc','i8ojW6ydWPxcLeOCwMFdSJFdISoa','zSkdECooW6xdNuFcLCkXyh4KW4S','pwOMyq','W6NcMJZdHgdcIMNcOcxdLvO7tq','e8oLW5mXxcHLWR/cIwbK','WQldN3KAWOe','qCovW5GE','smohW4S','vLHU','WPhdQGy','W5lcPmktD8oYFCodWQddSSoHWR/dGa','amo1W6a4ua','W7uDi3xdTtxcI8kkWQ4BrCo1WOfhW4C9','mhm/zqRcT8k5WOtdIWRdIYrQk2hdLG','WPVdPYpcLSk5WRGU','lCknW6ldJCox','W7zIix7cTrXfBG','t8oWwf9hWQpdTI3cTSoHWQXJWRvIas0','BWmY','W7fTavZcKW','nxC8zHlcLmk1','t8kYWPr0ecTnWQlcJLvoW5O','zGaywCkc','tSkNDSk0W4u','W5C4depdJYBcOmkYWQ86','k2CSDHBcGmkJ','z8kpDq','W69Qk2e','n8oEW60k','WO4+W7FcKSkh','WPtdI1S2WOO','eK8LWOVdHW','W5qqWQGDd8osaehcM3y','W7S1cN3dOq','tGnW','W4pcOJtcT8k3WQ45WPi','WR7dKhNcUcRdNq','WRpdLN/cHsRcGhBdLtZdLgvwq8o1W7jMW5fBWO/cNmkKiYddHa','tWeMW6vx','rSoCi8ksW6DHW73dUSkLW43dN28','W6ZdNqBcRejuFd97qCo6sSoCW4NcIComCbNcTq','WQH4W4jnxW','W6xcRCkut8ol','mfOVW7jXa8kgWPW','zmk8WOPWdafqW6JcKKntW5O','WOFdKCoYxua','W4y6vhRdIbiGhwZcN8kBWRO','WRxcUCoIyqjUrd/dL8oKq3JdIxNdSmkOrSkjWPOxlxLgxZtcOdFcKmkYiKtcGSo9WR3cSha7WQpdLh91w0HpW5nRW7NdOHrCW5WAhmk8WOBcGXNdICkJBCkrWORcHCoEWOakhsuisWFcOCk8W4FcUmkuW4ddN8oUWOlcMCkPW7lcO8onnmkA','W5xdNsVcSx8fW7PpF8kdx8oE','4PYYDEw8J+wjGEwjIowjN+w0SUI8VUwiOEAmKowSRUwiNUwjGUs7NEAwNE+9GoMbPUwfNE+/PG','i8oqW6aB','iSkQW70','W4ZdRbBcGey','W6VdLXZcPfHrCq','wmkUW6ShkG','WPNdTYtcO8k0WR4S','c2LOjLjbW5e','FCkOW6Gybq','aerQhfG','W73cU8oNzq','cCk+xvTxWOVdRgxcRmoHWQj2WPv4lre','rWavtJ0fWP/LVl3LPP/JGlVKU53KU7JOT6pLJ6e','i8ojW7WvWRS','WPLmW6Dbx8kC','4P6OEoADVUEEK+IUJEAXV8om','kmkSW6i','wEITMEAXQowNHUI2RJZIN4yn5Pwg5zks5BQd5PA35O+Z','tCorW4apkmofWRa','lMXAmgy','lZddJCkQWQq','WRldVq/cKgq','44kn5O6S56wP44cu6k275ys56i2v5yY7WQurrSoUWQrl','WQDSW6m','cYJdNSkrWOZcMvRdJKO','W50Ur2NdLcu6','aCkSt8o5sG','W5VcPCkowSoRE8oCWQZdLa','W5ddO0G','W5VdQvS7pHjsWRfrW6rPiSkbW7SSWROZfmoY','W6X5n3a','W47cSLFdHwlcQSkbomkjW5O','5OYX56EE57Um5P+FDadcGdWyW5WQWQJcHGq','W6ddHXVcQ0juFdnDxCobxW','ft3dNSktWOFcMMpdGv0','rs9XwSoY','WPZdRINdHMBdUCoF','fdZdGSk/WOFcMq','xmoDW60zna','tSkpFJyHuK0ny3C','pCkTW6KvWPe','hLH9nhO','g8ohumk6W7H7','AW0LW7j5mCkLWR3cP3ZdKmoz','bualWQW','WPLOfWZcQJ3cISkrjsFcTIZdKYeFcKxdIKm','W50AWQexcSoCcYZdTrJdOwhcOq','WOVdUsRdVNddRq','W5JdRvSw','imkSW7NdQmoCW7LgWQq','W5NcGhVcUxW','WR7dJh0','hv82xHW','phGHFX4','WPhcGw3dSYztW7n0sa','dLqlWOVdGCkFWPK','W57dNSkkcCkLyqNdTeGYfSoL','yCk5WPjUjq','WPuIW6NcL8k8','uKv/pSkLvCkz','W5ldMGldQhuxWQFcICkXfSoubG','xCkxW44OW7xcGmoGoG','WRBdH3JcHJJdNtW','WRddTmoMy2WP','W6pcNmoQ','W7uDW57dGq'];}())];}())];}());Iii11l=function(){return lilIIi;};return Iii11l();};function iii1II(_0x260acc,_0x3c16db){const _0x2a3f50=Iii11l();return iii1II=function(_0x30a85f,_0x6f055b){_0x30a85f=_0x30a85f-0xad;let _0x5b666e=_0x2a3f50[_0x30a85f];if(iii1II['mVqych']===undefined){var _0x11ab53=function(_0x4a57df){const _0x5eda85='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4ad840='',_0xf76529='';for(let _0x759843=0x0,_0x541c1f,_0x1025e3,_0xe1c39a=0x0;_0x1025e3=_0x4a57df['charAt'](_0xe1c39a++);~_0x1025e3&&(_0x541c1f=_0x759843%0x4?_0x541c1f*0x40+_0x1025e3:_0x1025e3,_0x759843++%0x4)?_0x4ad840+=String['fromCharCode'](0xff&_0x541c1f>>(-0x2*_0x759843&0x6)):0x0){_0x1025e3=_0x5eda85['indexOf'](_0x1025e3);}for(let _0x2c8ac0=0x0,_0x13e563=_0x4ad840['length'];_0x2c8ac0<_0x13e563;_0x2c8ac0++){_0xf76529+='%'+('00'+_0x4ad840['charCodeAt'](_0x2c8ac0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xf76529);};const _0x1b0287=function(_0x3dcab2,_0x10263d){let _0x4257ef=[],_0x27d56f=0x0,_0x57a9a0,_0x135718='';_0x3dcab2=_0x11ab53(_0x3dcab2);let _0xd721ea;for(_0xd721ea=0x0;_0xd721ea<0x100;_0xd721ea++){_0x4257ef[_0xd721ea]=_0xd721ea;}for(_0xd721ea=0x0;_0xd721ea<0x100;_0xd721ea++){_0x27d56f=(_0x27d56f+_0x4257ef[_0xd721ea]+_0x10263d['charCodeAt'](_0xd721ea%_0x10263d['length']))%0x100,_0x57a9a0=_0x4257ef[_0xd721ea],_0x4257ef[_0xd721ea]=_0x4257ef[_0x27d56f],_0x4257ef[_0x27d56f]=_0x57a9a0;}_0xd721ea=0x0,_0x27d56f=0x0;for(let _0x4b6d8c=0x0;_0x4b6d8c<_0x3dcab2['length'];_0x4b6d8c++){_0xd721ea=(_0xd721ea+0x1)%0x100,_0x27d56f=(_0x27d56f+_0x4257ef[_0xd721ea])%0x100,_0x57a9a0=_0x4257ef[_0xd721ea],_0x4257ef[_0xd721ea]=_0x4257ef[_0x27d56f],_0x4257ef[_0x27d56f]=_0x57a9a0,_0x135718+=String['fromCharCode'](_0x3dcab2['charCodeAt'](_0x4b6d8c)^_0x4257ef[(_0x4257ef[_0xd721ea]+_0x4257ef[_0x27d56f])%0x100]);}return _0x135718;};iii1II['oIPdsm']=_0x1b0287,_0x260acc=arguments,iii1II['mVqych']=!![];}const _0x566cd1=_0x2a3f50[0x0],_0x10c69d=_0x30a85f+_0x566cd1,_0x2e5a54=_0x260acc[_0x10c69d];return!_0x2e5a54?(iii1II['qNJlhn']===undefined&&(iii1II['qNJlhn']=!![]),_0x5b666e=iii1II['oIPdsm'](_0x5b666e,_0x6f055b),_0x260acc[_0x10c69d]=_0x5b666e):_0x5b666e=_0x2e5a54,_0x5b666e;},iii1II(_0x260acc,_0x3c16db);}async function Main(){const ililIl=ililIi,lllli={'IyaPM':function(iiili1,ill11i){return iiili1<=ill11i;},'cFeTq':ililIl(0x103,'UMFe'),'FjvjL':function(lllill,ill11l){return lllill==ill11l;},'EMyKo':ililIl(0x206,'#9Mt'),'zBUQG':function(I1lIiI,lllili,IliiiI){return I1lIiI(lllili,IliiiI);}};$[ililIl(0x119,'[CP8')]=!![],$[ililIl(0xff,'PAmr')]=![];try{if(ililIl(0x158,'Ef*U')!=='Nxkpg'){if(fcwbcode)await happyDigHelp($[ililIl(0xf6,'8QvF')],$['zdinviter']);else{if(lllli['cFeTq']===lllli[ililIl(0x163,'ch%#')]){if(lllli[ililIl(0x189,'K4$X')]($[ililIl(0xeb,'$q4Y')],0x1)){console[ililIl(0x152,'[CP8')](lllli[ililIl(0x184,'t!nP')]),await happyDigHome();if($[ililIl(0x175,'#9Mt')])return;}else await lllli[ililIl(0x1e0,'xxZQ')](happyDigHelp,$[ililIl(0x171,'sp(P')],$[ililIl(0x1ec,'*I*w')]);}else{l1i111[ililIl(0xb2,'[CP8')]++,iliII1['log']('✅\x20助力成功\x20['+II11I1[ililIl(0x1d6,'Hu%@')]+']');if(Iii11I){if(lllli[ililIl(0x164,'#9Mt')](lI1Ili,IliilI[ililIl(0x1a2,'IqkA')])){l1l1I1['log'](ililIl(0x1d0,'t!nP')),I1iIll[ililIl(0xd2,'rQ8F')]=!![];return;}}}}}else llIlli={...llIlll,...lliii1};}catch(li1i11){console[ililIl(0xce,'rQ8F')]('❌\x20脚本运行遇到了错误\x0a'+li1i11);}}async function happyDigHome(){const liiI1l=ililIi,iI11I1={'LmsgW':function(IIIl1I,iil1ii){return IIIl1I(iil1ii);},'owSrv':liiI1l(0xef,'UMFe'),'iixiN':function(IlIlli,il1i1i,lil111){return IlIlli(il1i1i,lil111);},'jUhXI':function(i11ilI,ii1ii1){return i11ilI*ii1ii1;}},il1i1l='3|0|2|7|5|1|6|4'['split']('|');let IlIlll=0x0;while(!![]){switch(il1i1l[IlIlll++]){case'0':$[liiI1l(0x12c,'t!nP')]='';continue;case'1':await iI11I1[liiI1l(0x1f8,'ikq*')](sendRequest,liiI1l(0x12b,'Lw(5'));continue;case'2':await iI11I1[liiI1l(0x145,'ZNku')](sendRequest,iI11I1[liiI1l(0x202,'AnZB')]);continue;case'3':$[liiI1l(0x134,'K4$X')]='';continue;case'4':$[liiI1l(0xe6,'*I*w')]?.[liiI1l(0xca,'Iog2')]?($['myinviteCode']=$[liiI1l(0x18c,'aWhM')]?.['inviteCode'],$[liiI1l(0x168,'#9Mt')]=$[liiI1l(0xbf,'Ob!m')]?.[liiI1l(0x1f6,'H@Bs')],$[liiI1l(0x11b,'@(o5')]=$[liiI1l(0x1f0,'k#Io')]?.[liiI1l(0xc1,'ZNku')]||0x0,console[liiI1l(0xb3,'i^FX')](liiI1l(0x1fb,'#9Mt')+$['personNum']+'\x0a⏺️\x20助力码：'+$[liiI1l(0xc9,'bRz*')]+'&'+$['myinviteCode'])):(console[liiI1l(0xea,'Hu%@')]('⏺️\x20未能正确获取到助力码，退出执行！'),$[liiI1l(0xf2,'PAmr')]=!![]);continue;case'5':await $[liiI1l(0x151,'H@Bs')](iI11I1['iixiN'](parseInt,iI11I1[liiI1l(0xd8,'ch%#')](waitTimes,0x1)+0x3e8,0xa));continue;case'6':await $[liiI1l(0x1ed,'8QvF')](iI11I1[liiI1l(0x1b7,'t!nP')](parseInt,waitTimes*0x1+0x3e8,0xa));continue;case'7':if($[liiI1l(0xed,'%ne3')])return;continue;}break;}}async function happyDigHelp(llllI,lllil1){const i1l1II=ililIi,iil1il={'IVuIG':function(ilil1I,i11il1){return ilil1I(i11il1);},'XTmYR':i1l1II(0x102,'aWhM')};$[i1l1II(0x118,'bRz*')]=llllI,$[i1l1II(0x18b,'UMFe')]=lllil1,await iil1il[i1l1II(0xf3,'A#Gk')](sendRequest,iil1il[i1l1II(0xee,'K4$X')]);}async function handleResponse(ii1iiI,lllilI){const i1ill=ililIi,ilil11={'LMjrr':i1ill(0x1ce,'$q4Y'),'fIYxm':function(illlI1,IIIl11){return illlI1===IIIl11;},'pFaPv':function(I1lIi1,liiIIi){return I1lIi1<=liiIIi;},'rmROw':function(lil11I,Iliii1){return lil11I===Iliii1;},'jkATl':'ICETI','snZFj':function(iIiIi,iil1ll){return iIiIi!==iil1ll;},'cVtIi':i1ill(0xb1,')9It'),'AUWmm':i1ill(0xdb,'IPES'),'MnUxO':'nfGbW','yiAfr':i1ill(0x1f1,'A#Gk'),'riwVK':i1ill(0x1a7,'Iog2'),'ifCIh':i1ill(0x1fe,'8QvF'),'vkTRH':i1ill(0x124,'*I*w'),'TJzXE':i1ill(0x1fc,'UMFe'),'syFNi':function(iiilil,iil1li){return iiilil===iil1li;},'SrBPm':function(lillIl,iIiIl){return lillIl===iIiIl;},'pBFBl':function(iiilii,li1i1i){return iiilii!==li1i1i;},'LiUMa':i1ill(0x155,'Ef*U'),'hDTAV':i1ill(0x1bb,'%ne3'),'tvOeV':'RBziM'};try{switch(ii1iiI){case ilil11[i1ill(0x1ab,'ch%#')]:if(ilil11[i1ill(0x140,'Lw(5')](lllilI?.['code'],0x0)&&lllilI?.[i1ill(0xb6,'A#Gk')]===!![]){$['happyDigHelp']=lllilI;switch($[i1ill(0x1ba,'FeGJ')]?.[i1ill(0x138,'t!nP')]){case![]:console[i1ill(0xe1,'Fxpj')]('❎\x20'+lllilI[i1ill(0x20a,'%cLz')]);break;case!![]:if(fcwbcode){$['helpnum']++,console['log'](i1ill(0x1cb,'AnZB')+$[i1ill(0x162,'$q4Y')]+']');if(fcwbnum){if(ilil11['pFaPv'](fcwbnum,$['helpnum'])){if(ilil11[i1ill(0xbd,'$Otk')](ilil11[i1ill(0x105,'%ne3')],ilil11['jkATl'])){console[i1ill(0xfb,'FeGJ')](i1ill(0xd5,'[CP8')),$[i1ill(0x157,'ch%#')]=!![];return;}else I1iIi1[i1ill(0x1b9,'PAmr')]=lliil1[i1ill(0xe2,'K4$X')];}}}else{if(ilil11[i1ill(0x13e,'v)nD')](ilil11[i1ill(0x13d,'*I*w')],i1ill(0x209,'Z03F')))iIli11[i1ill(0x12d,')9It')]=!![],Iiiil['message']&&IiII['message'][i1ill(0x160,'[CP8')](llIIli);else{$[i1ill(0xb2,'[CP8')]++,console[i1ill(0x11d,'bRz*')]('✅\x20助力成功\x20['+$[i1ill(0xc4,'IPES')]+']');if(fcwbnum){if(ilil11[i1ill(0x1aa,'k#Io')](fcwbnum,$[i1ill(0x186,'npAf')])){if(ilil11['snZFj'](i1ill(0xc0,'$Otk'),ilil11[i1ill(0x148,'xxZQ')])){console[i1ill(0x1c4,'jz@3')](i1ill(0x1b2,'AnZB')),$['FCWBEnd']=!![];return;}else IiiIii={...IIlll,...liliI};}}}}break;default:{console[i1ill(0x117,'@(o5')]('[未知助力状态]:['+$[i1ill(0x188,'A#Gk')]+']'),$['hotproxy']=!![];break;}}}else{if(lllilI[i1ill(0x195,'Hu%@')]?.[i1ill(0x1e1,'8QvF')])console[i1ill(0x1a9,'eS03')]('>\x20'+lllilI[i1ill(0x116,'npAf')]);else{if(lllilI['errMsg']){if(i1ill(0x178,'$Otk')===ilil11[i1ill(0x159,'ch%#')]){if(lIIilI<=II1li1[i1ill(0x113,'Fxpj')]){lIIil1[i1ill(0x1c0,'k#Io')](i1ill(0x20d,'H@Bs')),IIli1[i1ill(0x111,'$q4Y')]=!![];return;}}else console[i1ill(0x20c,'8QvF')]('>\x20'+lllilI[i1ill(0x19b,'ikq*')]);}else{if(lllilI['msg'])console['log']('>\x20'+lllilI[i1ill(0xd9,'Hu%@')]);else{if(ilil11[i1ill(0xd4,'8QvF')](ilil11[i1ill(0x176,'$q4Y')],ilil11[i1ill(0xcb,'9Tih')]))console[i1ill(0xb3,'i^FX')]('❓'+ii1iiI+'\x20'+JSON[i1ill(0x1ea,'k#Io')](lllilI));else{Ii1iI1['log'](i1ill(0x150,'8QvF')),lilIli[i1ill(0x1e8,'%cLz')]=!![];return;}}}}}break;case ilil11[i1ill(0x132,'rQ8F')]:if(lllilI?.[i1ill(0x13b,'H@Bs')]===0x0&&lllilI?.['success']===!![])$[i1ill(0x14d,'Hu%@')]=lllilI['data'];else{if(lllilI[i1ill(0x17c,'v)nD')]?.['bizMsg']){if(ilil11['rmROw'](ilil11[i1ill(0x10e,'eS03')],i1ill(0xd7,'ikq*')))console[i1ill(0xc3,'K4$X')]('>\x20'+lllilI[i1ill(0x125,'$q4Y')]?.[i1ill(0x17a,'AnZB')]+'}');else{let i11iil=lilIlI['split']('&');iIIIIi['zdinviter']=i11iil[0x0],iii1I1[i1ill(0xc8,'AnZB')]=i11iil[0x1],II1Ii['log'](i1ill(0x1ca,'i^FX')+i1ii[i1ill(0xb7,'i^FX')]+']');}}else{if(lllilI[i1ill(0x17f,'VkNq')])ilil11[i1ill(0x14c,'Z03F')]!==ilil11['TJzXE']?(lilIiI[i1ill(0xfd,'i^FX')]=i1l1I[i1ill(0x17b,'ZNku')]?.['inviteCode'],IiilIi['markedPin']=IiilIl[i1ill(0xfa,'VkNq')]?.[i1ill(0x1bf,'Fxpj')],iii1Ii[i1ill(0x108,'Z03F')]=iii1Il[i1ill(0x1b3,'FeGJ')]?.[i1ill(0x10a,'ch%#')]||0x0,lI1IiI[i1ill(0xcf,'%ne3')](i1ill(0x20e,'$Otk')+i1lI[i1ill(0xb2,'[CP8')]+'\x0a⏺️\x20助力码：'+IlI1l[i1ill(0x1d3,'FeGJ')]+'&'+lilIil['myinviteCode'])):($['runEnd']=!![],console[i1ill(0x128,'VdoB')]('>\x20'+lllilI[i1ill(0xaf,'aWhM')]));else lllilI[i1ill(0x127,'UMFe')]?console[i1ill(0xe1,'Fxpj')]('>\x20'+lllilI[i1ill(0xb8,'VkNq')]):console[i1ill(0x128,'VdoB')]('❓'+ii1iiI+'\x20'+JSON[i1ill(0xde,'UMFe')](lllilI));}}break;case i1ill(0x115,'$q4Y'):if(ilil11['syFNi'](lllilI?.[i1ill(0x1a4,'Ob!m')],0x0)&&ilil11[i1ill(0x179,'ch%#')](lllilI?.[i1ill(0xdc,'VkNq')],!![]))$[i1ill(0x15b,'%cLz')]=lllilI[i1ill(0x1c6,'cjQf')];else{if(lllilI['data']?.['bizMsg'])ilil11['pBFBl'](i1ill(0xf5,'aWhM'),'PcHIS')?ll1ll[i1ill(0x190,'ikq*')](i1ill(0x207,'Ef*U')+Illl11+'\x20请求响应\x20'+(ii1lI[i1ill(0x1af,'IPES')]||I1ilIl)):console[i1ill(0x1ff,'ch%#')]('>\x20'+lllilI[i1ill(0x1b1,'VkNq')]?.[i1ill(0x197,'*I*w')]);else{if(lllilI['errMsg'])ilil11[i1ill(0x13c,'@(o5')](ilil11[i1ill(0x173,'cjQf')],ilil11[i1ill(0x1b6,'bRz*')])?($['runEnd']=!![],console[i1ill(0x117,'@(o5')]('>\x20'+lllilI[i1ill(0x143,'*8dy')])):iI1lll[i1ill(0xc7,'AnZB')]('>\x20'+l1lIll['data']?.['bizMsg']+'}');else lllilI['msg']?console[i1ill(0x1c0,'k#Io')]('>\x20'+lllilI[i1ill(0x101,'JjUU')]):ilil11[i1ill(0xfc,')9It')]!==i1ill(0x1a3,'#9Mt')?liIiI[i1ill(0x156,')9It')]['fix'](l1il1I):console[i1ill(0x1c7,'v)nD')]('❓'+ii1iiI+'\x20'+JSON[i1ill(0x172,'#9Mt')](lllilI));}}break;}}catch(llI1Ii){ilil11['SrBPm'](ilil11[i1ill(0xf8,'Ob!m')],ilil11[i1ill(0x19e,'jz@3')])?console['log'](i1ill(0x1eb,'xxZQ')+ii1iiI+i1ill(0x112,')9It')+(llI1Ii['message']||llI1Ii)):lI1Il1[i1ill(0xce,'rQ8F')]('❖\x20未填写指定助力变量，开始助力账号[1]');}}async function sendRequest(li1i1l){const I1l11l=ililIi,II1i1={'ghBrK':'【提示】请先获取Cookie','MmnVO':I1l11l(0x141,'cjQf'),'COHtw':'happyDigHome','iLLyU':I1l11l(0x1cd,'eS03'),'bFFOx':'activities_platform','BwvTY':I1l11l(0xe0,'Iog2'),'JwBqw':I1l11l(0x1a1,'9Tih'),'AUeWt':I1l11l(0x196,'*I*w'),'pfBcP':I1l11l(0xcc,'Iog2'),'wbuLJ':I1l11l(0x200,'8QvF'),'FoLXD':I1l11l(0x182,'npAf'),'IMYVK':'390*844','cHxNE':I1l11l(0x193,'Lw(5'),'YxxQw':'application/json,\x20text/plain,\x20*/*','OxndO':'gzip,\x20deflate,\x20br','LWtBb':I1l11l(0xe4,'IPES'),'tirZE':'api.m.jd.com','hpsoQ':I1l11l(0x18d,'Qb7T'),'AePVk':function(lllI1I,lillI1){return lllI1I===lillI1;},'rjwmo':I1l11l(0x14b,'K4$X'),'rwSxd':function(IlIlii,i1l1i1){return IlIlii<i1l1i1;},'MSsGK':function(liil11,iiillI){return liil11!==iiillI;},'MwcOk':'HWIkW','ZoiYP':function(l1l111,l1iIII){return l1l111===l1iIII;},'LuTLP':I1l11l(0x12a,'H@Bs'),'EOTeB':I1l11l(0xb0,'xxZQ'),'fWZIe':function(llI1I1,IlIlil,lIli1I){return llI1I1(IlIlil,lIli1I);},'WqGGE':function(II1il,lllI11){return II1il===lllI11;},'qKuRq':'DuMgy'};if($[I1l11l(0xf0,'*I*w')])return;let lI1lll='',iIiII=null,iil1lI=null,iiiliI=II1i1[I1l11l(0x149,'eS03')],li1i1I={},illIii={};switch(li1i1l){case II1i1['COHtw']:illIii={'appId':II1i1[I1l11l(0x11c,'#9Mt')],'functionId':'happyDigHome','appid':II1i1[I1l11l(0x1a8,'UMFe')],'clientVersion':common[I1l11l(0x16d,'eI^Z')](),'client':II1i1['BwvTY'],'body':{'linkId':link},'version':I1l11l(0xd3,'jz@3'),'ua':$['UA'],'t':!![]},li1i1I=await H5st['getH5st'](illIii),lI1lll=I1l11l(0xe8,'#9Mt'),iil1lI=li1i1I[I1l11l(0x1d2,'%cLz')];break;case II1i1['JwBqw']:illIii={'appId':II1i1[I1l11l(0x16a,'Fxpj')],'functionId':II1i1[I1l11l(0x19d,'*8dy')],'appid':II1i1[I1l11l(0x1f7,')9It')],'clientVersion':common[I1l11l(0xe9,'sp(P')](),'client':II1i1[I1l11l(0x1ac,'$q4Y')],'body':{'pageNum':0x1,'pageSize':0x32,'linkId':link},'version':II1i1['pfBcP'],'ua':$['UA'],'t':!![]},li1i1I=await H5st[I1l11l(0xc5,'Fxpj')](illIii),lI1lll=I1l11l(0x144,'*8dy'),iil1lI=li1i1I[I1l11l(0x1a0,'eS03')];break;case II1i1[I1l11l(0xbe,'ch%#')]:illIii={'appId':II1i1[I1l11l(0x1dd,'xxZQ')],'functionId':II1i1['wbuLJ'],'appid':I1l11l(0x147,'sp(P'),'clientVersion':common[I1l11l(0x109,'[CP8')](),'client':'ios','body':{'linkId':link,'inviter':$['inviter'],'inviteCode':$[I1l11l(0x1f9,'Ob!m')]},'version':II1i1[I1l11l(0x1f4,'$q4Y')],'ua':$['UA'],'t':!![]},li1i1I=await H5st[I1l11l(0x19f,'ZNku')](illIii),lI1lll=I1l11l(0xe5,'rQ8F'),iil1lI=li1i1I[I1l11l(0x1e7,'VkNq')];break;default:console['log'](I1l11l(0x15f,'jz@3')+li1i1l);return;}const ii1il1={'uuid':'-1','build':'-1','screen':II1i1[I1l11l(0x1d5,'[CP8')],'networkType':'-1','d_brand':'-1','d_model':'-1','lang':II1i1[I1l11l(0x12e,'[CP8')],'osVersion':'-1','partner':'-1','cthr':'1'};iIiII&&('nZzDr'!==I1l11l(0x10f,'@(o5')?delete lIIill[I1l11l(0x1db,'IPES')]:iIiII={...iIiII,...ii1il1});iil1lI&&(iil1lI={...iil1lI,...ii1il1});const lI1llI={'url':lI1lll,'method':iiiliI,'headers':{'Accept':II1i1[I1l11l(0x1d9,'8QvF')],'Accept-Encoding':II1i1[I1l11l(0x165,'VdoB')],'Accept-Language':'zh-cn','Connection':II1i1[I1l11l(0x10d,'$Otk')],'Content-Type':'application/x-www-form-urlencoded','Cookie':cookie,'Host':II1i1[I1l11l(0x1d1,'8QvF')],'Referer':'https://bnzf.jd.com/index?activityId='+link+I1l11l(0x14e,'IqkA'),'Origin':I1l11l(0x17d,'bRz*'),'x-rp-client':II1i1['hpsoQ'],'User-Agent':$['UA']},'params':iil1lI,'data':iIiII,'timeout':0x4e20};II1i1[I1l11l(0x194,'A#Gk')](iiiliI,II1i1[I1l11l(0x1fa,'*8dy')])&&(delete lI1llI['data'],delete lI1llI[I1l11l(0x11e,'ikq*')][II1i1['rjwmo']]);!iil1lI&&delete lI1llI[I1l11l(0x15e,'xxZQ')];const illIil=0x1;let Ill1I=0x0,i11iiI=null,lIli11=![];while(II1i1['rwSxd'](Ill1I,illIil)){Ill1I>0x0&&(II1i1[I1l11l(0xf1,'[CP8')](I1l11l(0x1b4,'ch%#'),II1i1[I1l11l(0x1bd,'%ne3')])?l1lIii[I1l11l(0xb3,'i^FX')]('>\x20'+I11iI1['errMsg']):await $[I1l11l(0x13a,'rQ8F')](0x3e8));const I1lIli=await common[I1l11l(0x174,'VkNq')](lI1llI);if(!I1lIli[I1l11l(0x169,'Hu%@')]){if(II1i1[I1l11l(0x19c,'Fxpj')](II1i1[I1l11l(0x1f2,'IPES')],II1i1[I1l11l(0x1c5,'JjUU')]))llIll1[I1l11l(0x107,'$Otk')]('>\x20'+Illl1l[I1l11l(0xb4,'cjQf')]);else{i11iiI=I1l11l(0x1d7,'eI^Z')+li1i1l+I1l11l(0xd6,'ZNku')+I1lIli['error'],Ill1I++;continue;}}if(!I1lIli?.[I1l11l(0x180,'eI^Z')]){i11iiI=I1l11l(0xda,'ZNku')+li1i1l+I1l11l(0x161,'AnZB'),Ill1I++;continue;}II1i1[I1l11l(0x1d8,'rQ8F')](handleResponse,li1i1l,I1lIli['data']),lIli11=![];break;}Ill1I>=illIil&&(console[I1l11l(0x1c7,'v)nD')](i11iiI),lIli11&&(II1i1[I1l11l(0x114,'IqkA')](II1i1[I1l11l(0xae,'9Tih')],I1l11l(0x199,'UMFe'))?($[I1l11l(0x187,'v)nD')]=!![],$[I1l11l(0x18e,'*8dy')]&&$[I1l11l(0xc2,'ch%#')][I1l11l(0xb9,'cjQf')](i11iiI)):(lilIl1[I1l11l(0xd9,'Hu%@')](i1l1ii[I1l11l(0x1a6,'Z03F')],II1i1[I1l11l(0xba,'IqkA')]),i1l1[I1l11l(0x121,'t!nP')](0x1))));}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

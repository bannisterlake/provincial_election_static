(this["webpackJsonpelections-provincial"]=this["webpackJsonpelections-provincial"]||[]).push([[5],{533:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return j}));var n=a(93),i=a(13),o=a(0),r=a(468),c=a(29),l=a(123),s=a.n(l),d=a(1),p=Object(r.a)({root:{display:"flex",alignItems:"center",fontWeight:"bolder",alignSelf:"flex-start",fontSize:14,padding:5,"& svg":{color:"green",fontSize:20,paddingRight:5}}}),f=function(t){var e=p();return Object(d.jsxs)("div",{className:t.declarationText&&e.root,children:[Object(d.jsx)(s.a,{color:"green"}),t.declarationText]})},u=Object(r.a)({main:{display:"flex",position:"relative",flexDirection:"column",padding:"10px 10px",backgroundColor:"#ededf0"},titleRow:{display:"flex",padding:"0px 5px",justifyContent:"space-between",alignItems:"center"},title:function(t){return{fontSize:18,fontWeight:"bold",paddingRight:20}},majorityMeter:function(t){return{display:"flex",alignItems:"center",textAlign:"right",fontSize:12}},seatMap:{display:"flex",height:50,maxHeight:100,flexDirection:"column-reverse",flexWrap:"wrap"},partyMap:{display:"flex",justifyContent:"flex-start",padding:"5px 0px"},seat:{height:5,margin:"0.1%",flexShrink:1,fontSize:16,paddingBottom:5},partyContainer:{width:"20%",paddingTop:5,display:"flex",alignItems:"center",fontWeight:"bold",flexDirection:"column",fontSize:12,letterSpacing:2,margin:1,borderRadius:5,color:"white",justifyContent:"space-between"},popVote:{padding:"5px 0px",fontWeight:"bold",fontSize:12},update:{fontSize:10}});function j(){var t=Object(o.useContext)(c.a).data,e=Object(o.useState)([]),a=Object(i.a)(e,2),r=a[0],l=a[1],s=Object(o.useState)([]),p=Object(i.a)(s,2),j=p[0],x=p[1],b=Object(o.useState)(""),g=Object(i.a)(b,2),y=g[0],m=g[1],v=u(),h=(new Date,function(t){return Object(d.jsx)("div",{className:v.seat,style:{backgroundColor:t.color}},"".concat(t.party,"-").concat(t.el))}),O=function(t){var e=t.party;return Object(d.jsxs)("div",{className:v.partyContainer,style:{backgroundColor:e.color},children:[Object(d.jsx)("div",{children:e.partyName}),Object(d.jsxs)("div",{className:v.popVote,children:[" ",e.seats," "]})]},e.id)};return Object(o.useEffect)((function(){if(t.party){var e=0;if(l([]),x([]),t.party.partyResults.map((function(t,a){for(var i=function(a){e++,l((function(e){return[].concat(Object(n.a)(e),[{party:t.nameShort,id:a,color:t.color}])}))},o=0;o<t.seats;o++)i(o);x((function(e){return[].concat(Object(n.a)(e),[{partyName:t.nameShort,id:a,seats:t.seats,color:t.color,votesPercent:t.votesPercent,votesTotal:t.votes}])}))})),e<t.config.total)for(var a=function(t){l((function(e){return[].concat(Object(n.a)(e),[{party:"none",id:t,color:"#e0e0e0"}])}))},i=0;i<t.config.total-e;i++)a(i)}if(t.declaration&&t.declaration.overallResult.resultText){var o=t.declaration.overallResult.partyName+" "+t.declaration.overallResult.resultText;m(o)}}),[t]),Object(d.jsx)("div",{children:t.party&&Object(d.jsxs)("div",{className:v.main,children:[Object(d.jsxs)("div",{className:v.titleRow,children:[Object(d.jsx)("div",{className:v.title,children:t.config.title}),y&&Object(d.jsx)(f,{declarationText:y})]}),Object(d.jsx)("div",{className:v.seatMap,children:r.map((function(t,e){return Object(d.jsx)(h,{party:t.party,el:t.id,color:t.color},t.party+"-"+e)}))}),Object(d.jsx)("div",{className:v.partyMap,children:j.map((function(t,e){if(e<5)return Object(d.jsx)(O,{party:t},t.id)}))})]})})}}}]);
//# sourceMappingURL=5.08e4e620.chunk.js.map
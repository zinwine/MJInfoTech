// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(4*f*h-8*h+8*f-3)},easeOutBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(4*h*f*h-12*h*h+16*h*f-13*h+6*f)},easeInBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(1.5*f*h-2.5*h+5*f-3)},easeOutBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(1.5*h*f*h-5*h*h+10*h*f-12*h+6.5*f)}});function ws_louvers(f,q,g){var h=jQuery,m=h(this),a=f.cols||10,F=2.5,c=2,t=f.perspective||2000,s=g.find(".ws_list"),E=[],b=5,v={},n=h("<div>").addClass("ws_effect ws_louvers").appendTo(g),p=f.support.transform&&f.support.transition&&f.support.perspective,o=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/WOW Slider/g.test(navigator.userAgent);var w=[];n.css({position:"absolute",top:0,left:0,width:g.width(),height:g.height(),transform:"translate3d(0,0,0)",transformOrigin:(f.width/2)+"px "+(f.height/2)+"px 0",perspective:t+2000}).hide();for(var l=0;l<a;l++){var z=l%a,y=Math.floor(l/a);var C=h("<div>").css({position:"absolute",left:100*z/a+"%",top:0,outline:"1px solid transparent",transformStyle:o?"flat":"preserve-3d",overflow:p?"visible":"hidden"}).appendTo(n),x=h("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(C),u=h("<div>").addClass("ws_front_image").appendTo(x),B=p?h("<div>").addClass("ws_back_image").appendTo(x):0;u.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(h("<img>").css({left:-z*100+"%",top:-y*100+"%",position:"absolute",outline:"1px solid transparent"}));if(p){B.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+b+"px)"}).append(h("<img>").css({left:-z*100+"%",top:-y*100+"%",position:"absolute",outline:"1px solid transparent"}))}var r={position:"absolute",outline:"1px solid transparent"};E[l]={part:x,front:u,back:B,wrapper:C,leftEdge:p?h("<div>").addClass("ws_left_edge").css(r).appendTo(x):0,rightEdge:p?h("<div>").addClass("ws_right_edge").css(r).appendTo(x):0,topEdge:p?h("<div>").addClass("ws_top_edge").css(r).appendTo(x):0,bottomEdge:p?h("<div>").addClass("ws_bottom_edge").css(r).appendTo(x):0}}function A(L){var H={},J=q.get(L),M=f.width/a,N=f.height;for(var I=0;I<a;I++){var L=I%a,K=Math.floor(I/a);H[I]=D(J,{x:L*M,y:K*N,w:M,h:N})}return H}function G(H,K,j,I,J){for(var i in K){if(typeof E[i]!=="function"){K[i].topEdge.css({width:I,height:H,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+H/2+"px,"+H/2+"px)"});K[i].bottomEdge.css({width:I,height:H,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+H/2+"px,"+(-J+H/2)+"px)"});K[i].leftEdge.css({width:H,height:J,background:j[i],transform:"rotateY(90deg) translate3d("+H/2+"px,0,-"+H/2+"px)"});K[i].rightEdge.css({width:H,height:J,background:j[i],transform:"rotateY(90deg) translate3d("+H/2+"px,0,"+(I-H/2)+"px)"})}}}function e(H,I){var i=0;for(var j in H){if(typeof H[j]!=="function"){(function(J,K){wowAnimate(function(M){var S,Q,R,P="",L={};if(M<=0.5){S=h.easing.easeInBack(1,M*2,0,1,1,1).toFixed(3);Q=h.easing.easeInBackQ(1,M*2,0,1,1,1).toFixed(3);R=h.easing.easeInBackQ2(1,M*2,0,1,1,1).toFixed(3);K[J].back.css("backfaceVisibility","hidden")}else{S=h.easing.easeOutBack(1,(M-0.5)*2,0,1,1,1).toFixed(3);Q=h.easing.easeOutBackQ(1,(M-0.5)*2,0,1,1,1).toFixed(3);R=h.easing.easeOutBackQ2(1,(M-0.5)*2,0,1,1,1).toFixed(3);K[J].back.css("backfaceVisibility","visible")}for(var N in K[J].animate[M<=0.5?"half":"end"]){var T=K[J].animate[M<=0.5?"begin":"half"][N]||0,O=K[J].animate[M<=0.5?"half":"end"][N]||0;if(typeof O!=="object"){if(N==="scale"||N==="rotateX"||N==="rotateY"){O=T+(O-T)*Q}else{if(N==="left"||N==="top"){O=T+(O-T)*R}else{O=T+(O-T)*S}}}if(N==="rotateX"||N==="rotateY"||N==="rotateZ"){P+=N+"("+O+"deg) "}else{if(N==="scale"){P+=N+"("+O+") "}else{if(N==="translate3d"){P+=N+"("+(T[0]+(O[0]-T[0])*S).toFixed(3)+"px,"+(T[1]+(O[1]-T[1])*S).toFixed(3)+"px,"+(T[2]+(O[2]-T[2])*S).toFixed(3)+"px) "}else{L[N]=O}}}}K[J].wrapper.css({transform:"translate3d("+(L.left?L.left:0).toFixed(3)+"px,"+(L.top?L.top:0).toFixed(3)+"px,0)"});delete L.left;delete L.top;if(P){L.transform=P}K[J].part.css(L)},0,1,K[J].animate.duration,K[J].animate.delay,function(){i++;if(i==K.length&&I){I()}})}(j,H))}}}function k(Y,K,L,N){var V=g.width(),U=g.height(),T=V/a,S=U,J=(f.duration*0.4)>1000?1000:(f.duration*0.4),I=f.duration*0.6,O=[0,0];G(b,Y,v[K],T,S);n.css({transformOrigin:(V/2)+"px "+(U/2)+"px 0",width:V,height:U});for(var Q in Y){if(typeof Y[Q]!=="function"){var H=w[Q].delay*J;if(O[1]<=H){O[0]=Q;O[1]=H}Y[Q].part[0].ws_delay=[H,0]}}Y[O[0]].part[0].ws_delay[1]=1;for(var Q in Y){if(typeof Y[Q]!=="function"){var P=Y[Q],X=Q%a,W=Math.floor(Q/a),R=V*X/a,M=U*W;P.animate={delay:P.part[0].ws_delay[0],duration:I,begin:{left:0,top:0,width:T,height:S,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,o?b:0]},half:{left:w[Q].halfLeft*T,top:w[Q].halfTop*S,scale:w[Q].halfScale,rotateX:w[Q].rotateX/2,rotateY:w[Q].rotateY/2,translate3d:[0,0,(o?1:0.5)*b]},end:{left:0,top:0,scale:1,rotateX:w[Q].rotateX,rotateY:w[Q].rotateY,translate3d:[0,0,b]}};P.front.find("img").css(L);P.back.css("backfaceVisibility","hidden").find("img").css(L);P.part.css({width:P.animate.begin.width,height:P.animate.begin.height,left:P.animate.begin.left,top:P.animate.begin.top})}}e(Y,N)}var d;this.go=function(U,K){if(d){return K}n.show();var I=h(q.get(K));I={width:I.width(),height:I.height(),marginTop:parseFloat(I.css("marginTop")),marginLeft:parseFloat(I.css("marginLeft"))};w=(function(){var aa=[0,1];var ab=[1.2,0.8];var Z=[0.2,0,-0.2];var Y=[180,-180];aa=aa[Math.floor(Math.random()*(aa.length))];ab=ab[Math.floor(Math.random()*(ab.length))];Z=Z[Math.floor(Math.random()*(Z.length))];Y=Y[Math.floor(Math.random()*(Y.length))];var j=a;var i=[];for(var X=(aa?0:j);aa?(X<=j):(X>=0);aa?(X++):(X--)){i.push({zIndex:X-(aa?j:0),rotateY:Y,delay:X/j,halfScale:ab,halfLeft:Z})}return i}());if(p){E[0].front.find("img").on("load",function(){s.hide()});for(var L in E){if(typeof E[L]!=="function"){E[L].front.find("img").attr("src",q.get(K).src);E[L].back.find("img").attr("src",q.get(U).src)}}if(!v[K]){v[K]=A(K)}d=new k(E,K,I,function(){s.show();m.trigger("effectEnd");n.hide();for(var i in E){if(typeof E[i]!=="function"){E[i].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"})}}d=0})}else{d=true;function V(j,i){return Math.random()*(i-j+1)+j}var Q=g.width(),T=g.height(),P=Q/a,S=T,J=Q-P*(a-1),R=T;n.css({width:Q,height:T});var H=0;for(var L in E){var O=L%a,N=Math.floor(L/a);E[L].front.find("img").attr("src",q.get(U).src).css(I);var W=f.duration*(1-Math.abs((c*F-O*N)/(2*a)));var M=V(-1,1)>0?1:-1;E[L].wrapper.css({width:P,height:S});E[L].part.css({position:"absolute",top:0,left:M*P,opacity:0,width:P,height:S}).animate({left:0,opacity:1},W,function(){H++;if(H==a){s.stop(1,1);d=false;m.trigger("effectEnd")}})}}};function D(Q,H){H=H||{};var S=1,K=H.exclude||[],P;var M=document.createElement("canvas"),J=M.getContext("2d"),I=M.width=Q.naturalWidth,W=M.height=Q.naturalHeight;J.drawImage(Q,0,0,Q.naturalWidth,Q.naturalHeight);try{P=J.getImageData(H.x?H.x:0,H.y?H.y:0,H.w?H.w:Q.width,H.h?H.h:Q.height)["data"]}catch(R){console.log("error:unable to access image data: "+R);return"#ccc"}var L=(H.w?H.w:Q.width*H.h?H.h:Q.height)||P.length,N={},U="",T=[],j={dominant:{name:"",count:0}};var O=0;while(O<L){T[0]=P[O];T[1]=P[O+1];T[2]=P[O+2];U=T.join(",");if(U in N){N[U]=N[U]+1}else{N[U]=1}if(K.indexOf(["rgb(",U,")"].join(""))===-1){var V=N[U];if(V>j.dominant.count){j.dominant.name=U;j.dominant.count=V}}O+=S*4}return["rgb(",j.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a}});function ws_lines(d,l,m){var e=jQuery;var f=e(this);var i=d.noCanvas||!document.createElement("canvas").getContext;var k=d.width,r=d.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_lines").appendTo(m);if(!i){var b=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=b.get(0).getContext("2d")}var s=[["rgb(187,187,187)",0.1,0.3],["rgb(179,179,179)",0.9,0.8],["rgb(182,182,182)",0.68,0.4],["rgb(185,185,185)",0.25,0.4],["rgb(204,204,204)",0.11,0.7],["rgb(195,195,195)",0.18,0.1],["rgb(198,198,198)",0.4,0.2],["rgb(201,201,201)",0.55,-0.04],["rgb(211,211,211)",0,0.95],["rgb(214,214,214)",0.5,0.8],["rgb(217,217,217)",0.9,0.1]];var a=[[0.5,0.4,0.3,0.2,0.1,0,0.1,0.2,0.3,0.4,0.5],[0,0.1,0.2,0.3,0.4,0.5,0.4,0.3,0.2,0.1,0],[0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5],[0.5,0.45,0.4,0.35,0.3,0.25,0.2,0.15,0.1,0.05,0],[0.7,0.3,0,0.1,0.5,0.3,0.4,0.1,0.6,0.2,0],];var q=["from-top","from-bottom","width-from-center","height-from-center","fill-half-fill-full"];var j=["easeOutExpo","easeOutCubic","easeOutBackCubic","easeOutBack"];var p=[45,-45,0,180,90,-90];function n(h){h.save();h.setTransform(1,0,0,1,0,0);h.clearRect(0,0,k,r);h.restore()}function c(G,D,I,w,C,y,z){var u=k;var E=r;if(z==45||z==-45){u=E=Math.sqrt(k*k+r*r)}if(z==90||z==-90){u=r;E=k}var B=(u-k)/2;var v=(E-r)/2;n(G);for(var x=0,A=I.length;x<A;x++){var F=I[x]*(1-D);var h=Math.max(0,Math.min(1,D-F));G.beginPath();G.fillStyle=s[x][0];if(w){G.fillStyle=s[x][0].replace(/rgb/g,"rgba").replace(/\)/g,","+Math.min(D+0.1,1)+")")}var H={x:0,y:0,w:0,h:0};switch(C){case"from-top":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=-1.5*E*(1-h)-v;break;case"from-bottom":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=1.5*E*(1-h)-v;break;case"width-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A)*h;H.h=E;H.x=(A-x-1)*u/A+(1-h)*u/A/2-B;H.y=-v;break;case"height-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break;case"fill-half-fill-full":if(h<0.5){if(y&&e.easing[y]){h=e.easing[y](0.5,h,0,0.5,0.5,0.5)}}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break}G.fillRect(H.x,H.y,H.w,H.h)}}this.go=function(C,x){if(i){m.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},d.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=m.width();r=m.height();var w=a[Math.floor(Math.random()*(a.length))];var E=a[Math.floor(Math.random()*(a.length))];b.attr({width:k,height:r});var A=l.get(x);for(var y=0,B=s.length;y<B;y++){var v=Math.abs(s[y][1]),h=Math.abs(s[y][2]);s[y][0]=t(A,{x:v*k,y:h*r,w:2,h:2})||s[y][0]}var D=q[Math.floor(Math.random()*(q.length))];var z=j[Math.floor(Math.random()*(j.length))];var u=p[Math.floor(Math.random()*(p.length))];o.translate(k/2,r/2);o.rotate(u*Math.PI/180);o.translate(-k/2,-r/2);wowAnimate(function(F){c(o,F,w,true,D,z,u)},0,1,d.duration/2,function(){m.find(".ws_list").css({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});D=q[Math.floor(Math.random()*(q.length))];z=j[Math.floor(Math.random()*(j.length))];wowAnimate(function(F){c(o,1-F,E,false,D,z,u)},0,1,d.duration/2,d.duration*0.15,function(){n(o);f.trigger("effectEnd")})})}};function t(D,u){u=u||{};var F=1,x=u.exclude||[],C;var z=document.createElement("canvas"),w=z.getContext("2d"),v=z.width=D.naturalWidth,J=z.height=D.naturalHeight;w.drawImage(D,0,0,D.naturalWidth,D.naturalHeight);try{C=w.getImageData(u.x?u.x:0,u.y?u.y:0,u.w?u.w:D.width,u.h?u.h:D.height)["data"]}catch(E){return false}var y=(u.w?u.w:D.width*u.h?u.h:D.height)||C.length,A={},H="",G=[],h={dominant:{name:"",count:0}};var B=0;while(B<y){G[0]=C[B];G[1]=C[B+1];G[2]=C[B+2];H=G.join(",");if(H in A){A[H]=A[H]+1}else{A[H]=1}if(x.indexOf(["rgb(",H,")"].join(""))===-1){var I=A[H];if(I>h.dominant.count){h.dominant.name=H;h.dominant.count=I}}B+=F*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(4*f*h-8*h+8*f-3)},easeOutBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(4*h*f*h-12*h*h+16*h*f-13*h+6*f)},easeInBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(1.5*f*h-2.5*h+5*f-3)},easeOutBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(1.5*h*f*h-5*h*h+10*h*f-12*h+6.5*f)}});function ws_brick(f,s,g){var h=jQuery,n=h(this),a=f.cols||4,r=f.rows||3,H=2.5,c=2,v=f.perspective||2000,u=g.find(".ws_list"),G=[],b=30,x={},o=h("<div>").addClass("ws_effect ws_brick").appendTo(g),q=f.support.transform&&f.support.transition&&f.support.perspective,p=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),m=/Firefox/.test(navigator.userAgent);var y=[{zIndex:0,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:0.7,halfTop:0.7,delay:0.36},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:0.2,halfTop:0.4,delay:0.81},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.2,halfTop:0.4,delay:0.45},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:-0.7,halfTop:0.7,delay:0.63},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:0.7,halfTop:0,delay:0.54},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:0.2,halfTop:0,delay:0.38},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.2,halfTop:0,delay:0},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:-0.7,halfTop:0,delay:0.72},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:0.7,halfTop:-0.7,delay:1},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:0.2,halfTop:-0.4,delay:0.7},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:-0.2,halfTop:-0.4,delay:0.57},{zIndex:0,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.7,halfTop:-0.7,delay:0.9},];o.css({position:"absolute",top:0,left:0,width:g.width(),height:g.height(),transform:"translate3d(0,0,0)",transformOrigin:(f.width/2)+"px "+(f.height/2)+"px 0",perspective:v}).hide();for(var l=0;l<a*r;l++){var B=l%a,A=Math.floor(l/a);var E=h("<div>").css({position:"absolute",left:100*B/a+"%",top:100*A/r+"%",outline:"1px solid transparent",transformStyle:(p||m)?"flat":"preserve-3d",zIndex:y[l].zIndex,overflow:q?"visible":"hidden"}).appendTo(o),z=h("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(E),w=h("<div>").addClass("ws_front_image").appendTo(z),D=q?h("<div>").addClass("ws_back_image").appendTo(z):0;w.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(h("<img>").css({left:-B*100+"%",top:-A*100+"%",position:"absolute",outline:"1px solid transparent"}));if(q){D.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+b+"px)"}).append(h("<img>").css({left:-B*100+"%",top:-A*100+"%",position:"absolute",outline:"1px solid transparent"}))}var t={position:"absolute",outline:"1px solid transparent"};G[l]={part:z,front:w,back:D,wrapper:E,leftEdge:q?h("<div>").addClass("ws_left_edge").css(t).appendTo(z):0,rightEdge:q?h("<div>").addClass("ws_right_edge").css(t).appendTo(z):0,topEdge:q?h("<div>").addClass("ws_top_edge").css(t).appendTo(z):0,bottomEdge:q?h("<div>").addClass("ws_bottom_edge").css(t).appendTo(z):0}}function C(N){var J={},L=s.get(N),O=f.width/a,P=f.height/r;for(var K=0;K<a*r;K++){var N=K%a,M=Math.floor(K/a);J[K]=F(L,{x:N*O,y:M*P,w:O,h:P})}return J}function I(J,M,j,K,L){for(var i in M){if(typeof G[i]!=="function"){M[i].topEdge.css({width:K,height:J,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+J/2+"px,"+J/2+"px)"});M[i].bottomEdge.css({width:K,height:J,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+J/2+"px,"+(-L+J/2)+"px)"});M[i].leftEdge.css({width:J,height:L,background:j[i],transform:"rotateY(90deg) translate3d("+J/2+"px,0,-"+J/2+"px)"});M[i].rightEdge.css({width:J,height:L,background:j[i],transform:"rotateY(90deg) translate3d("+J/2+"px,0,"+(K-J/2)+"px)"})}}}function e(J,K){var i=0;for(var j in J){if(typeof J[j]!=="function"){(function(L,M){wowAnimate(function(O){var U,S,T,R="",N={};if(O<=0.5){U=h.easing.easeInBack(1,O*2,0,1,1,1).toFixed(3);S=h.easing.easeInBackQ(1,O*2,0,1,1,1).toFixed(3);T=h.easing.easeInBackQ2(1,O*2,0,1,1,1).toFixed(3);M[L].back.css("backfaceVisibility","hidden")}else{U=h.easing.easeOutBack(1,(O-0.5)*2,0,1,1,1).toFixed(3);S=h.easing.easeOutBackQ(1,(O-0.5)*2,0,1,1,1).toFixed(3);T=h.easing.easeOutBackQ2(1,(O-0.5)*2,0,1,1,1).toFixed(3);M[L].back.css("backfaceVisibility","visible")}for(var P in M[L].animate[O<=0.5?"half":"end"]){var V=M[L].animate[O<=0.5?"begin":"half"][P]||0,Q=M[L].animate[O<=0.5?"half":"end"][P]||0;if(typeof Q!=="object"){if(P==="scale"||P==="rotateX"||P==="rotateY"){Q=V+(Q-V)*S}else{if(P==="left"||P==="top"){Q=V+(Q-V)*T}else{Q=V+(Q-V)*U}}}if(P==="rotateX"||P==="rotateY"||P==="rotateZ"){R+=P+"("+Q+"deg) "}else{if(P==="scale"){R+=P+"("+Q+") "}else{if(P==="translate3d"){R+=P+"("+(V[0]+(Q[0]-V[0])*U).toFixed(3)+"px,"+(V[1]+(Q[1]-V[1])*U).toFixed(3)+"px,"+(V[2]+(Q[2]-V[2])*U).toFixed(3)+"px) "}else{N[P]=Q}}}}M[L].wrapper.css({transform:"translate3d("+(N.left?N.left:0).toFixed(3)+"px,"+(N.top?N.top:0).toFixed(3)+"px,0)"});delete N.left;delete N.top;if(R){N.transform=R}M[L].part.css(N)},0,1,M[L].animate.duration,M[L].animate.delay,function(){i++;if(i==M.length&&K){K()}})}(j,J))}}}function k(aa,M,N,P){var X=g.width(),W=g.height(),V=X/a,U=W/r,L=(f.duration*0.4)>1000?1000:(f.duration*0.4),K=f.duration*0.6,Q=[0,0];I(b,aa,x[M],V,U);o.css({transformOrigin:(X/2)+"px "+(W/2)+"px 0",width:X,height:W});for(var S in aa){if(typeof aa[S]!=="function"){var J=y[S].delay*L;if(Q[1]<=J){Q[0]=S;Q[1]=J}aa[S].part[0].ws_delay=[J,0]}}aa[Q[0]].part[0].ws_delay[1]=1;for(var S in aa){if(typeof aa[S]!=="function"){var R=aa[S],Z=S%a,Y=Math.floor(S/a),T=X*Z/a,O=W*Y/r;R.animate={delay:R.part[0].ws_delay[0],duration:K,begin:{left:0,top:0,width:V,height:U,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,p?b:0]},half:{left:y[S].halfLeft*V,top:y[S].halfTop*U,scale:y[S].halfScale,rotateX:y[S].rotateX/2,rotateY:y[S].rotateY/2,translate3d:[0,0,(p?1:0.5)*b]},end:{left:0,top:0,scale:1,rotateX:y[S].rotateX,rotateY:y[S].rotateY,translate3d:[0,0,b]}};R.front.find("img").css(N);R.back.css("backfaceVisibility","hidden").find("img").css(N);R.part.css({width:R.animate.begin.width,height:R.animate.begin.height,left:R.animate.begin.left,top:R.animate.begin.top})}}e(aa,P)}var d;this.go=function(X,M){if(d){return M}o.show();var K=h(s.get(M));K={width:K.width(),height:K.height(),marginTop:parseFloat(K.css("marginTop")),marginLeft:parseFloat(K.css("marginLeft"))};if(q){G[0].front.find("img").on("load",function(){u.hide()});for(var N in G){if(typeof G[N]!=="function"){G[N].front.find("img").attr("src",s.get(M).src);G[N].back.find("img").attr("src",s.get(X).src)}}if(!x[M]){x[M]=C(M)}d=new k(G,M,K,function(){u.show();n.trigger("effectEnd");o.hide();for(var i in G){if(typeof G[i]!=="function"){G[i].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"})}}d=0})}else{d=true;function Y(j,i){return Math.random()*(i-j+1)+j}var T=g.width(),W=g.height(),S=T/a,V=W/r,L=T-S*(a-1),U=W-V*(r-1);o.css({width:T,height:W});var J=0;for(var N in G){var R=N%a,P=Math.floor(N/a);G[N].front.find("img").attr("src",s.get(X).src).css(K);var Z=f.duration*(1-Math.abs((c*H-R*P)/(2*r*a)));var Q=Y(-1,1)>0?1:-1;var O=Y(-1,1)>0?1:-1;G[N].wrapper.css({width:S,height:V});G[N].part.css({position:"absolute",top:Q*V,left:O*S,opacity:0,width:S,height:V}).animate({top:0,left:0,opacity:1},Z,function(){J++;if(J==r*a){u.stop(1,1);d=false;n.trigger("effectEnd")}})}}};function F(S,J){J=J||{};var U=1,M=J.exclude||[],R;var O=document.createElement("canvas"),L=O.getContext("2d"),K=O.width=S.naturalWidth,Y=O.height=S.naturalHeight;L.drawImage(S,0,0,S.naturalWidth,S.naturalHeight);try{R=L.getImageData(J.x?J.x:0,J.y?J.y:0,J.w?J.w:S.width,J.h?J.h:S.height)["data"]}catch(T){console.log("error:unable to access image data: "+T);return"#ccc"}var N=(J.w?J.w:S.width*J.h?J.h:S.height)||R.length,P={},W="",V=[],j={dominant:{name:"",count:0}};var Q=0;while(Q<N){V[0]=R[Q];V[1]=R[Q+1];V[2]=R[Q+2];W=V.join(",");if(W in P){P[W]=P[W]+1}else{P[W]=1}if(M.indexOf(["rgb(",W,")"].join(""))===-1){var X=P[W];if(X>j.dominant.count){j.dominant.name=W;j.dominant.count=X}}Q+=U*4}return["rgb(",j.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(k,h,i){var b=jQuery;var f=b(this);function g(q,p,o,m,l,n){if(k.support.transform){if(p.top){p.translate=[0,p.top||0,0]}if(o.top){o.translate=[0,o.top||0,0]}delete p.top;delete o.top}wowAnimate(q,p,o,m,l,"swing",n)}var e=function(r,x){var q=b.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},x);var t={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var o=b(r);o.data("wow:vars",t);if(!/absolute|relative/.test(o.css("position"))){o.css("position","relative")}var m=x.container||o;var p=o.children();t.totalSlides=p.length;if(q.startSlide>0){if(q.startSlide>=t.totalSlides){q.startSlide=t.totalSlides-1}t.currentSlide=q.startSlide}if(b(p[t.currentSlide]).is("img")){t.currentImage=b(p[t.currentSlide])}else{t.currentImage=b(p[t.currentSlide]).find("img:first")}if(b(p[t.currentSlide]).is("a")){b(p[t.currentSlide]).css("display","block")}for(var s=0;s<q.slices;s++){var w=Math.round(m.width()/q.slices);var v=b('<div class="wow-slice"></div>').css({left:w*s+"px",overflow:"hidden",width:((s==q.slices-1)?(m.width()-(w*s)):w)+"px",position:"absolute"}).appendTo(m);b("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(v)}var n=0;this.sliderRun=function(y,z){if(t.busy){return false}q.effect=z||q.effect;t.currentSlide=y-1;u(o,p,q,false);return true};var l=function(){if(q.onEffectEnd){q.onEffectEnd(t.currentSlide)}m.hide();b(".wow-slice",m).css({transition:"",transform:""});t.busy=0};var u=function(y,z,C,E){var F=y.data("wow:vars");if((!F||F.stop)&&!E){return false}F.busy=1;F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1)}F.currentImage=b(z[F.currentSlide]);if(!F.currentImage.is("img")){F.currentImage=F.currentImage.find("img:first")}var A=b(h[F.currentSlide]);A={width:A.width(),heiht:A.height(),marginTop:A.css("marginTop"),marginLeft:A.css("marginLeft")};b(".wow-slice",m).each(function(J){var L=b(this),I=b("img",L);var K=Math.round(m.width()/C.slices);I.width(m.width());I.attr("src",F.currentImage.attr("src"));I.css({left:-K*J+"px"}).css(A);L.css({height:"100%",opacity:0,left:K*J,width:((J==C.slices-1)?(m.width()-(K*J)):K)})});m.show();if(C.effect=="random"){var G=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");F.randAnim=G[Math.floor(Math.random()*(G.length+1))];if(F.randAnim==undefined){F.randAnim="fade"}}if(C.effect.indexOf(",")!=-1){var G=C.effect.split(",");F.randAnim=b.trim(G[Math.floor(Math.random()*G.length)])}if(C.effect=="sliceDown"||C.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"-100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUp"||C.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUpDown"||C.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDownRight"||C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:((I%2)?"-":"")+"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fold"||F.randAnim=="fold"){var B=0;var H=b(".wow-slice",m);var D=H.width();H.each(function(I){g(b(this),{width:0,opacity:0},{width:D,opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fade"||F.randAnim=="fade"){var H=b(".wow-slice",m);b(".wow-slice",m).each(function(I){b(this).css("height","100%");b(this).animate({opacity:"1.0"},(C.animSpeed*2),(I==C.slices-1)?l:0)})}}}}}}};b.fn._reverse=[].reverse;var a=b("li",i);var c=b("ul",i);var d=b("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(i);var j=new e(c,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:k.duration,startSlide:k.startSlide,container:d,onEffectEnd:function(l){f.trigger("effectEnd")}});this.go=function(m,l){var n=j.sliderRun(m);if(k.fadeOut){c.fadeOut(k.duration)}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(q,j,m){var e=jQuery;var i=e(this);var f=m.find(".ws_list");var a=q.distance||1;var g=e("<div>").addClass("ws_effect ws_blast");var c=e("<div>").addClass("ws_zoom").appendTo(g);var k=e("<div>").addClass("ws_parts").appendTo(g);m.css({overflow:"visible"}).append(g);g.css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":8});var d=q.cols;var p=q.rows;var l=[];var b=[];function h(u,r,s,t){if(q.support.transform&&q.support.transition){if(typeof r.left==="number"||typeof r.top==="number"){r.transform="translate3d("+(typeof r.left==="number"?r.left:0)+"px,"+(typeof r.top==="number"?r.top:0)+"px,0)"}delete r.left;delete r.top;if(s){r.transition="all "+s+"ms ease-in-out"}else{r.transition=""}u.css(r);if(t){u.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t();u.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")})}}else{delete r.transfrom;delete r.transition;if(s){u.animate(r,{queue:false,duration:q.duration,complete:t?t:0})}else{u.stop(1).css(r)}}}function n(r){var w=Math.max((q.width||g.width())/(q.height||g.height())||3,3);d=d||Math.round(w<1?3:3*w);p=p||Math.round(w<1?3/w:3);for(var u=0;u<d*p;u++){var v=u%d;var t=Math.floor(u/d);e([b[u]=document.createElement("div"),l[u]=document.createElement("div")]).css({position:"absolute",overflow:"hidden"}).appendTo(k).append(e("<img>").css({position:"absolute"}))}l=e(l);b=e(b);o(l,r);o(b,r,true);var s={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};c.css(s).append(e("<img>").css(s))}function o(t,u,s,r,w,z){var v=g.width();var x=g.height();var y={left:e(window).scrollLeft(),top:e(window).scrollTop(),width:e(window).width(),height:e(window).height()};e(t).each(function(F){var E=F%d;var C=Math.floor(F/d);if(s){var I=a*v*(2*Math.random()-1)+v/2;var G=a*x*(2*Math.random()-1)+x/2;var H=g.offset();H.left+=I;H.top+=G;if(H.left<y.left){I-=H.left+y.left}if(H.top<y.top){G-=H.top+y.top}var D=(y.left+y.width)-H.left-v/d;if(0>D){I+=D}var B=(y.top+y.height)-H.top-x/p;if(0>B){G+=B}}else{var I=v*E/d;var G=x*C/p}e(this).find("img").css({left:-(v*E/d)+u.marginLeft,top:-(x*C/p)+u.marginTop,width:u.width,height:u.height});var A={left:I,top:G,width:v/d,height:x/p};if(w){e.extend(A,w)}if(r){h(e(this),A,q.duration,(F===0&&z)?z:0)}else{h(e(this),A)}})}this.go=function(s,u){var v=e(j[u]),r={width:v.width(),height:v.height(),marginTop:parseFloat(v.css("marginTop")),marginLeft:parseFloat(v.css("marginLeft"))};if(!l.length){n(r)}l.find("img").attr("src",j.get(u).src);h(l,{opacity:1,zIndex:3});b.find("img").attr("src",j.get(s).src);h(b,{opacity:0,zIndex:2});c.find("img").attr("src",j.get(u).src);h(c.find("img"),{transform:"scale(1)"});g.show();f.hide();o(b,r,false,true,{opacity:1});o(l,r,true,true,{opacity:0},function(){i.trigger("effectEnd");g.hide()});h(c.find("img"),{transform:"scale(2)"},q.duration,0);var t=b;b=l;l=t}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"louvers,lines,brick,slices,blast",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:2,fullScreen:false,gestures:2,onBeforeStep:0,images:0});
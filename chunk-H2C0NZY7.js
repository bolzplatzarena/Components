import{$ as Di,An as lt,At as Ne,Bn as pr,Ct as LN,Dn as kN,Et as Lv,Gt as Tv,Ht as Tc,In as oh,J as Bt,Ln as p,Mn as mi,Mt as Ov,Nt as P7,On as kT,Pt as Ps,Q as D,Rn as pe$1,Rt as RN,Wn as rh,Xt as Xx,Yn as vi,Zn as vv,ar as zx,bn as ho,bt as Kx,d as $3,dn as df,ft as Gx,gt as Js,ht as In,in as _e$1,ir as zM,kn as kv,kt as Mv,lt as Fe,mt as Ii,nn as Zx,nr as yi,rn as _N,rt as Er,sn as bh,t as oe,vn as gh,wn as j7,xn as hr,yt as Kv,zn as pf}from"./main-ZX4ESN4F.js";var _e=new D(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:me})});var me=100;var fe=10;var pe=(()=>{class l{_elementRef=p(pe$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=p(_e),o=zM(),n=this._elementRef.nativeElement;this._noopAnimations=o===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&o===`reduced-motion`&&n.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=me;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-fe)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(o){return new(o||l)};static ɵcmp=(function(){let e=[`determinateSpinner`];function o(n,d){if(n&1&&(gh(),Ps(0,`svg`,11),Mv(1,`circle`,12),df()),n&2){let t=Gx();pr(`viewBox`,t._viewBox()),mi(),Js(`stroke-dasharray`,t._strokeCircumference(),`px`)(`stroke-dashoffset`,t._strokeCircumference()/2,`px`)(`stroke-width`,t._circleStrokeWidth(),`%`),pr(`r`,t._circleRadius())}}return Fe({type:l,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(d,t){if(d&1&&Lv(e,5),d&2){let u;Zx(u=Kx())&&(t._determinateCircle=u.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(d,t){d&2&&(pr(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,t.mode===`determinate`?t.value:null)(`mode`,t.mode),Di(`mat-`+t.color),Js(`width`,t.diameter,`px`)(`height`,t.diameter,`px`)(`--%NS%mat-progress-spinner-size`,t.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,t.diameter+`px`),In(`_mat-animation-noopable`,t._noopAnimations)(`mdc-circular-progress--indeterminate`,t.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,Ii],diameter:[2,`diameter`,`diameter`,Ii],strokeWidth:[2,`strokeWidth`,`strokeWidth`,Ii]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(d,t){if(d&1&&(vv(0,o,2,8,`ng-template`,null,0,LN),Ps(2,`div`,2,1),gh(),Ps(4,`svg`,3),Mv(5,`circle`,4),df()(),bh(),Ps(6,`div`,5)(7,`div`,6)(8,`div`,7),kv(9,8),df(),Ps(10,`div`,9),kv(11,8),df(),Ps(12,`div`,10),kv(13,8),df()()()),d&2){let u=Xx(1);mi(4),pr(`viewBox`,t._viewBox()),mi(),Js(`stroke-dasharray`,t._strokeCircumference(),`px`)(`stroke-dashoffset`,t._strokeDashOffset(),`px`)(`stroke-width`,t._circleStrokeWidth(),`%`),pr(`r`,t._circleRadius()),mi(4),Tv(`ngTemplateOutlet`,u),mi(2),Tv(`ngTemplateOutlet`,u),mi(2),Tv(`ngTemplateOutlet`,u)}},dependencies:[kT],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return l})();var W=(()=>{class l{static ɵfac=function(o){return new(o||l)};static ɵmod=Ne({type:l});static ɵinj=_e$1({imports:[Tc]})}return l})();var de=class G{constructor(){this.type=ho.required(),this.function=ho.required(),this.disabled=ho(!1),this.color=ho(`primary`),this.loading=Bt(!1)}click(){return Er(this,null,function*(){this.loading.set(!0);try{yield this.function()()}finally{this.loading.set(!1)}})}static{this.ɵfac=function(o){return new(o||G)}}static{this.ɵcmp=(function(){let e=[`*`];function o(s,g){s&1&&kv(0)}function n(s,g){if(s&1){let m=zx();Ps(0,`button`,3),Ov(`click`,function(){rh(m);let A=Gx();return oh(A.click())}),vv(1,o,1,0,`ng-container`,4),df()}if(s&2){let m=Gx(),_=Xx(3);Tv(`disabled`,m.disabled()||m.loading())(`color`,m.color()),mi(),Tv(`ngTemplateOutlet`,_)}}function d(s,g){s&1&&kv(0)}function t(s,g){if(s&1){let m=zx();Ps(0,`button`,5),Ov(`click`,function(){rh(m);let A=Gx();return oh(A.click())}),vv(1,d,1,0,`ng-container`,4),df()}if(s&2){let m=Gx(),_=Xx(3);Tv(`disabled`,m.disabled()||m.loading())(`color`,m.color()),mi(),Tv(`ngTemplateOutlet`,_)}}function u(s,g){s&1&&Mv(0,`mat-spinner`,6),s&2&&Tv(`strokeWidth`,2)(`diameter`,20)}function ue(s,g){if(s&1&&(lt(0),vi(1,u,1,2,`mat-spinner`,6)),s&2){let m=Gx();mi(),yi(m.loading()?1:-1)}}return Fe({type:G,selectors:[[`bpa-button`]],inputs:{type:[1,`type`],function:[1,`function`],disabled:[1,`disabled`],color:[1,`color`]},ngContentSelectors:e,decls:4,vars:1,consts:[[`content`,``],[`mat-raised-button`,``,3,`disabled`,`color`],[`mat-stroked-button`,``,3,`disabled`,`color`],[`mat-raised-button`,``,3,`click`,`disabled`,`color`],[4,`ngTemplateOutlet`],[`mat-stroked-button`,``,3,`click`,`disabled`,`color`],[`color`,`primary`,2,`position`,`absolute`,`left`,`50%`,`top`,`0`,`margin-left`,`-10px`,3,`strokeWidth`,`diameter`]],template:function(g,m){if(g&1&&(hr(),vi(0,n,2,3,`button`,1)(1,t,2,3,`button`,2),vv(2,ue,2,1,`ng-template`,null,0,LN)),g&2){let _;yi((_=m.type())===`raised`?0:_===`stroked`?1:-1)}},dependencies:[j7,P7,W,pe,kT],encapsulation:2,changeDetection:1})})()}};var Ge=(()=>{class l{constructor(){this.text=`Speichern`,this.longText=`Speichern & Save & Other words`,this.example=`<bpa-button type="raised" color="accent" [function]="save">Save</bpa-button>`,this.datasource=Bt(!1)}click(){return Er(this,null,function*(){yield new Promise(e=>setTimeout(e,4e3))})}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=Fe({type:l,selectors:[[`app-loading`]],decls:31,vars:30,consts:[[1,`doc-list`],[1,`demo`,`demo-row`],[`type`,`raised`,`color`,`accent`,3,`function`],[`type`,`raised`,`color`,`warn`,3,`function`],[`type`,`stroked`,`color`,`accent`,3,`function`],[`type`,`raised`,`color`,`primary`,3,`function`],[`type`,`raised`,`color`,`primary`,3,`disabled`,`function`],[`language`,`html`,3,`code`]],template:function(o,n){o&1&&(Ps(0,`h2`),_N(1),kN(2,`translate`),df(),Ps(3,`p`),_N(4),kN(5,`translate`),df(),Ps(6,`ul`,0)(7,`li`),_N(8),kN(9,`translate`),df(),Ps(10,`li`),_N(11),kN(12,`translate`),df(),Ps(13,`li`),_N(14),kN(15,`translate`),df(),Ps(16,`li`),_N(17),kN(18,`translate`),df()(),Ps(19,`div`,1)(20,`bpa-button`,2),_N(21),df(),Ps(22,`bpa-button`,3),_N(23),df(),Ps(24,`bpa-button`,4),_N(25),df(),Ps(26,`bpa-button`,5),_N(27),df(),Ps(28,`bpa-button`,6),_N(29),df()(),Mv(30,`app-code-block`,7)),o&2&&(mi(),Kv(RN(2,18,`content.headline.loading_button`)),mi(3),Kv(RN(5,20,`content.text.loading_button`)),mi(4),Kv(RN(9,22,`content.text.button_doc.type`)),mi(3),Kv(RN(12,24,`content.text.button_doc.function`)),mi(3),Kv(RN(15,26,`content.text.button_doc.color`)),mi(3),Kv(RN(18,28,`content.text.button_doc.disabled`)),mi(3),Tv(`function`,n.click),mi(),pf(` `,n.text,` `),mi(),Tv(`function`,n.click),mi(),pf(` `,n.longText,` `),mi(),Tv(`function`,n.click),mi(),pf(` `,n.text,` `),mi(),Tv(`function`,n.click),mi(),pf(` `,n.longText,` `),mi(),Tv(`disabled`,!0)(`function`,n.click),mi(),pf(` `,n.longText,` `),mi(),Tv(`code`,n.example))},dependencies:[de,oe,j7,W,$3],encapsulation:2,changeDetection:1})}}return l})();export{Ge as LoadingComponent};
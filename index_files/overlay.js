google.maps.__gjsload__('overlay', function(_){var Ux=_.pa("i"),Vx=_.n(),Wx=function(a){a.fh=a.fh||new Vx;return a.fh},Xx=function(a){this.Na=new _.Ci(function(){var b=a.fh;if(a.getPanes()){if(a.getProjection()){if(!b.jg&&a.onAdd)a.onAdd();b.jg=!0;a.draw()}}else{if(b.jg)if(a.onRemove)a.onRemove();else a.remove();b.jg=!1}},0)},Yx=function(a,b){function c(){return _.Di(e.Na)}var d=Wx(a),e=d.Nf;e||(e=d.Nf=new Xx(a));_.B(d.Ga||[],_.L.removeListener);var f=d.Ta=d.Ta||new _.yr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.ej=d.ej||new Ux(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ga=[_.L.addListener(a,"panes_changed",c),_.L.addListener(g,"zoom_changed",c),_.L.addListener(g,"offset_changed",c),_.L.addListener(b,"projection_changed",c),_.L.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.Af&&(_.Nj(b,"Ox"),_.Po("Ox","-p",a))},
ay=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;_.Qo("Ox","-p",c.nb);c.nb.unbindAll();c.nb.set("panes",null);c.nb.set("projection",null);_.bb(c.mn.j,c);c.Bf&&(c.Bf=!1,c.nb.onRemove?c.nb.onRemove():c.nb.remove())}if(b&&b instanceof _.Af){var d=b.__gm;d.overlayLayer?a.__gmop=new Zx(b,a,d.overlayLayer):d.j.then(function(e){e=e.rb;var f=new $x(b,e);e.yc(f);d.overlayLayer=f;ay(a)})}}},Zx=function(a,b,c){this.map=a;this.nb=b;this.mn=c;this.Bf=!1;_.Nj(this.map,"Ox");
_.Po("Ox","-p",this.nb);c.j.push(this);c.i&&by(this,c.i);c.o.Ng()},by=function(a,b){a.nb.get("projection")!=b&&(a.nb.bindTo("panes",a.map.__gm),a.nb.set("projection",b))},$x=function(a,b){this.H=a;this.o=b;this.i=null;this.j=[]};_.A(Ux,_.M);Ux.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ie(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.i:null))};_.A(Xx,_.M);Zx.prototype.draw=function(){this.Bf||(this.Bf=!0,this.nb.onAdd&&this.nb.onAdd());this.nb.draw&&this.nb.draw()};$x.prototype.dispose=_.n();$x.prototype.Qb=function(a,b,c,d,e,f,g,h){var k=this.i=this.i||new _.Ro(this.H,this.o,_.n());k.Qb(a,b,c,d,e,f,g,h);a=_.Aa(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,by(b,k),b.draw()};_.ff("overlay",{Nh:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.Af||a.__gmop)ay(a);else{b=a.getMap();var c=Wx(a),d=c.Bm;c.Bm=b;d&&(c=Wx(a),(d=c.Ta)&&d.unbindAll(),(d=c.ej)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.B(c.Ga,_.L.removeListener),c.Ga=null,c.Nf&&(c.Nf.Na.Ob(),c.Nf=null),_.Qo("Ox","-p",a));b&&Yx(a,b)}}},preventMapHitsFrom:function(a){_.bp(_.Hp(a,{onClick:function(b){return _.Zo(b.event)},Ib:function(b){return _.Wo(b)},zd:function(b){return _.Xo(b)},
Xb:function(b){return _.Xo(b)},Nb:function(b){return _.Yo(b)}}),!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.kf);a.addEventListener("contextmenu",_.kf);a.addEventListener("dblclick",_.kf);a.addEventListener("mousedown",_.kf);a.addEventListener("mousemove",_.kf);a.addEventListener("MSPointerDown",_.kf);a.addEventListener("pointerdown",_.kf);a.addEventListener("touchstart",_.kf);a.addEventListener("wheel",_.kf)}});});

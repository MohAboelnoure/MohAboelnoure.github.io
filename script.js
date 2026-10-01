/* ---- Edit these two links ---- */
const LINKS = {
  scholar: "https://scholar.google.com/",   // replace with your Google Scholar profile URL
  linkedin: "https://www.linkedin.com/in/moh-aboelnour-06158b140/"
};

/* ---- Publications (from CV) ---- */
const ME = "Aboelnour";
const PUBS = [
  {y:2026,t:"Quantifying the Impact of Winter Cover Crops on Sediment Export in Small Agricultural Watersheds and Beyond",a:"Pruitt, A. N., Tank, J. L., Speir, S. L., Mahl, U. H., Aboelnour, M., Vincent, A. E., & Royer, T. V.",j:"Environmental Management, 76(8), 259",doi:"10.1007/s00267-026-02578-y"},
  {y:2026,t:"Urban emissions and expansion intensify extreme precipitation and flood susceptibility in Texas",a:"Moraglia, G., Aboelnour, M., & Crippa, P.",j:"npj Natural Hazards",doi:"10.1038/s44304-026-00210-x"},
  {y:2026,t:"Mapping tomorrow’s flood: a probabilistic, equity-centered risk assessment for the Indianapolis metropolitan area",a:"Aboelnour, M. A., & Bolster, D.",j:"Natural Hazards, 122(7), 299",doi:"10.1007/s11069-026-08064-2",first:1},
  {y:2025,t:"Leveraging ERA5-Land Reanalysis Precipitation Data for Urban Flood Vulnerability and Water Security Assessments: A Global Perspective",a:"Aboelnour, M. A., Hamlet, A. F., Wood, D., & Hung, F. W.",j:"Earth Systems and Environment, 1–19",doi:"10.1007/s41748-025-00703-1",first:1},
  {y:2025,t:"Urban heat risks reimagined: A framework for global physical hazard assessment",a:"Hung, F., Aboelnour, M., Wood, D., & Zhang, J.",j:"Urban Climate, 64, 102659",doi:"10.1016/j.uclim.2025.102659"},
  {y:2025,t:"Geospatial assessment of forest disturbance and sustainable development goals integration in dry deciduous landscapes using remote sensing and Google Earth Engine",a:"Halder, S., Banerjee, S., Youssef, Y. M., … & Aboelnour, M. A.",j:"Geocarto International, 40(1), 2567906",doi:"10.1080/10106049.2025.2567906"},
  {y:2025,t:"A watershed model predicts the effects of cover crops on river flows, sediment transport, and nutrient loss to Lake Michigan",a:"Aboelnour, M. A., Tank, J. L., Hamlet, A. F., Royer, T. V., & Bolster, D.",j:"Journal of Great Lakes Research, 102528",doi:"10.1016/j.jglr.2025.102528",first:1},
  {y:2025,t:"A SWAT model depicts the impact of land use change on hydrology, nutrient, and sediment loads in a Lake Michigan watershed",a:"Aboelnour, M. A., Tank, J. L., Hamlet, A. F., Bertassello, L. E., Ren, D., & Bolster, D.",j:"Modeling Earth Systems and Environment, 11(1), 22",doi:"10.1007/s40808-024-02259-x",first:1},
  {y:2022,t:"Improving probabilistic monthly water quantity and quality predictions using a simplified residual-based modeling approach",a:"Guo, T., Liu, Y., Shao, G., Engel, B. A., Sharma, A., Marshall, L. A., … & Aboelnour, M. A.",j:"Environmental Modelling & Software, 156, 105499",doi:"10.1016/j.envsoft.2022.105499"},
  {y:2021,t:"Evaluating Low-Impact Development practice performance to reduce runoff volume in an urban watershed in Algeria",a:"Abdelkebir, B., Maoui, A., Mokhtari, E., Engel, B., Chen, J., & Aboelnour, M.",j:"Arabian Journal of Geosciences, 14, 814",doi:"10.1007/s12517-021-07178-0"},
  {y:2021,t:"Impacts of Watershed Physical Properties and Land Use on Baseflow at Regional Scale",a:"Aboelnour, M., Engel, B. A., Frisbee, M. D., Gitau, M. W., & Flanagan, D. C.",j:"Journal of Hydrology: Regional Studies, 35, 100810",doi:"10.1016/j.ejrh.2021.100810",first:1},
  {y:2020,t:"A Comparison of Streamflow and Baseflow Responses to Land-Use Change and the Variation in Climate Parameters using SWAT",a:"Aboelnour, M., Gitau, M. W., & Engel, B. A.",j:"Water, 12(1), 191",doi:"10.3390/w12010191",first:1},
  {y:2019,t:"Hydrologic Response in an Urban Watershed as Affected by Climate and Land-Use Change",a:"Aboelnour, M., Gitau, M. W., & Engel, B. A.",j:"Water, 11(8), 1603",doi:"10.3390/w11081603",first:1},
  {y:2018,t:"Application of remote sensing techniques and geographic information systems to analyze land surface temperature in response to land use/land cover change in greater Cairo region, Egypt",a:"Aboelnour, M., & Engel, B. A.",j:"Journal of Geographic Information System, 10(1)",doi:"10.4236/jgis.2018.101003",first:1},
  {y:2015,t:"Correlations between the North China Craton and the Indian Shield: Constraints from regional metallogeny",a:"Li, C., Chen, D., Chen, J., Chen, X., Yang, X., & Aboelnour, M. A.",j:"Geoscience Frontiers, 6(6), 861–873",doi:"10.1016/j.gsf.2015.03.004"}
];

const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const bold = a => esc(a).replace(/(Aboelnour,? M\.( A\.)?)/g,"<b>$1</b>");
const list = document.getElementById("pubs");
list.innerHTML = PUBS.map(p =>
  `<li class="reveal" data-first="${p.first?1:0}" data-nd="${p.y>=2022?1:0}">
     <span class="yr">${p.y}</span>
     <div><a class="ttl" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${esc(p.t)}<span class="ext" aria-hidden="true"> &nearr;</span></a><span class="au">${bold(p.a)}</span><br><span class="jr">${esc(p.j)}</span></div>
   </li>`).join("");

document.getElementById("filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if(!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("on", x===b));
  const f = b.dataset.f;
  list.querySelectorAll("li").forEach(li => {
    const show = f==="all" || (f==="first" && li.dataset.first==="1") || (f==="nd" && li.dataset.nd==="1");
    li.classList.toggle("hide", !show);
  });
});

/* ---- links ---- */
document.getElementById("scholar-link").href = LINKS.scholar;
document.getElementById("linkedin-btn").href = LINKS.linkedin;
document.getElementById("yr").textContent = new Date().getFullYear();

/* ---- nav ---- */
const nav = document.getElementById("nav"), menu = document.getElementById("menu");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), {passive:true});
document.getElementById("burger").onclick = () => menu.classList.toggle("open");
menu.addEventListener("click", e => { if(e.target.tagName==="A") menu.classList.remove("open"); });

/* ---- reveal on scroll ---- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if(!e.isIntersecting) return;
  e.target.classList.add("in");
  io.unobserve(e.target);
}), {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---- topographic contour background + water that rises as you scroll ---- */
(() => {
  const cv = document.getElementById("flow"), ctx = cv.getContext("2d");
  const wc = document.createElement("canvas"); wc.id = "water"; cv.parentNode.insertBefore(wc, cv);
  const wctx = wc.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // deterministic value noise -> smooth terrain-like height field
  const hash = (x,y) => { const h = Math.sin(x*127.1 + y*311.7 + 17.3) * 43758.5453; return h - Math.floor(h); };
  const smooth = t => t*t*(3-2*t);
  function noise(x,y){
    const xi = Math.floor(x), yi = Math.floor(y), xf = smooth(x-xi), yf = smooth(y-yi);
    const a = hash(xi,yi), b = hash(xi+1,yi), c = hash(xi,yi+1), d = hash(xi+1,yi+1);
    return a + (b-a)*xf + (c-a)*yf + (a-b-c+d)*xf*yf;
  }
  const height = (x,y) => { let v=0, amp=.5, f=1; for(let o=0;o<4;o++){ v += amp*noise(x*f+o*5.2, y*f+o*1.7); amp*=.5; f*=2; } return v; };

  // drainage network: fill depressions (priority-flood), route water downhill, accumulate flow, trace the channels
  function rivers(g, cols, rows, cell){
    const N = cols*rows, z = Float32Array.from(g), recv = new Int32Array(N).fill(-1), seen = new Uint8Array(N), order = new Int32Array(N);
    let oc = 0; const heap = [];
    const push = i => { heap.push(i); let c = heap.length-1; while(c>0){ const p=(c-1)>>1; if(z[heap[p]]<=z[heap[c]]) break; [heap[p],heap[c]]=[heap[c],heap[p]]; c=p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if(heap.length){ heap[0]=last; let p=0; for(;;){ const l=2*p+1, r=l+1; let m=p;
      if(l<heap.length && z[heap[l]]<z[heap[m]]) m=l; if(r<heap.length && z[heap[r]]<z[heap[m]]) m=r; if(m===p) break; [heap[p],heap[m]]=[heap[m],heap[p]]; p=m; } } return top; };
    for(let i=0;i<cols;i++) for(const j of [0,rows-1]){ const n=j*cols+i; if(!seen[n]){ seen[n]=1; push(n); } }
    for(let j=0;j<rows;j++) for(const i of [0,cols-1]){ const n=j*cols+i; if(!seen[n]){ seen[n]=1; push(n); } }
    while(heap.length){
      const c = pop(); order[oc++] = c; const ci = c%cols, cj = (c/cols)|0;
      for(let dj=-1;dj<=1;dj++) for(let di=-1;di<=1;di++){
        if(!di && !dj) continue; const ni=ci+di, nj=cj+dj; if(ni<0||nj<0||ni>=cols||nj>=rows) continue;
        const n = nj*cols+ni; if(seen[n]) continue; seen[n]=1; recv[n]=c; if(z[n] <= z[c]) z[n] = z[c] + 1e-5*(.3 + 1.4*(((n*2654435761)>>>0)%1000)/1000); push(n);
      }
    }
    const acc = new Float32Array(N).fill(1);
    for(let k=oc-1;k>=0;k--){ const c=order[k], r=recv[c]; if(r>=0) acc[r] += acc[c]; }
    const main = new Int32Array(N).fill(-1);
    for(let c=0;c<N;c++){ const r=recv[c]; if(r>=0 && (main[r]<0 || acc[c]>acc[main[r]])) main[r]=c; }
    const T = Math.max(35, .0055*N), cuts = [T, 3*T, 9*T, 27*T], paths = cuts.map(() => new Path2D());
    // trace each river from its source downstream, then smooth the line so it reads as a curve, not grid steps
    const X = c => (c%cols)*cell, Y = c => ((c/cols)|0)*cell;
    const hasUp = new Uint8Array(N), done = new Uint8Array(N), sx = new Float32Array(N), sy = new Float32Array(N);
    for(let c=0;c<N;c++){ if(recv[c]>=0 && acc[c]>=T) hasUp[recv[c]] = 1; }
    const H = 4;
    for(let s0=0;s0<N;s0++){
      if(recv[s0]<0 || acc[s0]<T || hasUp[s0]) continue;
      const chain = []; let c = s0;
      while(c>=0 && !done[c]){ chain.push(c); if(recv[c]<0){ c = -1; break; } c = recv[c]; }
      const n = chain.length, pts = [];
      for(let i=0;i<n;i++){
        let ax=0, ay=0, k=0;
        for(let j=Math.max(0,i-H); j<=Math.min(n-1,i+H); j++){ ax += X(chain[j]); ay += Y(chain[j]); k++; }
        const q = chain[i]; sx[q]=ax/k; sy[q]=ay/k; done[q]=1; pts.push([sx[q],sy[q]]);
      }
      if(c>=0) pts.push([sx[c],sy[c]]);                         // join the river it flows into
      for(let i=0;i<pts.length-1;i++){
        const a = acc[chain[Math.min(i,n-1)]]; let k = 0; while(k<3 && a>=cuts[k+1]) k++;
        paths[k].moveTo(pts[i][0],pts[i][1]); paths[k].lineTo(pts[i+1][0],pts[i+1][1]);
      }
    }    return paths;
  }
  let G = null;                       // {g, cols, rows, cell, W, H, dpr}
  const sm = document.createElement("canvas"), smctx = sm.getContext("2d");

  function draw(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2), W = innerWidth, H = innerHeight;
    cv.width = wc.width = W*dpr; cv.height = wc.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
    const cell = 7, cols = Math.ceil(W/cell)+1, rows = Math.ceil(H/cell)+1, sc = 3.4/Math.max(W,H);
    const g = new Float32Array(cols*rows);
    for(let j=0;j<rows;j++) for(let i=0;i<cols;i++) g[j*cols+i] = height(i*cell*sc, j*cell*sc);
    G = {g, cols, rows, cell, W, H, dpr}; sm.width = cols; sm.height = rows;

    const minor = new Path2D(), major = new Path2D();
    for(let k=0;k<22;k++){ if(k%3) continue;
      const lvl = .16 + k*.027, path = (k%5===0) ? major : minor;
      const pt = (x0,y0,x1,y1,v0,v1) => { const t = (lvl-v0)/(v1-v0); return [x0+(x1-x0)*t, y0+(y1-y0)*t]; };
      for(let j=0;j<rows-1;j++) for(let i=0;i<cols-1;i++){
        const a=g[j*cols+i], b=g[j*cols+i+1], c=g[(j+1)*cols+i+1], d=g[(j+1)*cols+i];
        const idx = (a>lvl?8:0)|(b>lvl?4:0)|(c>lvl?2:0)|(d>lvl?1:0);
        if(idx===0||idx===15) continue;
        const x=i*cell, y=j*cell, X=x+cell, Y=y+cell;
        const T=()=>pt(x,y,X,y,a,b), R=()=>pt(X,y,X,Y,b,c), B=()=>pt(x,Y,X,Y,d,c), L=()=>pt(x,y,x,Y,a,d);
        const seg = (p,q) => { path.moveTo(p[0],p[1]); path.lineTo(q[0],q[1]); };
        switch(idx){
          case 1: case 14: seg(L(),B()); break;
          case 2: case 13: seg(B(),R()); break;
          case 3: case 12: seg(L(),R()); break;
          case 4: case 11: seg(T(),R()); break;
          case 5: seg(T(),R()); seg(L(),B()); break;
          case 6: case 9: seg(T(),B()); break;
          case 7: case 8: seg(L(),T()); break;
          case 10: seg(L(),T()); seg(B(),R()); break;
        }
      }
    }
    ctx.lineWidth = 1; ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(143,184,212,.06)"; ctx.stroke(minor);
    ctx.strokeStyle = "rgba(143,184,212,.10)";  ctx.stroke(major);
    ctx.lineCap = "round";
    const rw = [.8,1.1,1.5,1.9], ra = [.17,.24,.32,.42];
    (() => { const rc = Math.max(3, Math.ceil(Math.sqrt(W*H/110000))), rcols = Math.ceil(W/rc)+1, rrows = Math.ceil(H/rc)+1, gr = new Float32Array(rcols*rrows);
      for(let j=0;j<rrows;j++) for(let i=0;i<rcols;i++) gr[j*rcols+i] = height(i*rc*sc, j*rc*sc);
      return rivers(gr, rcols, rrows, rc); })().forEach((p,k) => { ctx.lineWidth = rw[k]; ctx.strokeStyle = `rgba(150,196,228,${ra[k]})`; ctx.stroke(p); });
    paintWater(level);
  }

  // water: soft fill of every spot lower than the current level (smoothed by bilinear upscaling)
  const LO = .20, HI = .42;
  const target = () => { const max = document.documentElement.scrollHeight - innerHeight; return LO + (HI-LO) * (max > 0 ? Math.min(1, scrollY/max) : 0); };
  let level = still ? .30 : target(), raf = 0;
  function paintWater(lv){
    if(!G) return;
    const {g, cols, rows, cell, W, H, dpr} = G, img = smctx.createImageData(cols, rows), d = img.data;
    for(let n=0;n<cols*rows;n++){
      const depth = lv - g[n]; if(depth <= 0) continue;
      d[n*4]=96; d[n*4+1]=150; d[n*4+2]=196; d[n*4+3] = Math.min(1, depth*7) * 52;
    }
    smctx.putImageData(img,0,0);
    wctx.setTransform(dpr,0,0,dpr,0,0); wctx.clearRect(0,0,W,H);
    wctx.imageSmoothingEnabled = true; wctx.imageSmoothingQuality = "high";
    wctx.drawImage(sm, 0,0, cols,rows, 0,0, cols*cell, rows*cell);
  }
  function tick(){
    const t = target(); level += (t-level)*.08;
    paintWater(level);
    raf = Math.abs(t-level) > .0004 ? requestAnimationFrame(tick) : 0;
  }
  if(!still) addEventListener("scroll", () => { if(!raf) raf = requestAnimationFrame(tick); }, {passive:true});
  let t; addEventListener("resize", () => { clearTimeout(t); t = setTimeout(draw, 150); });
  draw();
})();

/* ---- interactive storm / runoff explorer (simplified SCS curve-number model) ---- */
(() => {
  const $ = id => document.getElementById(id);
  const root = $("explore"); if(!root) return;
  const inP=$("in-p"), inU=$("in-u"), inF=$("in-f"), inCC=$("in-cc"), inST=$("in-st");
  const svg = $("hydro"), rainCv = $("rain");
  const CN_URBAN = 90, CN_FARM = 78, CN_FARM_CC = 74, CN_NAT = 58;     // hydrologic soil group B
  const AREA = 100, THRESH = 7500, XMAX = 36;                          // sq mi, cfs, hours

  function model(P, u, f, cc, st){
    const n = Math.max(0, 1-u-f);
    const CN = u*CN_URBAN + f*(cc?CN_FARM_CC:CN_FARM) + n*CN_NAT;
    const S = 1000/CN - 10, Ia = .2*S;
    const Q = P > Ia ? Math.pow(P-Ia,2)/(P+.8*S) : 0;                  // runoff depth, inches
    const tc = 12 - 7*u, tp0 = .6*tc + 1;                              // hours; urban land shortens response
    const tp = st ? tp0*1.35 : tp0;
    const qp = 484*AREA*Q/tp;                                          // cfs (triangular SCS unit hydrograph)
    return {Q, qp, tp, tb:2.67*tp};
  }
  const fmt = n => Math.round(n).toLocaleString("en-US");

  function curve(m, x, y){            // returns "M..L.." polygon path points for triangular hydrograph
    return `M${x(0)},${y(0)} L${x(m.tp)},${y(m.qp)} L${x(Math.min(m.tb,XMAX))},${y(m.tb>XMAX ? m.qp*(1-(XMAX-m.tp)/(m.tb-m.tp)) : 0)}`;
  }

  function render(){
    const P=+inP.value, u=+inU.value/100;
    inF.max = 100-inU.value; if(+inF.value > +inF.max) inF.value = inF.max;
    const f=+inF.value/100, n=1-u-f, cc=inCC.checked, st=inST.checked;
    $("o-p").textContent = P.toFixed(1)+" in"; $("o-u").textContent = inU.value+"%";
    $("o-f").textContent = inF.value+"%";      $("o-n").textContent = Math.round(n*100)+"%";

    const m = model(P,u,f,cc,st), nat = model(P,0,0,false,false);
    $("r-q").textContent = m.Q.toFixed(2)+" in";
    $("r-ratio").textContent = Math.round(100*m.Q/P)+"% of the rain";
    $("r-peak").textContent = fmt(m.qp)+" cfs";
    const over = m.qp > THRESH, el = $("r-status");
    el.textContent = over ? "Above the flood threshold" : "Below the flood threshold";
    el.className = over ? "bad" : "ok";
    $("r-vs").textContent = nat.qp > 1 ? ((m.qp/nat.qp-1)*100 >= 0 ? "+" : "") + Math.round((m.qp/nat.qp-1)*100)+"% vs. an all-natural landscape" : "";

    // chart
    const Wd = Math.max(240, Math.round(svg.clientWidth || 640)), Ht = Wd < 500 ? 250 : 270, L = Wd < 500 ? 50 : 58, R = 14, T = 14, B = 42;
    svg.setAttribute("viewBox", `0 0 ${Wd} ${Ht}`);
    const ymax = Math.max(12000, Math.ceil(Math.max(m.qp, nat.qp)*1.18/5000)*5000);
    const x = t => (L + (Wd-L-R)*t/XMAX).toFixed(1), y = q => (T + (Ht-T-B)*(1-q/ymax)).toFixed(1);
    let s = "";
    const step = ymax>30000?10000:5000;
    for(let q=0;q<=ymax;q+=step) s += `<line class="grid" x1="${L}" x2="${Wd-R}" y1="${y(q)}" y2="${y(q)}"/><text class="tick" x="${L-8}" y="${+y(q)+4}" text-anchor="end">${fmt(q)}</text>`;
    for(let t=0;t<=XMAX;t+=6) s += `<text class="tick" x="${x(t)}" y="${Ht-22}" text-anchor="middle">${t}</text>`;
    s += `<text class="tick" x="${(L+Wd-R)/2}" y="${Ht-4}" text-anchor="middle">hours after the storm begins</text>`;
    s += `<line class="thresh" x1="${L}" x2="${Wd-R}" y1="${y(THRESH)}" y2="${y(THRESH)}"/><text class="thresh-l" x="${Wd-R-4}" y="${+y(THRESH)-6}" text-anchor="end">flood threshold ${fmt(THRESH)} cfs</text>`;
    s += `<path class="nat" d="${curve(nat,x,y)}"/>`;
    s += `<path class="area${over?" over":""}" d="${curve(m,x,y)} L${x(Math.min(m.tb,XMAX))},${y(0)} Z"/><path class="line${over?" over":""}" d="${curve(m,x,y)}"/>`;
    s += `<circle class="peak${over?" over":""}" cx="${x(m.tp)}" cy="${y(m.qp)}" r="4.5"/>`;
    svg.innerHTML = s;
    drops = Math.round(P*16);
  }

  // presets
  const presets = { natural:[0,10,false,false], today:[10,60,false,false], growth:[40,35,false,false], managed:[40,35,true,true] };
  root.querySelectorAll("[data-preset]").forEach(b => b.addEventListener("click", () => {
    const [u,f,cc,st] = presets[b.dataset.preset];
    inU.value=u; inF.max=100-u; inF.value=f; inCC.checked=cc; inST.checked=st;
    root.querySelectorAll("[data-preset]").forEach(x => x.classList.toggle("on", x===b)); render();
  }));
  [inP,inU,inF,inCC,inST].forEach(e => e.addEventListener("input", () => {
    root.querySelectorAll("[data-preset]").forEach(x => x.classList.remove("on")); render(); }));

  // rain
  let drops = 48, parts = [], running = false;
  const rctx = rainCv.getContext("2d");
  function sizeRain(){ const r = rainCv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio||1,2);
    rainCv.width = r.width*dpr; rainCv.height = r.height*dpr; rctx.setTransform(dpr,0,0,dpr,0,0); }
  function rain(){
    const w = rainCv.clientWidth, h = rainCv.clientHeight; rctx.clearRect(0,0,w,h);
    while(parts.length < drops) parts.push({x:Math.random()*w, y:Math.random()*h, v:5+Math.random()*4, l:8+Math.random()*10});
    parts.length = Math.min(parts.length, drops);
    rctx.strokeStyle = "rgba(143,184,212,.55)"; rctx.lineWidth = 1; rctx.beginPath();
    for(const p of parts){ rctx.moveTo(p.x,p.y); rctx.lineTo(p.x-p.l*.12,p.y+p.l); p.y += p.v; p.x -= p.v*.12;
      if(p.y > h){ p.y = -p.l; p.x = Math.random()*w+20; } }
    rctx.stroke();
    if(running) requestAnimationFrame(rain);
  }
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
    new IntersectionObserver(es => { const v = es[0].isIntersecting; if(v && !running){ running = true; sizeRain(); rain(); } else if(!v){ running = false; } }).observe(root);
    addEventListener("resize", sizeRain);
  }
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(render, 120); });
  render();
})();
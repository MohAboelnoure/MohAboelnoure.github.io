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

/* ---- topographic contour background (static, drawn once per resize) ---- */
(() => {
  const cv = document.getElementById("flow"), ctx = cv.getContext("2d");
  // deterministic value noise -> smooth terrain-like height field
  const hash = (x,y) => { const h = Math.sin(x*127.1 + y*311.7 + 17.3) * 43758.5453; return h - Math.floor(h); };
  const smooth = t => t*t*(3-2*t);
  function noise(x,y){
    const xi = Math.floor(x), yi = Math.floor(y), xf = smooth(x-xi), yf = smooth(y-yi);
    const a = hash(xi,yi), b = hash(xi+1,yi), c = hash(xi,yi+1), d = hash(xi+1,yi+1);
    return a + (b-a)*xf + (c-a)*yf + (a-b-c+d)*xf*yf;
  }
  const height = (x,y) => { let v=0, amp=.5, f=1; for(let o=0;o<4;o++){ v += amp*noise(x*f+o*5.2, y*f+o*1.7); amp*=.5; f*=2; } return v; };

  function draw(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2), W = innerWidth, H = innerHeight;
    cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
    const cell = 7, cols = Math.ceil(W/cell)+1, rows = Math.ceil(H/cell)+1, sc = 3.4/Math.max(W,H);
    const g = new Float32Array(cols*rows);
    for(let j=0;j<rows;j++) for(let i=0;i<cols;i++) g[j*cols+i] = height(i*cell*sc, j*cell*sc);
    const minor = new Path2D(), major = new Path2D();
    for(let k=0;k<22;k++){
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
    ctx.strokeStyle = "rgba(143,184,212,.075)"; ctx.stroke(minor);
    ctx.strokeStyle = "rgba(143,184,212,.17)";  ctx.stroke(major);
  }
  let t; addEventListener("resize", () => { clearTimeout(t); t = setTimeout(draw, 150); });
  draw();
})();
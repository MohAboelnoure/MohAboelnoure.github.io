/* ---- Edit these two links ---- */
const LINKS = {
  scholar: "https://scholar.google.com/",   // replace with your Google Scholar profile URL
  linkedin: "https://www.linkedin.com/"     // replace with your LinkedIn profile URL
};

/* ---- Publications (from CV) ---- */
const ME = "Aboelnour";
const PUBS = [
  {y:2026,t:"Quantifying the Impact of Winter Cover Crops on Sediment Export in Small Agricultural Watersheds and Beyond",a:"Pruitt, A. N., Tank, J. L., Speir, S. L., Mahl, U. H., Aboelnour, M., Vincent, A. E., & Royer, T. V.",j:"Environmental Management, 76(8), 259"},
  {y:2026,t:"Urban emissions and expansion intensify extreme precipitation and flood susceptibility in Texas",a:"Moraglia, G., Aboelnour, M., & Crippa, P.",j:"npj Natural Hazards"},
  {y:2026,t:"Mapping tomorrow’s flood: a probabilistic, equity-centered risk assessment for the Indianapolis metropolitan area",a:"Aboelnour, M. A., & Bolster, D.",j:"Natural Hazards, 122(7), 299",first:1},
  {y:2025,t:"Leveraging ERA5-Land Reanalysis Precipitation Data for Urban Flood Vulnerability and Water Security Assessments: A Global Perspective",a:"Aboelnour, M. A., Hamlet, A. F., Wood, D., & Hung, F. W.",j:"Earth Systems and Environment, 1–19",first:1},
  {y:2025,t:"Urban heat risks reimagined: A framework for global physical hazard assessment",a:"Hung, F., Aboelnour, M., Wood, D., & Zhang, J.",j:"Urban Climate, 64, 102659"},
  {y:2025,t:"Geospatial assessment of forest disturbance and sustainable development goals integration in dry deciduous landscapes using remote sensing and Google Earth Engine",a:"Halder, S., Banerjee, S., Youssef, Y. M., … & Aboelnour, M. A.",j:"Geocarto International, 40(1), 2567906"},
  {y:2025,t:"A watershed model predicts the effects of cover crops on river flows, sediment transport, and nutrient loss to Lake Michigan",a:"Aboelnour, M. A., Tank, J. L., Hamlet, A. F., Royer, T. V., & Bolster, D.",j:"Journal of Great Lakes Research, 102528",first:1},
  {y:2025,t:"A SWAT model depicts the impact of land use change on hydrology, nutrient, and sediment loads in a Lake Michigan watershed",a:"Aboelnour, M. A., Tank, J. L., Hamlet, A. F., Bertassello, L. E., Ren, D., & Bolster, D.",j:"Modeling Earth Systems and Environment, 11(1), 22",first:1},
  {y:2022,t:"Improving probabilistic monthly water quantity and quality predictions using a simplified residual-based modeling approach",a:"Guo, T., Liu, Y., Shao, G., Engel, B. A., Sharma, A., Marshall, L. A., … & Aboelnour, M. A.",j:"Environmental Modelling & Software, 156, 105499"},
  {y:2021,t:"Evaluating Low-Impact Development practice performance to reduce runoff volume in an urban watershed in Algeria",a:"Abdelkebir, B., Maoui, A., Mokhtari, E., Engel, B., Chen, J., & Aboelnour, M.",j:"Arabian Journal of Geosciences, 14, 814"},
  {y:2021,t:"Impacts of Watershed Physical Properties and Land Use on Baseflow at Regional Scale",a:"Aboelnour, M., Engel, B. A., Frisbee, M. D., Gitau, M. W., & Flanagan, D. C.",j:"Journal of Hydrology: Regional Studies, 35, 100810",first:1},
  {y:2020,t:"A Comparison of Streamflow and Baseflow Responses to Land-Use Change and the Variation in Climate Parameters using SWAT",a:"Aboelnour, M., Gitau, M. W., & Engel, B. A.",j:"Water, 12(1), 191",first:1},
  {y:2019,t:"Hydrologic Response in an Urban Watershed as Affected by Climate and Land-Use Change",a:"Aboelnour, M., Gitau, M. W., & Engel, B. A.",j:"Water, 11(8), 1603",first:1},
  {y:2018,t:"Application of remote sensing techniques and geographic information systems to analyze land surface temperature in response to land use/land cover change in greater Cairo region, Egypt",a:"Aboelnour, M., & Engel, B. A.",j:"Journal of Geographic Information System, 10(1)",first:1},
  {y:2015,t:"Correlations between the North China Craton and the Indian Shield: Constraints from regional metallogeny",a:"Li, C., Chen, D., Chen, J., Chen, X., Yang, X., & Aboelnour, M. A.",j:"Geoscience Frontiers, 6(6), 861–873"}
];

const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const bold = a => esc(a).replace(/(Aboelnour,? M\.( A\.)?)/g,"<b>$1</b>");
const list = document.getElementById("pubs");
list.innerHTML = PUBS.map(p =>
  `<li class="reveal" data-first="${p.first?1:0}" data-nd="${p.y>=2022?1:0}">
     <span class="yr">${p.y}</span>
     <div><span class="ttl">${esc(p.t)}</span><span class="au">${bold(p.a)}</span><br><span class="jr">${esc(p.j)}</span></div>
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
["scholar-link","scholar-btn"].forEach(id => document.getElementById(id).href = LINKS.scholar);
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

/* ---- flowing-streamlines background ---- */
(() => {
  const cv = document.getElementById("flow"), ctx = cv.getContext("2d");
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let W, H, parts = [];
  const N = () => Math.min(140, Math.floor(innerWidth/9));
  function size(){ W = cv.width = innerWidth; H = cv.height = innerHeight;
    parts = Array.from({length:N()}, spawn); ctx.fillStyle="#070b12"; ctx.fillRect(0,0,W,H); }
  function spawn(){ return {x:Math.random()*W, y:Math.random()*H, v:.6+Math.random()*1.2, c:Math.random()<.5?"56,189,248":"45,212,191"}; }
  // smooth pseudo-random flow field (sum of sines) that drifts left->right like a river
  const ang = (x,y,t) => Math.sin(x*.0021+t*.0004)*.9 + Math.cos(y*.0027-t*.0003)*.8 + Math.sin((x+y)*.0011)*.4;
  function frame(t){
    ctx.fillStyle = "rgba(7,11,18,.07)"; ctx.fillRect(0,0,W,H);
    for(const p of parts){
      const a = ang(p.x,p.y,t), nx = p.x+Math.cos(a)*p.v+.5, ny = p.y+Math.sin(a)*p.v;
      ctx.strokeStyle = `rgba(${p.c},.55)`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(nx,ny); ctx.stroke();
      p.x=nx; p.y=ny;
      if(p.x>W||p.x<0||p.y>H||p.y<0) Object.assign(p, spawn(), {x:Math.random()<.7?0:Math.random()*W, y:Math.random()*H});
    }
    requestAnimationFrame(frame);
  }
  addEventListener("resize", size); size(); requestAnimationFrame(frame);
})();

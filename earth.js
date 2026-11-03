/* =====================================================
   earth.js: data and checklist logic for earth.html
   Progress here is saved separately from the main curriculum
   ===================================================== */

/* 1. TERM DATA: one entry per term.
   Format: [term number, title, goal, [items], "project title|project note", main-track link, [checkpoint questions]]
   Each item is "Tag|Title|Link|Note". Tags: Env, Bio, Energy, ML, Pro. Edit or add items here. */
var D=[
[1,"Climate and energy literacy","Learn the basic facts and numbers before any tools.",
["Env|Climate science basics|https://climate.nasa.gov/|NASA Climate: evidence, causes and effects. Then read the IPCC AR6 Summary for Policymakers (ipcc.ch).","Energy|Sustainable Energy: Without the Hot Air|https://www.withouthotair.com/|David MacKay’s free book. Read chapters 1 to 6 for the numbers behind energy use and supply.","Env|Our World in Data: energy and CO₂|https://ourworldindata.org/|Read the energy, CO₂ and air pollution pages and find India’s numbers."],
"Household energy and carbon audit|Track one month of electricity use and write what you would change.","Use your Term 1 command-line and Python skills to calculate the numbers.",
["Explain the greenhouse effect in 3 minutes.","Name the biggest sources of CO₂ globally and in India.","Convert kWh of electricity to kg of CO₂ and show the source of your factor."]],
[2,"Chemistry and biology basics","Build the science base that biotech and energy both need.",
["Bio|Biology foundations|https://www.khanacademy.org/science/biology|Cells, energy, genetics and ecology.","Env|Chemistry basics|https://www.khanacademy.org/science/chemistry|Atoms, reactions, acids and bases, energy in reactions.","Env|Project Drawdown solutions|https://drawdown.org/|Read the solutions list and pick 3 you want to work on."],
"One-page explainer|Explain one climate solution in plain English, with sources.","Publish it on your GitHub Pages site as a small web page.",
["Explain photosynthesis and respiration in a few sentences.","Explain what an acid and a base are.","Defend why you picked your 3 solutions."]],
[3,"Energy systems","Understand how electricity is made, stored and used.",
["Energy|Solar and PV basics|https://www.pveducation.org/|How solar cells work and how systems are sized.","Energy|NREL PVWatts calculator|https://pvwatts.nrel.gov/|Estimate the output of a rooftop system for Patna.","Energy|Batteries and storage|https://batteryuniversity.com/|Chemistries, capacity, lifetime and safety.","Energy|India’s energy mix and targets|https://mnre.gov.in/|Ministry of New and Renewable Energy: schemes, data and reports."],
"Rooftop solar estimator|A small web page where someone enters their roof size and monthly bill and sees a rough estimate.","Built with your Term 3 HTML, CSS and JavaScript.",
["Explain the difference between kW and kWh.","Explain why batteries are needed for solar.","State the assumptions and limits of your estimator."]],
[4,"Ecology and environmental data","Start working with real environmental data and maps.",
["Env|Ecology and ecosystems|https://ocw.mit.edu/|Search MIT OCW for 1.018J Ecology I, or NPTEL environment courses (nptel.ac.in).","ML|Environmental data in Python|https://ourworldindata.org/|Download Our World in Data files and chart emissions and energy by country with pandas.","Env|QGIS for maps|https://qgis.org/|Free GIS tool: layers, coordinates, simple maps.","Env|Air quality data|https://cpcb.nic.in/|Central Pollution Control Board data for Indian cities."],
"Year 1 Earth capstone: Patna air-quality or energy dashboard|Use public data and show trends over time with honest notes on gaps.","Your Term 4 full-stack skills: API, database and a front end.",
["Describe a food web and what happens when one part is removed.","Show where your data comes from and its gaps.","Explain one thing your charts cannot tell you."]],
[5,"Cell and molecular biology","Learn how DNA, proteins and cells work.",
["Bio|Fundamentals of Biology|https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/|MIT 7.01SC: DNA, proteins, genetics and recombinant DNA.","Bio|NCBI biological databases|https://www.ncbi.nlm.nih.gov/|Search genes, sequences and papers.","Bio|Rosalind first problems|https://rosalind.info/|Bioinformatics puzzles in Python. Solve the first 10."],
"DNA sequence analyser|A Python program for GC content, complement and translation of a sequence.","Uses your Term 5 algorithms and testing skills.",
["Explain DNA to RNA to protein.","Explain what a gene is and what a mutation does.","Show your tests for the sequence analyser."]],
[6,"Genetics, genomics and biotech tools","See how sequencing and biotech are used for the environment.",
["Bio|Genomics training|https://www.ebi.ac.uk/training/|EMBL-EBI free online courses.","Bio|Biopython|https://biopython.org/|Read and analyse sequence files.","Bio|Environmental biotechnology reading|https://www.ncbi.nlm.nih.gov/pmc/|Search PubMed Central for free papers on bioremediation, biofuels and soil microbes. Summarize 5."],
"Environmental microbe gene analysis|Analyse a public gene sequence, for example an enzyme that helps break down plastic.","Uses your Term 6 database and TypeScript or Python skills.",
["Explain how sequencing works at a high level.","Summarize one environmental biotech paper in plain words.","Explain one limit of the method you used."]],
[7,"Renewable energy engineering","Go deeper on how renewable systems are built.",
["Energy|Renewable energy courses|https://nptel.ac.in/|Search NPTEL for renewable energy engineering and power systems.","Energy|Physics for energy|https://ocw.mit.edu/|Search MIT OCW for mechanics and basic thermodynamics.","Energy|Wind, hydro and hydrogen overviews|https://www.iea.org/|Read three IEA technology overviews and write a summary of each."],
"Off-grid school solar design|A calculation notebook sizing solar and battery for a small school, with every assumption written down.","Uses the Term 7 data skills and ML basics.",
["Explain capacity factor.","Compare solar, wind and hydro in 5 sentences.","Show where your numbers come from."]],
[8,"Life cycle and Earth observation basics","Learn to measure impact properly.",
["Env|Life cycle assessment|https://www.openlca.org/|Free LCA software: measure the footprint of a product.","Env|GHG Protocol|https://ghgprotocol.org/|Standards for carbon accounting: scope 1, 2 and 3.","Env|Remote sensing basics|https://earthengine.google.com/|Google Earth Engine (free for non-commercial use): load and view satellite images."],
"Year 2 Earth capstone: footprint comparison tool|Compare two real options, for example an electric and a petrol scooter, as a deployed web tool with sources.","Deploy it with your Term 8 Docker and CI skills.",
["Explain what a life cycle assessment includes.","Explain scope 1, 2 and 3.","State the biggest uncertainty in your result."]],
[9,"Climate machine learning","Apply ML to energy and climate problems.",
["ML|Tackling Climate Change with Machine Learning|https://arxiv.org/abs/1906.05433|Free paper on where ML can help: energy, transport, buildings and agriculture.","ML|Climate Change AI|https://www.climatechange.ai/|Tutorials, datasets and a community.","ML|Time-series forecasting|https://www.kaggle.com/learn|Kaggle Learn: forecasting methods and validation."],
"Solar or demand forecasting|Forecast solar output or electricity demand with open data, and compare with a simple baseline.","Part of your Term 9 deep learning project.",
["Explain why a baseline matters.","Show your validation and results.","Describe one way your model could fail."]],
[10,"Bioinformatics with ML","Combine biology data with ML.",
["Bio|Bioinformatics Algorithms|https://www.bioinformaticsalgorithms.org/|Free online text on sequence algorithms.","Bio|Galaxy Training Network|https://training.galaxyproject.org/|Free hands-on tutorials for genomics and metagenomics.","Bio|AlphaFold Protein Database|https://alphafold.ebi.ac.uk/|Look up predicted structures and read how ML achieved them.","Bio|Rosalind continued|https://rosalind.info/|Reach 30 solved problems."],
"ML on a biological dataset|For example classify microbial sequences, with an honest evaluation.","Uses your Term 10 NLP and LLM ideas on sequence data.",
["Explain why biological data is easy to leak between train and test.","Show your evaluation.","Explain what AlphaFold does in plain words."]],
[11,"Energy systems modelling","Model grids and storage.",
["Energy|Energy system modelling|https://pypsa.org/|PyPSA: open-source Python tool for power system optimization.","Energy|Grid carbon data|https://app.electricitymaps.com/|See how grid carbon intensity changes by hour and region.","Energy|Optimization basics|https://ocw.mit.edu/|Search MIT OCW for linear programming, which energy models rely on."],
"Regional renewable mix model|Model a small mix of solar, wind and storage and test what storage changes.","Uses your Term 11 backend and distributed systems thinking.",
["Explain why storage matters for solar and wind.","Show one result that surprised you.","State what your model leaves out."]],
[12,"Earth observation ML and synthetic biology","Use satellites and read about engineered biology.",
["ML|Satellite datasets|https://planetarycomputer.microsoft.com/|Free Earth observation data and notebooks.","ML|Earth Engine in practice|https://earthengine.google.com/|Map flood extent or crop health for a Bihar district.","Bio|iGEM|https://igem.org/|Synthetic biology competition. Read past projects and consider joining a team."],
"Year 3 Earth capstone: flood or crop monitoring tool|A tool for one Bihar district using satellite data and ML, with accuracy numbers.","This can become your main Year 3 AI product MVP.",
["Explain NDVI or water indexes simply.","Show accuracy and how you checked it.","Explain what ground data you would need to trust it."]],
[13,"Choose your focus and research","Pick one direction and study it deeply.",
["Env|Pick one focus|https://drawdown.org/|Clean energy AI, environmental biotech, or climate data and Earth observation.","ML|Read 15 papers|https://www.climatechange.ai/|Papers and workshop proceedings in your focus. Summarize each.","Pro|Find collaborators|https://igem.org/|Talk to 10 people: researchers, NGOs, startups or local offices."],
"Joint thesis proposal|One proposal for the combined capstone: problem, data, method, impact, risks.","Joint with your main track thesis proposal.",
["Defend why this problem matters locally.","Show your paper summaries.","Show your impact measurement plan."]],
[14,"Capstone build I","Build the core of the climate-tech project.",
["ML|Build with real data|https://www.earthdata.nasa.gov/|NASA Earthdata: free datasets.","Env|Check the footprint honestly|https://www.openlca.org/|Estimate the footprint of your own project, including compute.","Pro|Weekly review with an expert|https://www.climatechange.ai/|Ask someone in the field to review your approach."],
"Climate-tech capstone core|A working core with real data and a baseline.","Same capstone as main Term 14.",
["Demo the working core.","Show the baseline comparison.","Show your footprint estimate."]],
[15,"Deploy with a real partner","Put it in front of the people it is for.",
["Pro|Pilot with a partner|https://mnre.gov.in/|A school, farm, NGO or local office. Measure before and after.","Pro|Write the impact report|https://ghgprotocol.org/|Use real numbers and state the limits and uncertainty.","Pro|Open-source release|https://github.com/|Publish code, data notes and documentation."],
"Pilot and report|A real trial with real measurements.","Same launch as main Term 15.",
["Show your before and after numbers.","State what did not work.","Explain what a partner would need to keep using it."]],
[16,"Career and next steps","Turn the work into a path.",
["Pro|Climate-tech roles and communities|https://www.climatechange.ai/|Labs, companies, fellowships and open-source projects.","Pro|Publish your work|https://github.com/|A public report, code and a short talk.","Pro|Plan the next 12 months|https://igem.org/|Study, research, a team, or a role. Write your plan with dates."],
"Final Earth portfolio|One page per project with problem, method, results and limits.","Part of your main career launch.",
["Present your best project in 5 minutes to a non-expert.","Show your measured impact and its limits.","Share your 12-month plan."]]
];

/* 2. TERM EVENTS: three events added to every term */
var EV=[["Week 4","One-page explainer: write what you learned in plain English"],["Week 8","Publish an analysis, notebook or calculation with data sources"],["Week 12","Show your Earth track work at Demo Day"]];

/* 3. YEAR HEADINGS: shown before terms 1, 5, 9 and 13 */
var YR=[["Year 1: Earth literacy","Terms 1 to 4. Facts, numbers, basic science and your first environmental data work."],["Year 2: Science and data","Terms 5 to 8. Molecular biology, renewable engineering, life cycle and carbon accounting."],["Year 3: Climate ML and bioinformatics","Terms 9 to 12. Forecasting, biological data, energy models and satellites."],["Year 4: Integration and impact","Terms 13 to 16. One real project with real partners, measured honestly."]];

/* 4. PROGRESS STORAGE: separate from the main curriculum so the two checklists do not mix */
var KEY="curr4y-earth-v1",S={};
try{S=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){S={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

/* 5. HELPERS: escape text and build one checklist row */
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function item(id,inner){return '<li id="li-'+id+'"><input type="checkbox" id="'+id+'"'+(S[id]?" checked":"")+'><div class="tb">'+inner+'</div></li>'}
var TAGS={Env:["Environment",""],Bio:["Biotech","bio"],Energy:["Energy","energy"],ML:["Applied ML",""],Pro:["Professional","pro"]};

/* 6. BUILD THE PAGE: loops over the term data and writes the HTML */
var h="";
D.forEach(function(t,i){
 if(i%4==0){var y=YR[i/4];h+='<h2 class="year" id="y'+(i/4+1)+'">'+y[0]+'</h2><p class="yg">'+y[1]+'</p>'}
 var n=t[0];
 h+='<section class="term" id="t'+n+'"><div class="th"><span class="tn">'+n+'</span><h3>'+esc(t[1])+'</h3><span class="tw">Pairs with Term '+n+'</span></div><p class="tg">'+esc(t[2])+'</p><ul class="tasks">';
 t[3].forEach(function(k,j){var p=k.split("|"),g=TAGS[p[0]];
  h+=item("e"+n+"k"+j,'<span class="tag '+g[1]+'">'+g[0]+'</span><span class="tt"><a href="'+p[2]+'" target="_blank" rel="noopener">'+esc(p[1])+'</a></span><span class="note">'+esc(p[3])+'</span>')});
 var project=t[4].split("|");
 
 h+='</ul><h4>Green project</h4><ul class="tasks">'+item("e"+n+"p",'<span class="tt">'+esc(project[0])+'</span><span class="note">'+esc(project[1])+'</span>')+'</ul><p class="tg" style="margin:8px 0 0"><strong>Link to the main track:</strong> '+esc(t[5])+'</p><h4>Term events</h4><ul class="tasks">';
 EV.forEach(function(e,j){h+=item("e"+n+"e"+j,'<span class="tt">'+e[0]+'</span><span class="note">'+e[1]+'</span>')});
 
 h+='</ul><details class="check"><summary>Checkpoint '+n+'</summary><div class="in"><ol>'+t[6].map(function(c){return"<li>"+esc(c)+"</li>"}).join("")+'</ol></div></details></section>';
});
document.getElementById("terms").innerHTML=h;

/* 7. UPDATE PROGRESS: counts ticks, moves the bar, strikes through finished items */
function upd(){var c=document.querySelectorAll("#terms input[type=checkbox]"),d=0;
 c.forEach(function(x){var on=x.checked;if(on)d++;x.closest("li").classList.toggle("done",on)});
 document.getElementById("done").textContent=d;document.getElementById("total").textContent=c.length;
 document.getElementById("fill").style.width=(c.length?100*d/c.length:0)+"%"}

/* 8. SAVE ON TICK */
document.getElementById("terms").addEventListener("change",function(e){if(e.target.type=="checkbox"){S[e.target.id]=e.target.checked?1:0;save();upd()}});

/* 9. CLEAR PROGRESS BUTTON: click twice within 3 seconds to confirm */
var rb=document.getElementById("reset"),armed=false;
rb.addEventListener("click",function(){if(!armed){armed=true;rb.textContent="Click again to clear";setTimeout(function(){armed=false;rb.textContent="Clear progress"},3000);return}
 S={};save();document.querySelectorAll("#terms input[type=checkbox]").forEach(function(x){x.checked=false});armed=false;rb.textContent="Clear progress";upd()});
upd();

/* 10. LIGHT AND DARK THEME: same saved choice as the other pages */
var THEME_KEY="curr4y-theme",root=document.documentElement,tbtn=document.getElementById("theme");
function setTheme(t){root.setAttribute("data-theme",t);tbtn.textContent=t=="dark"?"Light mode":"Dark mode";try{localStorage.setItem(THEME_KEY,t)}catch(e){}}
var savedTheme="light";
try{savedTheme=localStorage.getItem(THEME_KEY)||"light"}catch(e){}
setTheme(savedTheme);
tbtn.addEventListener("click",function(){setTheme(root.getAttribute("data-theme")=="dark"?"light":"dark")});

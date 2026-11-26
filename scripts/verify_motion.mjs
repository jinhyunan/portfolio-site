import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root=path.resolve(import.meta.dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'motion-lab/manifest.json'),'utf8'));
const results=[];let missing=0;
for(const item of manifest){
 const filename=path.join(root,'motion-lab',item.module);
 if(!fs.existsSync(filename)){missing++;continue;}
 const module=await import(pathToFileURL(filename));
 const topic=JSON.parse(fs.readFileSync(path.join(root,'motion-lab/resources',item.topic+'.json'),'utf8'));
 const size=fs.statSync(filename).size;
 if(size>32768)throw Error(`${item.id}: module exceeds equal resource allowance`);
 if(module.id!==item.id||typeof module.render!=='function'||typeof module.css!=='string')throw Error(`${item.id}: invalid interface`);
 const renders=[];
 for(let phase=0;phase<5;phase++)for(const [choice] of topic.choices){
  const uid=`check-${item.id}-${phase}-${choice}`;
  const svg=module.render(phase,choice,uid);
  if(!/<svg\b/.test(svg)||!svg.includes('viewBox="0 0 720 460"')||!svg.includes('aria-label='))throw Error(`${item.id}: missing SVG interface`);
  if(/<script|<image|<foreignObject|\son\w+=|(?:href|src)=["'](?:https?:)?\/\//i.test(svg))throw Error(`${item.id}: forbidden SVG execution/external asset`);
  if(svg!==module.render(phase,choice,uid))throw Error(`${item.id}: non-deterministic render`);
  if(/\/Users\/|API_KEY|PRIVATE_KEY|ACCESS_TOKEN/.test(svg))throw Error(`${item.id}: private material`);
  renders.push({phase,choice,svg});
 }
 const explore=renders.filter(r=>r.phase===2);
 if(new Set(explore.map(r=>r.svg.replace(/check-[A-Z0-9]+-2-\w+/g,'uid'))).size!==topic.choices.length)throw Error(`${item.id}: condition has no visible output change`);
 if(/\binfinite\b/.test(module.css))throw Error(`${item.id}: infinite motion`);
 results.push({id:item.id,bytes:size,renders:renders.length,translations:module.translations?.length||0});
}
fs.writeFileSync(path.join(root,'motion-lab/verification.json'),JSON.stringify({submitted:results.length,expected:20,missing,entries:results},null,2));
console.log(JSON.stringify({submitted:results.length,missing,bytes:results.reduce((s,r)=>s+r.bytes,0)}));
if(process.argv.includes('--complete')&&missing)throw Error('Competition is incomplete');

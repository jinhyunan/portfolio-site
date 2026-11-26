import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=path.resolve(import.meta.dirname,'..');
const report=[];
const allPairs=[];
// Engineering identifiers and symbolic unknowns keep their notation in both languages.
const invariant=new Set(['A.OUT','B.IN','T1','T2','D = ?','Δp = ?','Q','H','K']);
const decode=text=>text.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim();
for(const topic of ['pid','calc','ontology','tbe']){
 const file=path.join(root,'work/motion',`${topic}.js`);
 const art=await import(pathToFileURL(file));
 const resource=JSON.parse(fs.readFileSync(path.join(root,'motion-lab/resources',`${topic}.json`),'utf8'));
 const pairs=new Map(art.translations),untranslated=new Set();
 allPairs.push(...art.translations);
 const reverse=new Map();
 for(const [en,ko] of art.translations){
  if(reverse.has(ko.trim())&&reverse.get(ko.trim())!==en.trim())throw Error(`${topic}: ambiguous language roundtrip for ${ko}`);
  reverse.set(ko.trim(),en.trim());
 }
 if(fs.statSync(file).size>40960)throw Error(`${topic}: exceeds final resource allowance`);
 if(/\binfinite\b/.test(art.css))throw Error(`${topic}: infinite motion`);
 let states=0;
 for(let phase=0;phase<5;phase++){
  const variants=[];
  for(const [choice] of resource.choices){
   const uid=`audit-${topic}-${phase}`;
   const svg=art.render(phase,choice,uid);
   if(svg!==art.render(phase,choice,uid))throw Error(`${topic}: unstable output`);
   if(!svg.includes('viewBox="0 0 720 460"')||!svg.includes('role="img"'))throw Error(`${topic}: inaccessible SVG interface`);
   if(/<script|<image|<foreignObject|\son\w+=|(?:href|src)=["'](?:https?:)?\/\//i.test(svg))throw Error(`${topic}: forbidden SVG content`);
   const ids=[...svg.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
   if(new Set(ids).size!==ids.length||ids.some(id=>!id.startsWith(uid)))throw Error(`${topic}: unsafe SVG identifiers`);
   for(const match of svg.matchAll(/url\(#([^)]+)\)|href="#([^"]+)"/g))if(!ids.includes(match[1]||match[2]))throw Error(`${topic}: unresolved SVG reference`);
   const labels=[...svg.matchAll(/<text\b[^>]*>([^<]+)<\/text>/g),...svg.matchAll(/aria-label="([^"]+)"/g)].map(match=>decode(match[1]));
   for(const text of labels)if(/[A-Za-z]/.test(text)&&!pairs.has(text)&&!invariant.has(text))untranslated.add(text);
   variants.push(svg);states++;
  }
  if(phase===2&&new Set(variants).size!==resource.choices.length)throw Error(`${topic}: choice has no visible effect`);
 }
 report.push({topic,states,bytes:fs.statSync(file).size,untranslated:[...untranslated]});
}
const normalize=text=>text.trim().replace(/\s+/g,' ');
const homeMap=new Map();
const basePairs=JSON.parse(fs.readFileSync(path.join(root,'scripts/translations.json'),'utf8'));
for(const [en,ko] of [...basePairs,...allPairs]){homeMap.set(normalize(en),{en,ko});homeMap.set(normalize(ko),{en,ko});}
for(const [en] of allPairs){const ko=homeMap.get(normalize(en)).ko;if(homeMap.get(normalize(ko)).en!==en)throw Error(`Homepage language roundtrip changes ${en}`);}
console.log(JSON.stringify(report,null,2));
if(report.some(row=>row.untranslated.length))process.exitCode=1;

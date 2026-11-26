import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root=path.resolve(import.meta.dirname,'..');
const markup={},pairs=[];let css='/* Generated from the four authored final modules. */\n';
for(const slug of ['pid','calc','ontology','tbe']){
 const entry=await import(pathToFileURL(path.join(root,'work/motion',slug+'.js')));
 const resource=JSON.parse(fs.readFileSync(path.join(root,'motion-lab/resources',slug+'.json'),'utf8'));
 markup[slug]=Array.from({length:5},(_,phase)=>entry.render(phase,resource.choices[0][0],`final-${slug}-${phase}`).replace(/[ \t]+$/gm,''));
 css+='\n'+entry.css+'\n';pairs.push(...entry.translations);
 fs.writeFileSync(path.join(root,'work/motion',slug+'.i18n.js'),'window.PORTFOLIO_PAGE_TRANSLATIONS = '+JSON.stringify(entry.translations)+';\n');
}
fs.writeFileSync(path.join(root,'work/motion/static.json'),JSON.stringify(markup));
fs.writeFileSync(path.join(root,'work/motion/themes.css'),css.trimEnd()+'\n');
fs.writeFileSync(path.join(root,'work/motion/translations.json'),JSON.stringify(pairs,null,2));
fs.writeFileSync(path.join(root,'work/motion/home.i18n.js'),'window.PORTFOLIO_PAGE_TRANSLATIONS = '+JSON.stringify([...pairs,['Pause project motion','프로젝트 모션 일시정지'],['Resume project motion','프로젝트 모션 계속 보기'],['Replay project motion','프로젝트 모션 다시 보기']])+';\n');
console.log('Built four static motion compositions, 20 scenes.');

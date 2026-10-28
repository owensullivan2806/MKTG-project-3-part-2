import {mkdir,copyFile,cp,writeFile,readFile} from 'node:fs/promises';
import {validate,defaults} from '../model.mjs';
validate(defaults());let data=JSON.parse(await readFile(new URL('../data/competitor_data.json',import.meta.url),'utf8'));if(data.pricing_offers.length!==7)throw Error('Missing competitor evidence');
const root=new URL('../',import.meta.url);for(let target of ['dist','docs']){await mkdir(new URL(target+'/',root),{recursive:true});for(let f of ['index.html','styles.css','app.js','model.mjs','report.mjs'])await copyFile(new URL(f,root),new URL(target+'/'+f,root));for(let d of ['data','vendor'])await cp(new URL(d,root),new URL(target+'/'+d,root),{recursive:true});await writeFile(new URL(target+'/.nojekyll',root),'');}console.log('Validated production build: dist/ and docs/');

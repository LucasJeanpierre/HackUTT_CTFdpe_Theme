import{m as s,C as a,h as r,T as h,d as g,M as c}from"./index.5589bc4f.js";function o(e){let l=new DOMParser().parseFromString(e,"text/html");return l.querySelectorAll('a[href*="://"]').forEach(i=>{i.setAttribute("target","_blank")}),l.documentElement.outerHTML}window.Alpine=s;s.store("challenge",{data:{view:""}});s.data("Hint",()=>({id:null,html:null,async showHint(e){if(e.target.open){let l=(await a.pages.challenge.loadHint(this.id)).data;if(l.content)this.html=o(l.html);else if(await a.pages.challenge.displayUnlock(this.id)){let i=await a.pages.challenge.loadUnlock(this.id);if(i.success){let d=(await a.pages.challenge.loadHint(this.id)).data;this.html=o(d.html)}else e.target.open=!1,a._functions.challenge.displayUnlockError(i)}else e.target.open=!1}}}));s.data("Challenge",()=>({id:null,next_id:null,submission:"",tab:null,solves:[],response:null,async init(){r()},getStyles(){let e={"modal-dialog":!0};try{switch(a.config.themeSettings.challenge_window_size){case"sm":e["modal-sm"]=!0;break;case"lg":e["modal-lg"]=!0;break;case"xl":e["modal-xl"]=!0;break;default:break}}catch(t){console.log("Error processing challenge_window_size"),console.log(t)}return e},async init(){r()},async showChallenge(){new h(this.$el).show()},async showSolves(){this.solves=await a.pages.challenge.loadSolves(this.id),this.solves.forEach(e=>(e.date=g(e.date).format("MMMM Do, h:mm:ss A"),e)),new h(this.$el).show()},getNextId(){return s.store("challenge").data.next_id},async nextChallenge(){let e=c.getOrCreateInstance("[x-ref='challengeWindow']");e._element.addEventListener("hidden.bs.modal",t=>{s.nextTick(()=>{this.$dispatch("load-challenge",this.getNextId())})},{once:!0}),e.hide()},async submitChallenge(){this.response=await a.pages.challenge.submitChallenge(this.id,this.submission),await this.renderSubmissionResponse()},async renderSubmissionResponse(){this.response.data.status==="correct"&&(this.submission=""),this.$dispatch("load-challenges")}}));s.data("ChallengeBoard",()=>({loaded:!1,challenges:[],challenge:null,async init(){if(this.challenges=await a.pages.challenges.getChallenges(),this.loaded=!0,window.location.hash){let e=decodeURIComponent(window.location.hash.substring(1)),t=e.lastIndexOf("-");if(t>=0){let n=[e.slice(0,t),e.slice(t+1)][1];await this.loadChallenge(n)}}},getCategories(){const e=[];this.challenges.forEach(t=>{const{category:l}=t;e.includes(l)||e.push(l)});try{const t=a.config.themeSettings.challenge_category_order;if(t){const l=new Function(`return (${t})`);e.sort(l())}}catch(t){console.log("Error running challenge_category_order function"),console.log(t)}return e},getChallenges(e){let t=this.challenges;e!==null&&(t=this.challenges.filter(l=>l.category===e));try{const l=a.config.themeSettings.challenge_order;if(l){const n=new Function(`return (${l})`);t.sort(n())}}catch(l){console.log("Error running challenge_order function"),console.log(l)}return t},async loadChallenges(){this.challenges=await a.pages.challenges.getChallenges()},async loadChallenge(e){await a.pages.challenge.displayChallenge(e,t=>{t.data.view=o(t.data.view),s.store("challenge").data=t.data,s.nextTick(()=>{let l=c.getOrCreateInstance("[x-ref='challengeWindow']");l._element.addEventListener("hidden.bs.modal",n=>{history.replaceState(null,null," ")},{once:!0}),l.show(),history.replaceState(null,null,`#${t.data.name}-${e}`)})})}}));s.start();

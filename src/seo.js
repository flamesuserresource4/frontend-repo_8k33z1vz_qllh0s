export function applySEO({ title, description }){
  document.title = title
  const set = (n, c)=>{
    let el = document.querySelector(`meta[name="${n}"]`)
    if(!el){ el = document.createElement('meta'); el.setAttribute('name', n); document.head.appendChild(el) }
    el.setAttribute('content', c)
  }
  set('description', description)
}

export function injectJSONLD(type, data){
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...data })
  document.head.appendChild(script)
}

import { useState } from 'react'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1, 'Pflichtfeld'),
  lastName: z.string().min(1, 'Pflichtfeld'),
  company: z.string().min(1, 'Pflichtfeld'),
  email: z.string().email('Ungültige E-Mail'),
  phone: z.string().regex(/^\+?[1-9]\d{7,14}$/,'E.164-Format erforderlich'),
  interest: z.enum(['Termin-Lead','L1/L2','Reminder','After-Hours']),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  consent: z.boolean().refine(v=>v===true,'Bitte Datenschutz akzeptieren')
})

export default function LeadForm(){
  const [values, setValues] = useState({firstName:'',lastName:'',company:'',email:'',phone:'',interest:'Termin-Lead',startDate:'',endDate:'',consent:false})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const onChange = (e)=>{
    const {name, type, value, checked} = e.target
    setValues(v=>({...v, [name]: type==='checkbox'? checked : value}))
  }

  const onSubmit = async (e)=>{
    e.preventDefault()
    setServerError('')
    const parsed = schema.safeParse({...values})
    if(!parsed.success){
      const fieldErrors = {}
      parsed.error.issues.forEach(i=>{ fieldErrors[i.path[0]] = i.message })
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setLoading(true)
    try{
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const body = {
        ...values,
        startDate: values.startDate ? new Date(values.startDate).toISOString() : null,
        endDate: values.endDate ? new Date(values.endDate).toISOString() : null,
      }
      const res = await fetch(`${base}/api/lead`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
      if(!res.ok){
        const d = await res.json().catch(()=>({detail:'Fehler'}))
        throw new Error(d.detail || 'Fehler beim Absenden')
      }
      window.location.href = '/success'
    }catch(err){
      setServerError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Vorname</label>
          <input name="firstName" value={values.firstName} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Nachname</label>
          <input name="lastName" value={values.lastName} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Firma</label>
        <input name="company" value={values.company} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">E-Mail</label>
          <input name="email" type="email" value={values.email} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Telefon</label>
          <input name="phone" value={values.phone} onChange={onChange} placeholder="+49123456789" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Interesse</label>
          <select name="interest" value={values.interest} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
            <option>Termin-Lead</option>
            <option>L1/L2</option>
            <option>Reminder</option>
            <option>After-Hours</option>
          </select>
          {errors.interest && <p className="text-sm text-red-600 mt-1">{errors.interest}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Wunsch: Start</label>
          <input type="date" name="startDate" value={values.startDate} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Wunsch: Ende</label>
          <input type="date" name="endDate" value={values.endDate} onChange={onChange} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input id="consent" type="checkbox" name="consent" checked={values.consent} onChange={onChange} className="h-4 w-4" />
        <label htmlFor="consent" className="text-sm text-slate-700">Ich akzeptiere die Datenschutzbestimmungen.</label>
      </div>
      {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}

      {serverError && <div className="rounded-md bg-red-50 text-red-700 px-3 py-2 text-sm">{serverError}</div>}

      <button disabled={loading} className="w-full rounded-lg bg-slate-900 text-white font-semibold py-3 hover:bg-slate-800 transition disabled:opacity-60">
        {loading ? 'Bitte warten…' : 'Anfrage absenden'}
      </button>
    </form>
  )
}

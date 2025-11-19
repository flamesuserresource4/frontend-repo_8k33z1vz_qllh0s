import * as React from 'react'

const TabsContext = React.createContext({ value: '', setValue: () => {} })

export function Tabs({ defaultValue, className = '', children }) {
  const [value, setValue] = React.useState(defaultValue)
  return (
    <div className={className}>
      <TabsContext.Provider value={{ value, setValue }}>
        {children}
      </TabsContext.Provider>
    </div>
  )
}

export function TabsList({ children }) {
  const { value, setValue } = React.useContext(TabsContext)
  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { selected: value, setValue })
          : child
      )}
    </div>
  )
}

export function TabsTrigger({ children, value, selected, setValue }) {
  const active = selected === value
  return (
    <button
      type="button"
      onClick={() => setValue(value)}
      className={
        `px-4 py-2 rounded-md text-sm font-medium transition border ` +
        (active
          ? 'bg-slate-900 text-white border-slate-900'
          : 'bg-white text-slate-700 border-transparent hover:bg-slate-50')
      }
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value }) {
  const { value: selected } = React.useContext(TabsContext)
  if (selected !== value) return null
  return <div>{children}</div>
}

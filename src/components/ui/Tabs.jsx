import * as React from 'react'

export function Tabs({ defaultValue, className, children }) {
  const [value, setValue] = React.useState(defaultValue)
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) return React.cloneElement(child, { value, setValue })
        return child.type === TabsContent ? React.cloneElement(child, { value }) : child
      })}
    </div>
  )
}

export function TabsList({ children, value, setValue }) {
  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
      {React.Children.map(children, (child) => React.cloneElement(child, { value, setValue }))}
    </div>
  )
}

export function TabsTrigger({ children, value: tabValue, value: _ignored, setValue }) {
  // We accept props.value as tab identifier; actual selected value is passed via setValue/value by TabsList
  return (
    <button
      onClick={() => setValue(tabValue)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition border ${setValue ? '' : ''}`}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, value: tabValue, ...rest }) {
  // Only render content whose value matches the Tabs state
  if (rest.value !== value) return null
  return <div>{children}</div>
}

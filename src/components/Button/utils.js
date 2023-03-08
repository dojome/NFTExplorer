export const getBackgroundColor = type => {
  switch (type) {
    case 'primary':
      return 'bg-slate-800'
    case 'secondary':
      return 'bg-transparent'
    default:
      return 'bg-slate-800'
  }
}

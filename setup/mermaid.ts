import { defineMermaidSetup } from '@slidev/types'

// Monochrome diagrams: black lines/text on white
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    background: '#ffffff',
    primaryColor: '#ffffff',
    primaryTextColor: '#111111',
    primaryBorderColor: '#111111',
    lineColor: '#111111',
    secondaryColor: '#f4f4f4',
    tertiaryColor: '#ffffff',
    edgeLabelBackground: '#ffffff',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: '18px',
    actorBkg: '#ffffff',
    actorBorder: '#111111',
    signalColor: '#111111',
    noteBkgColor: '#f4f4f4',
    noteBorderColor: '#999999',
  },
}))

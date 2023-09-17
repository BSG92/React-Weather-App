/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{jsx,tsx}"
],
  theme: {
    extend: {
      boxShadow: {
        even : '0 0 6px 6px'
        // shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
      }
    },
    colors: {
        // 'dark': "#272727",
        'dark': "#262626",
        'inherit': "inherit",
        'black': "#000",
        'white': "#fff",
        'transparent': "transparent",
        'neutral': {
            '900': '#171717',
            '400': '#A3A3A3',
            '200': '#E5E5E5'
        },
        'red':{
            '900':'#7F1D1D',
            '700':'#B91C1C',
            '500':'#EF4444'
        },
        'rose':{
            '900':'#881337',
            '500':'#F43F5E',
            '300':'#FDA4AF',
            '200':'#FECDD3',
            '100':'#FFE4E6',
        },
        'sky':{
            '900':'#0C4A6E',
            '500':'#0EA5E9',
            '300':'#7DD3FC',
            '200':'#BAE6FD',
            '100':'#E0F2FE',
        },
        'green':{
            '900':'#14532D',
            '500':'#22C55E',
            '300':'#86EFAC',
            '200':'#BBF7D0',
            '100':'#DCFCE7',
        },
        'teal':{
            '900':'#134E4A',
            '500':'#14B8A6',
            '300':'#5EEAD4',
            '200':'#99F6E4',
            '100':'#CCFBF1',
        },
        'orange':{
            '900':'#78350F',
            '500':'#F59E0B',
            '300':'#FCD34D',
            '200':'#FDE68A',
            '100':'#FEF3C7',
        },
        'yellow':{
            '900':'#713F12',
            '500':'#EAB308',
            '300':'#FDE047',
            '200':'#FEF08A',
            '100':'#FEF9C3',
        },
        'violet':{
            '900':'#4C1D95',
            '500':'#8B5CF6',
            '300':'#C4B5FD',
            '200':'#DDD6FE',
            '100':'#EDE9FE',
        },
        'indigo':{
            '900':'#701A75',
            '500':'#D946EF',
            '300':'#F0ABFC',
            '200':'#F5D0FE',
            '100':'#FAE8FF',
        },
    }
    
  },
  safelist: [
    {
        pattern: /(bg|text|shadow|ring|border|outline|caret)-(dark|inherit|black|white|transparent|neutral-900 | neutral-400 | neutral-200 | red-900|red-700|red-500 | rose-900|rose-500|rose-300|rose-200|rose-100| sky-900|sky-500|sky-300|sky-200|sky-100| green-900|green-500|green-300|green-200|green-100| teal-900|teal-500|teal-300|teal-200|teal-100| orange-900|orange-500|orange-300|orange-200|orange-100| yellow-900|yellow-500|yellow-300|yellow-200|yellow-100| violet-900|violet-500|violet-300|violet-200|violet-100| indigo-900|indigo-500|indigo-300|indigo-200|indigo-100|)/
    }
  ],
  plugins: [],
}


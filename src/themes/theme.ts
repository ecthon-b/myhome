import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: 'Rajdhani, sans-serif',
        body: 'Poppins, sans-serif'
    },

    colors: {
        blue: '#0D111D',
        purple: '#5D5FEF',
        gray_text: '#707076',
    }
})

export default theme;
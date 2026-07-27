export const DESIGN_TOKENS = {
  fonts: {
    poppins: 'Poppins, sans-serif',
    openSans: 'Open Sans, sans-serif',
  },
  typography: {
    display1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '4.5rem', // 72px
      lineHeight: 1,
      letterSpacing: '0',
      paragraphSpacing: '0.094rem', // 1.5px
      color: '#0C0C20',
    },
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem', // 56px
      lineHeight: 1,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '3rem', // 48px
      lineHeight: 1,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '2rem', // 32px
      lineHeight: 1,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem', // 24px
      lineHeight: 1,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    h4Uppercase: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem', // 24px
      lineHeight: 1,
      letterSpacing: '0',
      color: '#0C0C20',
      textTransform: 'uppercase' as const,
    },
    paragraph: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
      fontSize: '1rem', // 16px
      lineHeight: 1,
      letterSpacing: '0',
      color: '#000000',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '1.125rem', // 18px
      lineHeight: 1.5,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '1rem', // 16px
      lineHeight: 1.5,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    caption: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem', // 12px
      lineHeight: 1,
      letterSpacing: '0.1em',
      color: '#000000',
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem', // 20px
      lineHeight: 1.35,
      letterSpacing: '0',
      color: '#0C0C20',
    },
    hyperlink: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem', // 18px
      lineHeight: 1.5,
      letterSpacing: '0',
      color: '#52B698',
    },
  },
  colors: {
    primary: '#ED5828',
    secondaryGray: '#5E5E5E',
    secondaryWhite: '#FFFFFF',
    neutralDark: '#0C0C20',
    neutralLight: '#F6FEF9',
    hyperlink: '#52B698',
    black: '#000000',
  },
  shadows: {
    sm: '0 4px 8px rgba(0, 0, 0, 0.15)',
    md: '0 4px 8px rgba(0, 0, 0, 0.10)',
    lg: '0 2px 4px rgba(0, 0, 0, 0.10)',
  },
  spacing: {
    space1: '0.25rem', // 4px
    space2: '0.5rem',  // 8px
    space3: '1rem',    // 16px
    space4: '1.5rem',  // 24px
    space5: '2rem',    // 32px
    space6: '3rem',    // 48px
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;

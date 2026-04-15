export const siteTheme = {
  colors: {
    primary: '#81a8e1',
    primaryDark: '#121643',
        background: '#81a8e1',
        surface: '#ffffff',
        surfaceAlt: '#ffffff',
    text: '#1f1f1f',
    textMuted: '#5c5c5c',
    border: '#ffad01',
        headerBg: '#121643',
        headerText: '#ffad01',
  },
  radius: {
    sm: '8px',
    md: '14px',
    lg: '20px',
  },
};

export const antdTheme = {
  token: {
    colorPrimary: siteTheme.colors.primary,
    colorBgLayout: siteTheme.colors.background,
    colorBgContainer: siteTheme.colors.surface,
    colorText: siteTheme.colors.text,
    colorTextSecondary: siteTheme.colors.textMuted,
    borderRadius: 12,
  },
};

export function applyThemeVariables() {
  const root = document.documentElement;
  const variables = {
    '--color-primary': siteTheme.colors.primary,
    '--color-primary-dark': siteTheme.colors.primaryDark,
    '--color-background': siteTheme.colors.background,
    '--color-surface': siteTheme.colors.surface,
    '--color-surface-alt': siteTheme.colors.surfaceAlt,
    '--color-text': siteTheme.colors.text,
    '--color-text-muted': siteTheme.colors.textMuted,
    '--color-border': siteTheme.colors.border,
    '--color-header-bg': siteTheme.colors.headerBg,
    '--color-header-text': siteTheme.colors.headerText,
    '--radius-sm': siteTheme.radius.sm,
    '--radius-md': siteTheme.radius.md,
    '--radius-lg': siteTheme.radius.lg,
  };

  Object.entries(variables).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
}

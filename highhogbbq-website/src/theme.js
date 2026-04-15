export const siteTheme = {
  colors: {
    primary: '#b33a1f',
    primaryDark: '#7f2713',
    background: '#f8f5f1',
    surface: '#ffffff',
    surfaceAlt: '#fff7ef',
    text: '#1f1f1f',
    textMuted: '#5c5c5c',
    border: '#e7ddd2',
    headerBg: '#2b170f',
    headerText: '#fff5eb',
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

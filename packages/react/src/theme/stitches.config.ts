import { createStitches, PropertyValue, ScaleValue, CSS as StitchesCSS } from '@stitches/react';

import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  grayA,
  mauveA,
  slateA,
  sageA,
  oliveA,
  sandA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  grayDarkA,
  mauveDarkA,
  slateDarkA,
  sageDarkA,
  oliveDarkA,
  sandDarkA,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  grass,
  brown,
  orange,
  tomatoA,
  redA,
  crimsonA,
  pinkA,
  plumA,
  purpleA,
  violetA,
  indigoA,
  blueA,
  cyanA,
  tealA,
  greenA,
  grassA,
  brownA,
  orangeA,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  brownDark,
  orangeDark,
  tomatoDarkA,
  redDarkA,
  crimsonDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  violetDarkA,
  indigoDarkA,
  blueDarkA,
  cyanDarkA,
  tealDarkA,
  greenDarkA,
  grassDarkA,
  brownDarkA,
  orangeDarkA,
  sky,
  mint,
  lime,
  yellow,
  amber,
  skyDark,
  mintDark,
  limeDark,
  yellowDark,
  amberDark,
  skyA,
  mintA,
  limeA,
  yellowA,
  amberA,
  skyDarkA,
  mintDarkA,
  limeDarkA,
  yellowDarkA,
  amberDarkA,
  gold,
  bronze,
  goldDark,
  bronzeDark,
  goldA,
  bronzeA,
  goldDarkA,
  bronzeDarkA,
  blackA,
  whiteA,
} from '@radix-ui/colors';

export const { styled, css, config, theme, createTheme, reset, getCssText, globalCss, keyframes } =
  createStitches({
    theme: {
      colors: {
        // neutrals
        ...gray,
        ...mauve,
        ...slate,
        ...sage,
        ...olive,
        ...sand,

        ...grayA,
        ...mauveA,
        ...slateA,
        ...sageA,
        ...oliveA,
        ...sandA,
        // for white text
        ...tomato,
        ...red,
        ...crimson,
        ...pink,
        ...plum,
        ...purple,
        ...violet,
        ...indigo,
        ...blue,
        ...cyan,
        ...teal,
        ...green,
        ...grass,
        ...brown,
        ...orange,

        ...tomatoA,
        ...redA,
        ...crimsonA,
        ...pinkA,
        ...plumA,
        ...purpleA,
        ...violetA,
        ...indigoA,
        ...blueA,
        ...cyanA,
        ...tealA,
        ...greenA,
        ...grassA,
        ...brownA,
        ...orangeA,
        // for black text
        ...sky,
        ...mint,
        ...lime,
        ...yellow,
        ...amber,

        ...skyA,
        ...mintA,
        ...limeA,
        ...yellowA,
        ...amberA,
        // metals
        ...gold,
        ...bronze,

        ...goldA,
        ...bronzeA,
        // overlays
        ...blackA,
        ...whiteA,
      },
      fonts: {
        body: 'ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        heading:
          'ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
      fontSizes: {
        1: '.75rem',
        2: '.875rem',
        3: '1rem',
        4: '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.875rem',
        8: '2.25rem',
        9: '3rem',
        10: '3.75rem',
        11: '4.5rem',
        12: '6rem',
      },
      fontWeights: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
      },
      lineHeights: {
        1: '1rem',
        2: '1.25rem',
        3: '1.5rem',
        4: '1.75rem',
        5: '1.75rem',
        6: '2rem',
        7: '2.25rem',
        8: '2.5rem',
        9: '3rem',
        10: '3.75rem',
        11: '4.5rem',
        12: '6rem',
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        5: '20px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
      },
      space: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        30: '120px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        16: '64px',
        20: '80px',
        30: '120px',
        40: '160px',
        50: '200px',
        60: '240px',
        80: '320px',
        100: '400px',
        120: '480px',
      },
      shadows: {},
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
      reducedMotion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      p: (value: PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
      pt: (value: PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      mt: (value: PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      bg: (value: PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      br: (value: PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      btrr: (value: ScaleValue<'radii'>) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: ScaleValue<'radii'>) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: ScaleValue<'radii'>) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: ScaleValue<'radii'>) => ({
        borderTopLeftRadius: value,
      }),
      ox: (value: PropertyValue<'overflowX'>) => ({ overflowX: value }),
      oy: (value: PropertyValue<'overflowY'>) => ({ overflowY: value }),

      w: (value: PropertyValue<'width'>) => ({ width: value }),
      h: (value: PropertyValue<'height'>) => ({ height: value }),
      maxW: (value: PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
      maxH: (value: PropertyValue<'maxHeight'>) => ({ maxHeight: value }),

      size: (value: PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),

      userSelect: (value: PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),
      appearance: (value: PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

const darkModeConfig = {
  colors: {
    // neutrals
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    // for white text
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...brownDark,
    ...orangeDark,

    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...grassDarkA,
    ...brownDarkA,
    ...orangeDarkA,
    // for black text
    ...skyDark,
    ...mintDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,

    ...skyDarkA,
    ...mintDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    // metals
    ...goldDark,
    ...bronzeDark,

    ...goldDarkA,
    ...bronzeDarkA,
  },
};

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
});

globalStyles();

export const darkTheme = createTheme('dark-theme', darkModeConfig);
export type CSS = StitchesCSS<typeof config>;
export type { ComponentProps, VariantProps, PropertyValue, ScaleValue } from '@stitches/react';
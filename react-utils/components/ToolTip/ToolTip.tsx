import MaterialToolTip, {
  tooltipClasses,
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';
import {
  Navy_80,
  Neutral_0,
  Orange_60,
  fontFamily,
  fontSize,
  semiBoldWeight,
} from 'stylesConfig.ts';

export const getTooltipStylesOverride = (noWidth?: boolean) => ({
  tooltip: {
    sx: {
      color: Neutral_0,
      backgroundColor: Navy_80,
      fontFamily,
      maxWidth: noWidth ? 'none' : '300px',
      fontSize,
      fontWeight: semiBoldWeight,
      '& a': { color: Orange_60 },
      '& .MuiTooltip-arrow': { color: Navy_80 },
    },
  },
});

export interface TooltipProps extends MuiTooltipProps {
  noWidth?: boolean;
}

export const ToolTip = (props: TooltipProps) => (
  <MaterialToolTip
    {...props}
    componentProps={getTooltipStylesOverride(props.noWidth)}
  />
);

export { tooltipClasses };

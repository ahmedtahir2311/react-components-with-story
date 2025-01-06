export type DividerVariant = 'fullWidth' | 'inset' | 'middle';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerTextAlign = 'left' | 'right' | 'center';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** If true, the divider will have a lighter color */
  light?: boolean;
  /** The component orientation */
  orientation?: DividerOrientation;
  /** The text alignment when children is provided */
  textAlign?: DividerTextAlign;
  /** Variant to use */
  variant?: DividerVariant;
  /** If true, a vertical divider will have the correct height when used in flex container */
  flexItem?: boolean;
  /** The content of the component */
  children?: React.ReactNode;
  /** If true, the divider will be displayed as absolute */
  absolute?: boolean;
}

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconShape = 'circle' | 'square' | 'rounded';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Source URL for the icon (SVG or image file) */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Size of the icon */
  size?: IconSize;
  /** Shape of the icon container */
  shape?: IconShape;
  /** Whether to show a border */
  bordered?: boolean;
  /** Whether to show a shadow */
  shadowed?: boolean;
  /** Custom width override */
  width?: number | string;
  /** Custom height override */
  height?: number | string;
}

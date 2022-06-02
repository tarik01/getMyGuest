import { TooltipContainer } from './style';

// https://codepen.io/AlicanErdurmaz/pen/QWjvmgr
interface TooltipProps {
  children: React.ReactNode;
  text: string;
  // eslint-disable-next-line react/require-default-props
  position?: string;
}
export function Tooltip({ children, text, position = 'bottom' }: TooltipProps) {
  return (
    <TooltipContainer
      className="tooltip"
      data-position={position}
      data-tool-tip={text}
    >
      {children}
    </TooltipContainer>
  );
}

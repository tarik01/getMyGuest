import Tooltip from 'react-tooltip-lite';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}
export function UTooltip({ children, content }: TooltipProps) {
  return (
    <Tooltip
      content={content}
      direction="down"
      tagName="span"
      className="target"
      useDefaultStyles
    >
      {children}
    </Tooltip>
  );
}

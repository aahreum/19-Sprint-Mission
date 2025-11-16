interface DropdownButtonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
  onClick: () => void;
}

const DropdownButton = ({
  children,
  onClick,
  className,
  ariaLabel,
}: DropdownButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default DropdownButton;

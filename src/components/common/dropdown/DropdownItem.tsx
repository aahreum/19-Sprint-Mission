import classNames from 'classnames';
import styles from './Dropdown.module.css';

interface DropdownItemProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const DropdownItem = ({
  children,
  onClick,
  className = '',
}: DropdownItemProps) => {
  return (
    <li
      className={classNames(styles['list-item'], className)}
      onClick={onClick}>
      {children}
    </li>
  );
};

export default DropdownItem;

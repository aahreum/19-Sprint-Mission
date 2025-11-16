import classNames from 'classnames';
import styles from './Dropdown.module.css';

interface DropdownListProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

const DropdownList = ({
  isOpen,
  children,
  className = '',
}: DropdownListProps) => {
  return (
    isOpen && (
      <ul className={classNames(styles['list-container'], className)}>
        {children}
      </ul>
    )
  );
};

export default DropdownList;

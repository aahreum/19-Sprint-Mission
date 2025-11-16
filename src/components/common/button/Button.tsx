import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps<T extends React.ElementType> {
  as?: T | 'button';
  theme?: 'primary' | 'basic' | 'text';
  size?: 'xs' | 's' | 'm' | 'l';
  children: React.ReactNode;
  full?: boolean;
  className?: string;
}

type PropsWithAs<T extends React.ElementType> = ButtonProps<T> &
  Omit<React.ComponentProps<T>, keyof ButtonProps<T>>;

const Button = <T extends React.ElementType = 'button'>({
  as: Component = 'button',
  theme = 'primary',
  size = 's',
  children,
  full = false,
  className = '',
  ...props
}: PropsWithAs<T>) => {
  return (
    <Component
      className={classNames(
        styles.button,
        styles[`button-${size}`],
        styles[theme],
        { [styles['button-full']]: full },
        className
      )}
      {...props}>
      {children}
    </Component>
  );
};

export default Button;

import { icons } from '@/assets/icons';
import styles from './TagItem.module.css';

const TagItem = ({ tag, onClick }) => {
  return (
    <li key={tag} className={styles.container}>
      #{tag}
      {onClick && (
        <button
          className={styles['remove-button']}
          type="button"
          onClick={() => onClick(tag)}>
          <icons.RemoveIcon />
        </button>
      )}
    </li>
  );
};

export default TagItem;

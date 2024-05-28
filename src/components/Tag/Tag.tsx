import cn from 'classnames';
import { FC, memo } from 'react';

import styles from './Tag.module.scss';

type TagModel = {
  title: string;
  isActive: boolean;
  onSelect: () => void;
};

export const Tag: FC<TagModel> = memo(({ title, isActive, onSelect }) => {
  return (
    <button
      type="button"
      className={cn(styles.tag, { [styles.tag_active]: isActive })}
      onClick={onSelect}
    >
      <p>{title}</p>
    </button>
  );
});

Tag.displayName = 'Tag';

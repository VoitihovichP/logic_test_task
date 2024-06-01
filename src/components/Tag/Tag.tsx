import cn from 'classnames';
import { FC, memo } from 'react';

import styles from './Tag.module.scss';

type TagModel = {
  title: string;
  value: string;
  isActive: boolean;
  onSelect: (tag: string) => void;
};

export const Tag: FC<TagModel> = memo(
  ({ title, value, isActive, onSelect }) => {
    return (
      <button
        type="button"
        className={cn(styles.tag, { [styles.tag_active]: isActive })}
        onClick={() => onSelect(value)}
      >
        <p>{title}</p>
      </button>
    );
  },
);

Tag.displayName = 'Tag';

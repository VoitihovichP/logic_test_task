import cn from 'classnames';
import { FC, memo } from 'react';

import styles from './Tag.module.scss';

type TagProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

export const Tag: FC<TagProps> = memo(({ title, isActive, onClick }) => {
  return (
    <div
      className={cn(styles.tag, { [styles.tag_active]: isActive })}
      onClick={onClick}
    >
      <p>{title}</p>
    </div>
  );
});

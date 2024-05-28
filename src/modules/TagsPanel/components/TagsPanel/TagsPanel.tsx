import { Tag } from 'Components/Tag/Tag.tsx';
import { FC, memo, useCallback } from 'react';

import { TagsPanelModel } from '../../models/TagsPanelModels.ts';
import styles from './TagsPanel.module.scss';

export const TagsPanel: FC<TagsPanelModel> = memo(({ tagsList }) => {
  const handleSelectTag = useCallback(() => {
    alert('test');
  }, []);

  return (
    <div className={styles.tagsPanel}>
      {tagsList.map((item, index) => (
        <Tag
          key={item.id}
          title={item.value}
          isActive={index === 1}
          onSelect={handleSelectTag}
        />
      ))}
    </div>
  );
});

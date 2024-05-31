import { FC, memo, useCallback } from 'react';

import { Tag } from '@/components';

import { TagsPanelModel } from '../../models/TagsPanelModels';
import styles from './TagsPanel.module.scss';

export const TagsPanel: FC<TagsPanelModel> = memo(({ tagsList }) => {
  const handleSelectTag = useCallback(() => {
    console.log('click');
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

TagsPanel.displayName = 'TagsPanel';

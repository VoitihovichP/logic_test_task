import { FC, memo } from 'react';

import { Tag } from '@/components';

import { TagsPanelModel } from '../../models/TagsPanelModels';
import styles from './TagsPanel.module.scss';

export const TagsPanel: FC<TagsPanelModel> = memo(
  ({ tagsList, activeTag, onSelect }) => {
    return (
      <div className={styles.tagsPanel}>
        {tagsList.map((item) => (
          <Tag
            key={item.id}
            title={item.title}
            value={item.value}
            isActive={item.value === activeTag}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  },
);

TagsPanel.displayName = 'TagsPanel';

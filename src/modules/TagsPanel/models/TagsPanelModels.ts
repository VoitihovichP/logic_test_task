type TagsListItem = {
  id: number | string;
  title: string;
  value: string;
};

export type TagsPanelModel = {
  tagsList: TagsListItem[];
  activeTag: string;
  onSelect: (tag: string) => void;
};

export interface ListTypes {
  sections: {
    title: string,
    items: {
      name: string | null,
      action: () => void,
      module: JSX.Element | null
    }[]
  }[]
};

export interface MenuTypes {
    anchorEl?: any;
    onClose: () => void;
    open: boolean;
    list: ListTypes;
};

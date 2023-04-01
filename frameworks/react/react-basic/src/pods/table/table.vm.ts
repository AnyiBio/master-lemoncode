export interface TableEntity {
    avatar_url: string;
    id: string;
    login: string;
}

export interface ColumnEntity {
    id: 'id' | 'avatar_url' | 'login';
    label: string;
    minWidth?: number;
    align?: 'left';
  }
  
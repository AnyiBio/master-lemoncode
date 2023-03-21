export interface MemberEntity {
    avatar_url: string;
    id: string;
    login: string;
}

export interface Column {
    id: 'id' | 'avatar_url' | 'login';
    label: string;
    minWidth?: number;
    align?: 'left';
  }
  
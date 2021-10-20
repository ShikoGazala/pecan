export interface ItemNavigator {
  id: string;
  name: string;
  isOpen: boolean;
  level: number;
  children?: ItemNavigator[];
  hierarchy?: string[];
  icon?: string;
}

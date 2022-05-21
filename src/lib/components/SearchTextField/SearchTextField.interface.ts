export interface ISearchTextFieldProps {
  items: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickItem: (selectedItem: string) => void;
  name: string;
  value: string;
}

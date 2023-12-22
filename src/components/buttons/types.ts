export interface ButtonsProps {
  title?: string;
  buttonType?: "float" | "default" | "shape" | "refresh";
  value?: boolean;
  setValue?: (value: boolean) => void;
  refresh?: boolean;
}

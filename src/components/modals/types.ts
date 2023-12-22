import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  title?: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;  // Adiciona a prop 'disabled' que é opcional
  }
  
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonDosProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
}

const ButtonDos = ({ children, onClick, className, disabled }: ButtonDosProps) => {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			className={cn(
				'bg-white hover:bg-black border-2 hover:text-white px-9 py-5 uppercase tracking-[.2em] font-medium  cursor-pointer',
				className,
			)}
		>
			{children}
		</Button>
	);
};

export default ButtonDos;

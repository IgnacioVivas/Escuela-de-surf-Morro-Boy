import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonDosProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
}

const ButtonDos = ({ children, onClick, className }: ButtonDosProps) => {
	return (
		<Button
			onClick={onClick}
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

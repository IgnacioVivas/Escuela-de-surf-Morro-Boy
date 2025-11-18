import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonUnoProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
}

const ButtonUno = ({ children, onClick, className }: ButtonUnoProps) => {
	return (
		<Button
			onClick={onClick}
			className={cn(
				'bg-celeste text-white px-9 py-5 uppercase tracking-[.2em] font-medium hover:bg-celeste-secundario cursor-pointer',
				className,
			)}
		>
			{children}
		</Button>
	);
};

export default ButtonUno;

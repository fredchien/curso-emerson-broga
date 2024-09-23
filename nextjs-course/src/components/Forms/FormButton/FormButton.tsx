export type FormButtonProps = React.ComponentProps<'button'> & {
    label?: string | null;
    action: () => void;
}

export default function FormButton({label, children, action, className, ...props}: FormButtonProps){
    return (
        <form action={action} className="flex gap-2 items-center rounded-lg p-2 w-full">
            <button 
                type="submit" 
                {...props}
                className={`block ${className}`}>
                {label || children}
            </button>
        </form>
    );
}
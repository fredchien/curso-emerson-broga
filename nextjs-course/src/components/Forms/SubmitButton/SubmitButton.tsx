export type SubmitButtonProps = React.ComponentProps<'button'> & {
    label?: string | null | undefined;
}

export default function SubmitButton({label, children, className, ...props}: SubmitButtonProps){
    return (
        <button 
            type="submit" 
            {...props}
            className={`bg-slate-700 hover-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max ${className}`}>
            {label || children}
        </button>
    );
}
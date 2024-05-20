import { FormEvent, useRef } from "react";

interface Props {
    handleForm: (workData: {
        school: string | undefined;
        visit: string | undefined;
    }) => void

}
export default function WorkInput({ handleForm }: Props) {
    const workInput = useRef<HTMLInputElement | null>(null);
    const visitInput = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const workData = {
            school: workInput.current?.value,
            visit: visitInput.current?.value,
        };
        handleForm(workData);
    }
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h5>Arbeit</h5>
                    <input
                     type="text"
                     ref={workInput} />
                </div>
                <div>
                    <h5>Von bis</h5>
                    <input
                     type="text"
                     ref={visitInput} />
                </div>
            </form>
            <button>Sichern</button>
        </div>
    )
}
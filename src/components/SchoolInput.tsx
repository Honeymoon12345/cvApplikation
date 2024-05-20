import { FormEvent, useRef } from "react";

interface Props {
  handleForm: (schoolData: {
    school: string | undefined;
    visit: string | undefined;
  }) => void
}

export default function SchoolInput({handleForm}: Props) {
  const schoolInput = useRef<HTMLInputElement | null>(null);
  const schoolVisit = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const schoolData = {
      school: schoolInput.current?.value,
      visit: schoolVisit.current?.value,
    };
    handleForm(schoolData);
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>

          <h5>Schule</h5>
          <input
            type="text"
            ref={schoolInput} />
        </div>
        <div>

          <h5>Besucht von bis</h5>
          <input
            type="text"
            ref={schoolVisit} />
        </div>
      </form>
      <button type="submit">Sichern</button>
    </div>
  );
}

import { FormEvent, useRef } from "react";
//import { IPersonalData } from "./ts/interfaces/global_interfaces";

interface Props {
  //data: IPersonalData;
  handleForm: (data: {
    name: string | undefined;
    lastname: string | undefined;
    birthday: string | undefined;
    street: string | undefined;
    zip: string | undefined;
    city: string | undefined;
  }) => void
}

export default function PersonalData({ handleForm }: Props) {
  const nameInput = useRef<HTMLInputElement | null>(null);
  const lastNameInput = useRef<HTMLInputElement | null>(null);
  const birthdayInput = useRef<HTMLInputElement | null>(null);
  const streetInput = useRef<HTMLInputElement | null>(null);
  const zipInput = useRef<HTMLInputElement | null>(null);
  const cityInput = useRef<HTMLInputElement | null>(null);
  /* const initialPersonalData = {
    name: "",
    lastname: "",
    birthday: "",
    street: "",
    zip: "",
    city: "",
  }; */
  //const [personalData, setPersonalData] = useState(initialPersonalData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: nameInput.current?.value,
      lastname: lastNameInput.current?.value,
      birthday: birthdayInput.current?.value,
      street: streetInput.current?.value,
      zip: zipInput.current?.value,
      city: cityInput.current?.value,
    };
    handleForm(data);
  }
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h5>Name</h5>
          <input
            type="text"
            ref={nameInput}
          />
        </div>
        <div>
          <h5>Nachname</h5>
          <input
            type="text"
            ref={lastNameInput}
          />
        </div>
        <div>
          <h5>Geburtstag</h5>
          <input
            type="text"
            id=""
            ref={birthdayInput}
          />
        </div>
        <div>
          <h5>Straße</h5>
          <input
            type="text"
            id=""
            ref={streetInput}
          />
        </div>
        <div>
          <h5>Postleitzahl</h5>
          <input
            type="text"
            id=""
            ref={zipInput}
          />
        </div>
        <div>
          <h5>Ort</h5>
          <input
            type="text"
            ref={streetInput}
          />
        </div>
        <div>
          <button type="submit">Sichern</button>
        </div>
      </form>
    </div>
  );
}

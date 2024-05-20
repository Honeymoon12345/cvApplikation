import { IWork } from "./components/ts/interfaces/global_interfaces";

interface Props {
    workData: IWork
}

export default function WorkOutput({workData}: Props){

    return (
        <div className="containerOutput">
            {workData.work}
            {workData.visit}
        </div>
    )
}
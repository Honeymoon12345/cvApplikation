import { ISchool } from "./ts/interfaces/global_interfaces"

interface Props {
    schoolData: ISchool
}

export default function SchoolOutput({schoolData}: Props){

    return(
        <div className="containerOutput">
            {schoolData.school}
            {schoolData.visit}
        </div>
    )
}
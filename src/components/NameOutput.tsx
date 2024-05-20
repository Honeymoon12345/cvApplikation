import { IPersonalData } from "./ts/interfaces/global_interfaces";
import { Typography } from "@mui/material";


interface Props {
    data: IPersonalData
}
export default function NameOutput({ data }: Props) {

    return (
        <div className="containerOutput">
            <Typography component="h2" variant="h5">

            </Typography>
            {data.name}
            {data.lastname}
            {data.birthday}
            {data.street}
            {data.zip}
            {data.city}
        </div>
    );
}